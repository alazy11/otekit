"use client";
import FormGroup from "../../components/FormGroup";
import FormGroupLang from "../../components/FormGroupLang";
import { useState, useCallback, useEffect } from "react";
import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { show, setProcess } from "@/state-management/slices/open-slices/seoFormSlice";
import ThreeLoading from "../../components/loading/ThreeLoading";
import endPoints from "@/config/endPoints";
import fetcher from "@/util/fetcher";
import useSWR from "swr";
import { setOneData,setRefresh } from "@/state-management/slices/data/seoDataSlice";
import { show as showNotification ,setNotificationType,setNotificationMessage } from "@/state-management/slices/events/notification-slice";


function handleSubmit(e, values) {
    e.preventDefault();
    console.log(keyValue,
        enTitleValue,
        arTitleValue,
        arKeyWordsValue,
        enKeyWordsValue,
        enMetaValue,
        arMetaValue)
}

const pushNotification = (dispatch,type,message)=> {
    dispatch(setNotificationType(type));
    dispatch(setNotificationMessage(message));
    dispatch(showNotification(true));
}

const checkValues = (dispatch,enTitleValue,arTitleValue,enMetaValue,arMetaValue,enKeyWordsValue,arKeyWordsValue,pageValue)=> {
    
    console.log("arKeyWordsValue",arKeyWordsValue.trim().replaceAll(",",''));

    if(enTitleValue.trim().length <= 0) {
        pushNotification(dispatch,"error","please Enter English Title.");
        return false;
    } else if (arTitleValue.trim().length <= 0) {
        pushNotification(dispatch,"error","please Enter Arabic Title.");
        return false;
    }  else if (enKeyWordsValue.trim().replaceAll(",","").trim().length <= 0) {
        pushNotification(dispatch,"error","please Enter English KeyWords.");
        return false;
    } else if (arKeyWordsValue.trim().replaceAll(",","").trim().length <= 0) {
        console.log("arKeyWordsValue",arKeyWordsValue.trim().replace(",","").length)
        pushNotification(dispatch,"error","please Enter Arabic KeyWords.");
        return false;
    } else if (pageValue.trim().length <= 0) {
        pushNotification(dispatch,"error","please Enter Page value.");
        return false;
    } else if (enMetaValue.trim().length <= 0) {
        pushNotification(dispatch,"error","please Enter English Meta Description.");
        return false;
    } else if (arMetaValue.trim().length <= 0) {
        pushNotification(dispatch,"error","please Enter Arabic Meta Description.");
        return false;
    } else {
        return true;
    }
}


const handleBlur = async (e, setIsValid, setErrorMessage) => {
    console.log("blur check")
    let ele = e.currentTarget;
    if (ele.value.trim()) {
        try {
            let res = await fetch(endPoints.seo.checkExistingKey(ele.value), {
                headers: {
                    "cache-control": 'no-store',
                }
            })
            const data = await res.json();
            if (res.status == 200) {
                console.log(data);
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
    const refresh = useSelector(state => state.seoData.refresh);
    const dispatch = useDispatch();
    const { data, error, isLoading } = useSWR(endPoints.pages.getPages, fetcher);

    const [keyValue, setKeyValue] = useState(editData?.seo_key || "");
    const [enTitleValue, setEnTitleValue] = useState(editData?.title?.en || "");
    const [arTitleValue, setArTitleValue] = useState(editData?.title?.ar || "");
    const [arKeyWordsValue, setArKeyWordsValue] = useState(editData?.keywords?.ar.join(',') || "");
    const [enKeyWordsValue, setEnKeyWordsValue] = useState(editData?.keywords?.en.join(',') || "");
    const [enMetaValue, setEnMetaValue] = useState(editData?.description?.en || "");
    const [arMetaValue, setArMetaValue] = useState(editData?.description?.ar || "");
    const [pageValue, setPageValue] = useState(editData?.page_name || "");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (process === "edit") {
            setKeyValue(editData?.seo_key || "");
            setEnTitleValue(editData?.title?.en || "");
            setArTitleValue(editData?.title?.ar || "");
            setArKeyWordsValue(editData?.keywords?.ar.join(',') || "");
            setEnKeyWordsValue(editData?.keywords?.en.join(',') || "");
            setEnMetaValue(editData?.description?.en || "");
            setArMetaValue(editData?.description?.ar || "");
            setPageValue(editData?.page_name || "");
        } else {
            setKeyValue("");
            setEnTitleValue("");
            setArTitleValue("");
            setArKeyWordsValue("");
            setEnKeyWordsValue("");
            setEnMetaValue("");
            setArMetaValue("");
            setPageValue("");
        }
    }, [process]);





    const handleSubmit = async (e) => {
        e.preventDefault();
        if(checkValues(dispatch,enTitleValue,arTitleValue,enMetaValue,arMetaValue,enKeyWordsValue,arKeyWordsValue,pageValue)) {
            setLoading(true);
            const body = {
                seo_key: keyValue,
                title: {
                    en: enTitleValue,
                    ar: arTitleValue
                },
                description: {
                    en: enMetaValue,
                    ar: arMetaValue
                },
                keywords: {
                    en: enKeyWordsValue.split(','),
                    ar: arKeyWordsValue.split(',')
                },
                page_name: pageValue,
                created_at: new Date().toLocaleDateString(),
                updated_at: process === "add" ? new Date().toLocaleDateString() : new Date(),
            }
    
            // console.log(body)
            try {
                let res = await fetch(process === 'add' ? endPoints.seo.setSeo : endPoints.seo.editSeo(editData?.seo_key), {
                    method: process === 'add' ? "POST" : "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body)
                })
                const data = await res.json();
                if (res.status == 200) {
                    setLoading(false);
                    // clear();
                    if(process === "add") {
                        dispatch(setOneData(body));
                        dispatch(setNotificationType("success"));
                        dispatch(setNotificationMessage("the seo have been added successfully."));
                        dispatch(showNotification(true));
                        console.log(data);
                    } else {
                        dispatch(setRefresh(!refresh));
                        dispatch(setNotificationType("success"));
                        dispatch(setNotificationMessage("the seo have been updated successfully."));
                        dispatch(showNotification(true));
                    }
                    console.log(data);
                } 
            } catch (error) {
                console.log(error);
                dispatch(setNotificationType("error"));
                dispatch(setNotificationMessage("there is something wrong!"));
                dispatch(showNotification(true));
            } finally {
                dispatch(show(!seoFormOpen));
            }
        }

    }


    const clear = useCallback(
        () => {
            setKeyValue('');
            setEnTitleValue('');
            setArTitleValue('');
            setArKeyWordsValue('');
            setEnKeyWordsValue('');
            setEnMetaValue('');
            setArMetaValue('');
        },
        [seoFormOpen],
    );
    const handleChangePage = useCallback(
        (event) => {
            setPageValue(event.currentTarget.value);
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
    const handleChangeTitle = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang
            if (lang === "en") {
                setEnTitleValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArTitleValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enTitleValue, arTitleValue],
    );
    const handleChangeKeyWords = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            if (lang === "en") {
                setEnKeyWordsValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArKeyWordsValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [arKeyWordsValue, enKeyWordsValue],
    );
    const handleChangeMeta = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            if (lang === "en") {
                setEnMetaValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArMetaValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enMetaValue, arMetaValue],
    );



    return (
        <>
            {
                seoFormOpen &&
                <div className="fixed top-0 left-0 w-full h-dvh  z-[3000] overflow-hidden" role="dialog"
                >
                    <div className="absolute top-0 left-0 w-full  h-full z-[-1] bg-[#5d7186bf] opacity-50"
                        onClick={() => {
                            console.log("dkjdf")
                            dispatch(show(!seoFormOpen))
                        }}
                    ></div>
                    <div className="w-full h-full overflow-y-auto relative flex items-baseline justify-center py-5">

                        <div className=" w-[90%] sm:w-[80%] md:w-[60%]">
                            <div className="relative z-10 grid grid-cols-1 shadow-[var(--bs-box-shadow)] text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-xl">
                                <div className="py-[18px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]">
                                    <h4 className="text-base text-[#313b5e] font-semibold font-secondary ">Add New</h4>
                                    <button className="hover:text-[var(--main-color)] transition-colors"
                                        onClick={() => {
                                            clear();
                                            dispatch(show(!seoFormOpen));
                                            dispatch(setProcess('add'));
                                        }}
                                    >
                                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <FormContainer handleSubmit={handleSubmit} id={"addForm"}>
                                        <FormGroup
                                            label={"Key"}
                                            id={"key"}
                                            type={"text"}
                                            value={keyValue}
                                            handleChange={handleChangeKey}
                                            placeholder={"Enter Key"}
                                            required={true}
                                            // handleBlur={(process !== "edit") && handleBlur}
                                            handleBlur={handleBlur}
                                        />
                                        <FormGroupLang
                                            label={"Title"}
                                            en={{
                                                id: "enTitle",
                                                name: "enTitle",
                                            }}
                                            ar={{
                                                id: "arTitle",
                                                name: "arTitle",
                                            }}
                                            type={"text"}
                                            enValue={enTitleValue}
                                            arValue={arTitleValue}
                                            handleChange={handleChangeTitle}
                                            placeholder={"Enter Title"}
                                            required={true}
                                        />
                                        <FormGroupLang
                                            label={"Key Words"}
                                            en={{
                                                id: "enKeyWords",
                                                name: "enKeyWords",
                                            }}
                                            ar={{
                                                id: "arKeyWords",
                                                name: "arKeyWords",
                                            }}
                                            type={"text"}
                                            enValue={enKeyWordsValue}
                                            arValue={arKeyWordsValue}
                                            handleChange={handleChangeKeyWords}
                                            placeholder={"key1,key2,key3,..."}
                                            required={true}
                                        />
                                        {/*  */}
                                        <div className="w-full grid grid-cols-1 gap-3 content-start">
                                            <div className="flex items-center justify-between gap-3">
                                                <label
                                                    htmlFor={"id"}
                                                    className="font-medium text-base text-[#5d7186] capitalize"
                                                >
                                                    page
                                                </label>
                                            </div>

                                            <div className="w-full relative">
                                                <select name="" value={pageValue} onChange={handleChangePage} id="id" className={`w-full py-2 px-4 rounded-lg border border-solid border-[var(--bs-input-border-color)] outline-0 transition-colors
                                                font-normal leading-[1.5] text-[#5d7186] text-sm focus:border-[var(--bs-input-focus-border-color)] placeholder:text-[var(--font-placeholder-color)]
                                                check-validity
                                                `}>
                                                    <option value="">...</option>
                                                    {
                                                        data.data?.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item.name}>{item.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                        </div>
                                        {/*  */}
                                        <FormGroupLang
                                            label={"Meta Description"}
                                            en={{
                                                id: "enMeta",
                                                name: "enMeta",
                                            }}
                                            ar={{
                                                id: "arMeta",
                                                name: "arMeta",
                                            }}
                                            type={"textarea"}
                                            enValue={enMetaValue}
                                            arValue={arMetaValue}
                                            handleChange={handleChangeMeta}
                                            placeholder={"Meta Description"}
                                            required={true}
                                        />
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
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                                <button className=" py-2 px-4 text-sm text-white border border-sold border-[var(--main-color)] rounded-xl bg-[var(--main-color)] capitalize
                                                hover:bg-[var(--main-color-hover)] hover:border-[var(--main-color-hover)] transition-colors flex items-center justify-center
                                                "
                                                    disabled={loading}
                                                    form="addForm"
                                                >
                                                    {
                                                        !loading ?
                                                            (process === "add" ? "Save" : "Edit")
                                                            :
                                                            <ThreeLoading cssStyle={"w-[20px] h-[20px]"} />
                                                    }
                                                    {/* Save */}

                                                </button>
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