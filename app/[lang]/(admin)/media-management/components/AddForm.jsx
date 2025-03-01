"use client";
import FormGroup from "../../components/FormGroup";
import FormGroupLang from "../../components/FormGroupLang";
import { useState, useCallback, useEffect } from "react";
import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { show, setProcess } from "@/state-management/slices/open-slices/seoFormSlice";
import ThreeLoading from "../../components/loading/ThreeLoading";
import SelectGroup from "@/app/[lang]/(admin)/components/SelectGroup";
import UploadGroup from "@/app/[lang]/(admin)/components/UploadGroup";
import endPoints from "@/config/endPoints";
import fetcher from "@/util/fetcher";
import useSWR from "swr";
import { setOneData, setRefresh } from "@/state-management/slices/data/mediaDataSlice";
import { show as showNotification, setNotificationType, setNotificationMessage } from "@/state-management/slices/events/notification-slice";
import YoutubeGroup from "../../components/YoutubeGroup";
import BtnLoading from "../../components/loading/BtnLoading";


const pushNotification = (dispatch, type, message) => {
    dispatch(setNotificationType(type));
    dispatch(setNotificationMessage(message));
    dispatch(showNotification(true));
}

const checkValues = (dispatch, enAltValue, arAltValue, mediaPath, pageValue) => {

    if (pageValue.length <= 0) {
        pushNotification(dispatch, "error", "please Enter Page value.");
        return false;
    } else if (enAltValue.trim().length <= 0) {
        pushNotification(dispatch, "error", "please Enter English content value.");
        return false;
    } else if (arAltValue.trim().length <= 0) {
        pushNotification(dispatch, "error", "please Enter Arabic content value.");
        return false;
    } else if (mediaPath.trim().length <= 0) {
        pushNotification(dispatch, "error", "please upload media value.");
        return false;
    } else {
        return true;
    }
}


const handleBlur = async (e, setIsValid, setErrorMessage) => {

    let ele = e.currentTarget;
    if (ele.value.trim()) {
        try {
            let res = await fetch(endPoints.media.checkExistingKey(ele.value), {
                headers: {
                    "cache-control": 'no-store',
                }
            })
            const data = await res.json();
            if (res.status == 200) {
                // console.log(data);
                ele.classList.remove("border-red-500");
                setIsValid(true);
                setErrorMessage("");
            } else {
                ele.classList.add("border-red-500");
                setIsValid(false);
                setErrorMessage(data.data);
                console.log("errororororo")
            }
        } catch (error) {
            console.log(error)
        }
    }
}



const AddForm = () => {

    const seoFormOpen = useSelector(state => state.seoForm.open);
    const editData = useSelector(state => state.seoForm.data);
    const process = useSelector(state => state.seoForm.process);
    const refresh = useSelector(state => state.mediaData.refresh);
    const dispatch = useDispatch();
    const { data, error, isLoading } = useSWR(endPoints.pages.getPages, fetcher);

    const [keyValue, setKeyValue] = useState(editData?.media_key || "");
    const [enAltValue, setEnAltValue] = useState(editData?.alt?.en || "");
    const [arAltValue, setArAltValue] = useState(editData?.alt?.ar || "");
    const [pageValue, setPageValue] = useState(editData?.page_name?.split(",") || []);
    const [typeValue, setTypeValue] = useState(editData?.type || "image");
    const [mediaPath, setMediaPath] = useState(editData?.path || "");
    const [mediaInfo, setMediaInfo] = useState({});
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (checkValues(dispatch, enAltValue, arAltValue, mediaPath, pageValue)) {
            setLoading(true);
            const body = {
                media_key: keyValue,
                alt: {
                    en: enAltValue,
                    ar: arAltValue
                },
                path: mediaPath,
                type: typeValue,
                page_name: pageValue,
                is_active: 1,
                media_info: mediaInfo,
                created_at: new Date().toLocaleDateString(),
                updated_at: process === "add" ? new Date().toLocaleDateString() : new Date(),
            }
            console.log(body);
            try {
                let res = await fetch(process === 'add' ? endPoints.media.setMedia : endPoints.media.editMedia(editData?.media_key), {
                    method: process === 'add' ? "POST" : "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body)
                })
                const data = await res.json();
                if (res.status == 200) {
                    setLoading(false);
                    clear();
                    if (process === "add") {
                        dispatch(setOneData(body));
                        dispatch(show(!seoFormOpen));
                        dispatch(setNotificationType("success"));
                        dispatch(setNotificationMessage("the media have been added successfully."));
                        dispatch(showNotification(true));
                        // console.log(data);
                    } else {
                        dispatch(setRefresh(!refresh));
                        dispatch(show(!seoFormOpen));
                        dispatch(setNotificationType("success"));
                        dispatch(setNotificationMessage("the media have been updated successfully."));
                        dispatch(showNotification(true));
                    }
                    // console.log(data);
                }
            } catch (error) {
                console.log(error);
                dispatch(setNotificationType("error"));
                dispatch(setNotificationMessage("there is something wrong!"));
                dispatch(showNotification(true));
            } finally {
                // dispatch(show(!seoFormOpen));
            }
        }

    }


    const clear = useCallback(
        () => {
            setKeyValue("");
            setEnAltValue("");
            setArAltValue("");
            setPageValue([]);
            setTypeValue("image");
            setMediaPath("");
            setMediaInfo({})
        },
        [seoFormOpen],
    );
    const handleChangeType = useCallback(
        (event) => {
            setTypeValue(event.currentTarget.value);
            event.currentTarget.setCustomValidity("");
            setMediaPath("");
        },
        [typeValue],
    );
    const handleChangePage = useCallback(
        (event) => {
            const options = [...event.currentTarget.selectedOptions];
            const values = options.map(option => option.value);
            setPageValue(values);
            event.currentTarget.setCustomValidity("");
        },
        [pageValue],
    );
    const handleChangeKey = useCallback(
        (event) => {
            setKeyValue(event.currentTarget.value);
            event.currentTarget.setCustomValidity("");
        },
        [keyValue],
    );
    const handleChangeAlt = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            if (lang === "en") {
                setEnAltValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArAltValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enAltValue, arAltValue],
    );



    return (
        <>
            {
                seoFormOpen &&
                <div className="fixed top-0 left-0 w-full h-dvh  z-[3000] overflow-hidden" role="dialog"
                >
                    <div className="absolute top-0 left-0 w-full  h-full z-[-1] bg-[#5d7186bf] opacity-50"
                        onClick={() => {
                            dispatch(show(!seoFormOpen))
                            setLoading(false);
                        }}
                    ></div>
                    <div className="w-full h-full overflow-y-auto relative flex items-baseline justify-center py-5">

                        {/* <div className=" w-[90%] sm:w-[80%] md:w-[60%]"> */}
                        <div className="w-[80%]">
                            <div className="relative z-10 grid grid-cols-1 shadow-[var(--bs-box-shadow)] text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-xl">
                                <div className="py-[18px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]">
                                    <h4 className="text-base text-[#313b5e] font-semibold font-secondary ">
                                        {process === "add" ? "Add New" : `Edit (${keyValue})`}
                                    </h4>
                                    <button className="hover:text-[var(--main-color)] transition-colors"
                                        onClick={() => {
                                            clear();
                                            dispatch(show(!seoFormOpen));
                                            dispatch(setProcess('add'));
                                            setLoading(false);
                                        }}
                                    >
                                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <FormContainer handleSubmit={handleSubmit} cssStyle="grid-cols-2" id={"addForm"}>
                                        <div className="w-full grid grid-cols-1 gap-4 sm:gap-6 ">
                                            <FormGroup
                                                label={"Key"}
                                                id={"key"}
                                                type={"text"}
                                                value={keyValue}
                                                handleChange={handleChangeKey}
                                                placeholder={"Enter Key"}
                                                required={true}
                                                handleBlur={handleBlur}
                                            />
                                            <SelectGroup
                                                label={"Media Type"}
                                                id={"Type"}
                                                value={typeValue}
                                                handleChange={handleChangeType}
                                                options={[
                                                    {
                                                        name: 'Image',
                                                        value: 'image'
                                                    },
                                                    {
                                                        name: 'Video',
                                                        value: 'video'
                                                    },
                                                    {
                                                        name: 'YouTube Video',
                                                        value: 'youtube'
                                                    }
                                                ]}
                                                required={true}
                                            />

                                            <FormGroupLang
                                                label={"alt"}
                                                en={{
                                                    id: "enAlt",
                                                    name: "enAlt",
                                                }}
                                                ar={{
                                                    id: "arAlt",
                                                    name: "arAlt",
                                                }}
                                                type={"text"}
                                                enValue={enAltValue}
                                                arValue={arAltValue}
                                                handleChange={handleChangeAlt}
                                                placeholder={"Write alt..."}
                                                required={true}
                                            />

                                            <SelectGroup
                                                label={"Page"}
                                                id={"Page"}
                                                value={pageValue}
                                                handleChange={handleChangePage}
                                                multiple={true}
                                                options={[
                                                    ...data.data?.map((item) => {
                                                        return (
                                                            {
                                                                name: item.name,
                                                                value: item.name
                                                            }
                                                        )
                                                    })
                                                ]}
                                                required={true}
                                            />
                                        </div>

                                        {
                                            typeValue === "youtube" ? <YoutubeGroup setPath={setMediaPath} /> : <UploadGroup accept={typeValue} mediaPath={mediaPath} setMediaInfo={setMediaInfo} setPath={setMediaPath} />
                                        }

                                    </FormContainer>
                                </div>

                                <div>
                                    <div className="border-t border-solid border-[#eaedf1] px-6 py-[18px]">
                                        <div>
                                            <div className="w-full flex items-center gap-3 justify-end">
                                                <button className=" py-2 px-4 text-sm text-[var(--bs-btn-color)] border border-sold border-[var(--bs-btn-border-color)] rounded-xl bg-transparent capitalize
                                                hover:bg-[var(--bs-btn-hover-bg)]  hover:border-[var(--bs-btn-hover-bg)] hover:text-white transition-colors
                                                "
                                                    onClick={() => {
                                                        clear();
                                                        dispatch(show(!seoFormOpen));
                                                        dispatch(setProcess('add'));
                                                        setLoading(false);
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                                {
                                                    !loading ? (
                                                        <button className=" py-2 px-4 text-sm text-white border border-sold border-[var(--main-color)] rounded-xl bg-[var(--main-color)] capitalize
                                                        hover:bg-[var(--main-color-hover)] hover:border-[var(--main-color-hover)] transition-colors flex items-center justify-center
                                                        "
                                                            disabled={loading}
                                                            form="addForm"
                                                        >
                                                            {
                                                                (process === "add" ? "Save" : "Edit")
                                                            }
                                                        </button>

                                                        ) : (
                                                            <BtnLoading />
                                                        )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default AddForm;