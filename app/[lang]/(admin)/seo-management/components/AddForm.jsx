"use client";
import FormGroup from "../../components/FormGroup";
import FormGroupLang from "../../components/FormGroupLang";
import { useState, useCallback } from "react";
import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { show } from "@/state-management/slices/open-slices/seoFormSlice";


const AddForm = () => {

    const seoFormOpen = useSelector(state => state.seoForm.open);
    const dispatch = useDispatch();

    const [emailValue, setEmailValue] = useState("");
    const [enTitleValue, setEnTitleValue] = useState("");
    const [arTitleValue, setArTitleValue] = useState("");
    const [arKeyWordsValue, setArKeyWordsValue] = useState("");
    const [enKeyWordsValue, setEnKeyWordsValue] = useState("");
    const [enMetaValue, setEnMetaValue] = useState("");
    const [arMetaValue, setArMetaValue] = useState("");



    const clear = useCallback(
        () => {
            setEmailValue('');
            setEnTitleValue('');
            setArTitleValue('');
            setArKeyWordsValue('');
            setEnKeyWordsValue('');
            setEnMetaValue('');
            setArMetaValue('');
        },
        [seoFormOpen],
    );
    const handleChangeEmail = useCallback(
        (event) => {
            setEmailValue(event.currentTarget.value);
            event.currentTarget.setCustomValidity("");
        },
        [emailValue],
    );
    const handleChangeTitle = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang
            console.log("ele.dataset.lang",ele.dataset.lang)
            if(lang === "en") {
                setEnTitleValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArTitleValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enTitleValue,arTitleValue],
    );
    const handleChangeKeyWords = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            console.log("ele.dataset.lang",ele.dataset.lang)
            if(lang === "en") {
                setEnKeyWordsValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArKeyWordsValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [arKeyWordsValue,enKeyWordsValue],
    );
    const handleChangeMeta = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            console.log("ele.dataset.lang",ele.dataset.lang)
            if(lang === "en") {
                setEnMetaValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArMetaValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enMetaValue,arMetaValue],
    );



    return (
        <>
            {
                seoFormOpen &&
                <div className="fixed top-0 left-0 w-full h-dvh  z-[3000] overflow-hidden" role="dialog">
                    <div className="absolute top-0 left-0 w-full  h-full z-[-1] bg-[#5d7186bf] opacity-50"
                    onClick={()=>{
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
                                    onClick={()=>{
                                        clear();
                                        dispatch(show(!seoFormOpen));
                                    }}
                                    >
                                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="p-6">
                                    <FormContainer id={"addForm"}>
                                        <FormGroup
                                            label={"Key"}
                                            id={"key"}
                                            type={"text"}
                                            value={emailValue}
                                            handleChange={handleChangeEmail}
                                            placeholder={"Enter Key"}
                                            required={true}
                                        />
                                        <FormGroupLang
                                            label={"Title"}
                                            en={ {
                                                id:"enTitle",
                                                name:"enTitle",
                                            }}
                                            ar={ {
                                                id:"arTitle",
                                                name:"arTitle",
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
                                            en={ {
                                                id:"enKeyWords",
                                                name:"enKeyWords",
                                            }}
                                            ar={ {
                                                id:"arKeyWords",
                                                name:"arKeyWords",
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
        <select name="" id="id" className={`w-full py-2 px-4 rounded-lg border border-solid border-[var(--bs-input-border-color)] outline-0 transition-colors
        font-normal leading-[1.5] text-[#5d7186] text-sm focus:border-[var(--bs-input-focus-border-color)] placeholder:text-[var(--font-placeholder-color)]
        check-validity
        `}>
            <option value="">fyjr</option>
            <option value="">rtjrt</option>
            <option value="">set</option>
            <option value="">pgfjpo</option>
            <option value="">tfrftu</option>
        </select>
    </div>
    
    </div>
                                        {/*  */}
                                        <FormGroupLang
                                            label={"Meta Description"}
                                            en={ {
                                                id:"enMeta",
                                                name:"enMeta",
                                            }}
                                            ar={ {
                                                id:"arMeta",
                                                name:"arMeta",
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
                                                onClick={()=>{
                                                    clear()
                                                    dispatch(show(!seoFormOpen))
                                                }}
                                                >
                                                    Cancel
                                                </button>
                                                <button className=" py-2 px-4 text-sm text-white border border-sold border-[var(--main-color)] rounded-xl bg-[var(--main-color)] capitalize
                                                hover:bg-[var(--main-color-hover)] hover:border-[var(--main-color-hover)] transition-colors
                                                "
                                                    form="addForm"
                                                >
                                                    Save
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