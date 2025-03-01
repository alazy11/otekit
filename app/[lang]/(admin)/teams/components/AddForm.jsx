"use client";
import FormGroup from "../../components/FormGroup";
import FormGroupLang from "../../components/FormGroupLang";
import { useState, useCallback, useEffect } from "react";
import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { show, setProcess } from "@/state-management/slices/open-slices/seoFormSlice";
import UploadGroup from "@/app/[lang]/(admin)/components/UploadGroup";
import endPoints from "@/config/endPoints";
import { setOneData, setRefresh } from "@/state-management/slices/data/teamDataSlice";
import { show as showNotification, setNotificationType, setNotificationMessage } from "@/state-management/slices/events/notification-slice";
import BtnLoading from "../../components/loading/BtnLoading";
import FormIconGroup from "../../components/FormIconGroup";


const pushNotification = (dispatch, type, message) => {
    dispatch(setNotificationType(type));
    dispatch(setNotificationMessage(message));
    dispatch(showNotification(true));
}

const checkValues = (dispatch, enNameValue, arNameValue, enJobValue, arJobValue, mediaPath) => {
    if (enNameValue.trim().length <= 0) {
        pushNotification(dispatch, "error", "please Enter English name value.");
        return false;
    } else if (arNameValue.trim().length <= 0) {
        pushNotification(dispatch, "error", "please Enter Arabic name value.");
        return false;
    } else if (enJobValue.trim().length <= 0) {
        pushNotification(dispatch, "error", "please Enter English job value.");
        return false;
    } else if (arJobValue.trim().length <= 0) {
        pushNotification(dispatch, "error", "please Enter Arabic job value.");
        return false;
    } else if (mediaPath.trim().length <= 0) {
        pushNotification(dispatch, "error", "please upload personal photo.");
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



const AddForm = ({lang}) => {

    const seoFormOpen = useSelector(state => state.seoForm.open);
    const editData = useSelector(state => state.seoForm.data);
    const process = useSelector(state => state.seoForm.process);
    const refresh = useSelector(state => state.mediaData.refresh);
    const dispatch = useDispatch();


    const [enNameValue, setEnNameValue] = useState(editData?.name?.en || "");
    const [arNameValue, setArNameValue] = useState(editData?.name?.ar || "");
    const [enJobValue, setEnJobValue] = useState(editData?.job?.en || "");
    const [arJobValue, setArJobValue] = useState(editData?.job?.ar || "");
    const [emailValue, setEmailValue] = useState(editData?.email || "");
    const [socialValue, setSocialValue] = useState(editData?.social_media || {
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: "",
        whatsapp: "",
        phone: ""
    });
    const [mediaPath, setMediaPath] = useState(editData?.path || "");
    const [imageInfo, setImageInfo] = useState({});
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (checkValues(dispatch, enNameValue, arNameValue, enJobValue, arJobValue, mediaPath)) {
            setLoading(true);
            const body = {
                name: {
                    en: enNameValue,
                    ar: arNameValue
                },
                job: {
                    en: enJobValue,
                    ar: arJobValue
                },
                picture: {
                    path:mediaPath,
                    ...imageInfo
                },
                email: emailValue,
                social_media: socialValue,
                is_active: 1,
                created_at: new Date().toLocaleDateString(),
                updated_at: process === "add" ? new Date().toLocaleDateString() : new Date(),
            }
            console.log(body);
            try {
                let res = await fetch(process === 'add' ? endPoints.team.setTeam : endPoints.team.editTeam(editData?.id), {
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
                        dispatch(setNotificationMessage("the team element have been added successfully."));
                        dispatch(showNotification(true));
                        // console.log(data);
                    } else {
                        dispatch(setRefresh(!refresh));
                        dispatch(show(!seoFormOpen));
                        dispatch(setNotificationType("success"));
                        dispatch(setNotificationMessage("the team element have been updated successfully."));
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
            setEnNameValue("");
            setArNameValue("");
            setEnJobValue("");
            setArJobValue("");
            setEmailValue("");
            setSocialValue({
                facebook: "",
                twitter: "",
                linkedin: "",
                instagram: "",
                whatsapp: "",
                phone: ""
            })
            setMediaPath("");
            setImageInfo({})
        },
        [seoFormOpen],
    );
    const handleChangeName = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            if (lang === "en") {
                setEnNameValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArNameValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enNameValue, arNameValue],
    );
    const handleChangeJob = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            if (lang === "en") {
                setEnJobValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArJobValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enJobValue, arJobValue],
    );
    const handleChangeEmail = useCallback(
        (event) => {
            setEmailValue(event.currentTarget.value);
            event.currentTarget.setCustomValidity("");
        },
        [emailValue],
    );
    const handleChangeSocial = useCallback(
        (event) => {
            let ele = event.currentTarget;
            if (ele.name === "facebook") {
                setSocialValue(prev => {
                    return {
                        ...prev,
                        facebook: ele.value
                    }
                });
                event.currentTarget.setCustomValidity("");
            } else if (ele.name === "twitter") {
                setSocialValue(prev => {
                    return {
                        ...prev,
                        twitter: ele.value
                    }
                });
                event.currentTarget.setCustomValidity("");
            } else if (ele.name === "linkedin") {
                setSocialValue(prev => {
                    return {
                        ...prev,
                        linkedin: ele.value
                    }
                });
                event.currentTarget.setCustomValidity("");
            } else if (ele.name === "instagram") {
                setSocialValue(prev => {
                    return {
                        ...prev,
                        instagram: ele.value
                    }
                });
                event.currentTarget.setCustomValidity("");
            } else if (ele.name === "whatsapp") {
                setSocialValue(prev => {
                    return {
                        ...prev,
                        whatsapp: ele.value
                    }
                });
                event.currentTarget.setCustomValidity("");
            } else if (ele.name === "phone") {
                setSocialValue(prev => {
                    return {
                        ...prev,
                        phone: ele.value
                    }
                });
                event.currentTarget.setCustomValidity("");
            } else {

            }

        },
        [socialValue],
    );



    return (
        <div className="fixed top-0 left-0 w-full h-dvh  z-[3000] overflow-hidden" role="dialog"
        >
            <div className="absolute top-0 left-0 w-full  h-full z-[-1] bg-[#5d7186bf] opacity-50"
                onClick={() => {
                    dispatch(show(!seoFormOpen))
                    setLoading(false);
                }}
            ></div>
            <div className="w-full h-full overflow-y-auto relative flex items-baseline justify-center py-5">

                <div className=" w-[90%] sm:w-[80%] md:w-[60%]">
                    <div className="relative z-10 grid grid-cols-1 shadow-[var(--bs-box-shadow)] text-[#5d7186] bg-white overflow-hidden rounded-xl">
                        <div className="py-[12px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]
                                bg-[var(--main-color)] text-white
                                ">
                            <h4 className="text-base text-white font-semibold font-secondary ">
                                {process === "add" ? "Add New" : `Edit (${lang === "en" ? enNameValue : arNameValue})`}
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
                            <FormContainer handleSubmit={handleSubmit} cssStyle="grid-cols-1" id={"addForm"}>
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ">
                                    <FormGroupLang
                                        label={"name"}
                                        en={{
                                            id: "enName",
                                            name: "enName",
                                        }}
                                        ar={{
                                            id: "arName",
                                            name: "arName",
                                        }}
                                        type={"text"}
                                        enValue={enNameValue}
                                        arValue={arNameValue}
                                        handleChange={handleChangeName}
                                        placeholder={"Write name..."}
                                        required={true}
                                    />

                                    <FormGroupLang
                                        label={"Job"}
                                        en={{
                                            id: "enJob",
                                            name: "enJob",
                                        }}
                                        ar={{
                                            id: "arJob",
                                            name: "arJob",
                                        }}
                                        type={"text"}
                                        enValue={enJobValue}
                                        arValue={arJobValue}
                                        handleChange={handleChangeJob}
                                        placeholder={"Enter a job..."}
                                        required={true}
                                    />

                                    <FormGroup
                                        label={"Email"}
                                        id={"email"}
                                        type={"text"}
                                        value={emailValue}
                                        handleChange={handleChangeEmail}
                                        placeholder={"Enter email..."}
                                        required={true}
                                    />

                                </div>

                                <div>
                                    <fieldset className="px-3 pb-3 border-2 border-dashed border-[var(--bs-input-border-color)] rounded-md 
                                            grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6  gap-y-2
                                            ">
                                        <legend>Social Data</legend>
                                        <FormIconGroup
                                            label={"Facebook"}
                                            id={"Facebook"}
                                            type={"url"}
                                            name={"facebook"}
                                            value={socialValue.facebook}
                                            handleChange={handleChangeSocial}
                                            placeholder={"Enter Facebook Link..."}
                                            required={true}
                                        >
                                            <svg width={21} height={21} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684v-2.86A22.108 22.108 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.21h2.753v8.201h3.312Z" />
                                            </svg>
                                        </FormIconGroup>

                                        <FormIconGroup
                                            label={"Twitter"}
                                            id={"Twitter"}
                                            type={"url"}
                                            name={"twitter"}
                                            value={socialValue.twitter}
                                            handleChange={handleChangeSocial}
                                            placeholder={"Enter Twitter Link..."}
                                            required={true}
                                        >
                                            <svg width={21} height={21} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.633 7.994c.013.175.013.349.013.523 0 5.325-4.053 11.46-11.46 11.46A11.38 11.38 0 0 1 2 18.169c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05a4.05 4.05 0 0 0 1.82.51 4.022 4.022 0 0 1-1.796-3.353c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.024 4.024 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973c-.3.93-.93 1.72-1.771 2.22a8.074 8.074 0 0 0 2.319-.624 8.646 8.646 0 0 1-2.019 2.083Z" />
                                            </svg>
                                        </FormIconGroup>


                                        <FormIconGroup
                                            label={"Linked in"}
                                            id={"Linked"}
                                            type={"url"}
                                            name={"linkedin"}
                                            value={socialValue.linkedin}
                                            handleChange={handleChangeSocial}
                                            placeholder={"Enter Linked in Link..."}
                                            required={true}
                                        >
                                            <svg width={21} height={21} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.983 7.196a2.188 2.188 0 1 0 0-4.376 2.188 2.188 0 0 0 0 4.376Z" />
                                                <path d="M9.237 8.855v12.139h3.769V14.99c0-1.584.298-3.118 2.262-3.118 1.937 0 1.96 1.81 1.96 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237Zm-6.142 0H6.87v12.139H3.095V8.854Z" />
                                            </svg>
                                        </FormIconGroup>


                                        <FormIconGroup
                                            label={"Instagram"}
                                            id={"Instagram"}
                                            type={"url"}
                                            name={"instagram"}
                                            value={socialValue.instagram}
                                            handleChange={handleChangeSocial}
                                            placeholder={"Enter Instagram Link..."}
                                            required={true}
                                        >
                                            <svg width={21} height={21} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.947 8.308a6.531 6.531 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.42 2.187a4.61 4.61 0 0 0 2.633 2.632 6.583 6.583 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.42-2.187.042-.962.055-1.267.055-3.71-.002-2.442-.002-2.752-.058-3.709Zm-8.953 8.297a4.622 4.622 0 0 1-4.623-4.623 4.622 4.622 0 1 1 4.623 4.623Zm4.807-8.339a1.077 1.077 0 1 1-.002-2.153 1.077 1.077 0 0 1 .002 2.153Z" />
                                                <path d="M11.994 14.983a3.003 3.003 0 1 0 0-6.006 3.003 3.003 0 0 0 0 6.006Z" />
                                            </svg>
                                        </FormIconGroup>

                                        <FormIconGroup
                                            label={"Whatsapp"}
                                            id={"whatsapp"}
                                            type={"url"}
                                            name={"whatsapp"}
                                            value={socialValue.whatsapp}
                                            handleChange={handleChangeSocial}
                                            placeholder={"Enter whatsapp Link..."}
                                            required={true}
                                        >
                                            <svg width={21} height={21} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M18.403 5.633A8.918 8.918 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.98 8.98 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35Zm-6.35 13.812h-.003a7.445 7.445 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462Zm4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112-.15.224-.58.729-.711.879-.131.15-.262.168-.486.056-.224-.112-.947-.349-1.804-1.113-.667-.595-1.117-1.329-1.248-1.554-.131-.225-.014-.346.099-.458.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374.075-.15.038-.281-.019-.393-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.649 9.649 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263" clipRule="evenodd" />
                                            </svg>
                                        </FormIconGroup>


                                        <FormIconGroup
                                            label={"Phone Number"}
                                            id={"Phone"}
                                            type={"text"}
                                            name={"phone"}
                                            value={socialValue.phone}
                                            handleChange={handleChangeSocial}
                                            placeholder={"Enter Phone Number..."}
                                            required={true}
                                        >
                                            <svg width={21} height={21} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m20.487 17.142-4.065-3.696a1.001 1.001 0 0 0-1.39.043l-2.394 2.461c-.576-.11-1.734-.47-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.46-2.394a1 1 0 0 0 .042-1.39L6.86 3.514a1 1 0 0 0-1.39-.087L3.298 5.29a1 1 0 0 0-.29.65c-.016.25-.302 6.171 4.29 10.765 4.006 4.005 9.024 4.298 10.406 4.298.202 0 .326-.006.36-.008a.992.992 0 0 0 .647-.29l1.86-2.172a.997.997 0 0 0-.085-1.39Z" />
                                            </svg>
                                        </FormIconGroup>

                                    </fieldset>
                                </div>

                                <UploadGroup mediaPath={mediaPath}  setMediaInfo={setImageInfo} setPath={setMediaPath} />

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

    );
};

export default AddForm;