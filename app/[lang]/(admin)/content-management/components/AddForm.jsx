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

    const [keyValue, setKeyValue] = useState("");
    const [enContentValue, setEnContentValue] = useState("");
    const [arContentValue, setArContentValue] = useState("");



    const clear = useCallback(
        () => {
            setKeyValue('');
            setEnContentValue('');
            setArContentValue('');
        },
        [seoFormOpen],
    );
    const handleChangeKey = useCallback(
        (event) => {
            setKeyValue(event.currentTarget.value);
            event.currentTarget.setCustomValidity("");
        },
        [keyValue],
    );
    const handleChangeContent = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            console.log("ele.dataset.lang",ele.dataset.lang)
            if(lang === "en") {
                setEnContentValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArContentValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enContentValue,arContentValue],
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
                                    <FormContainer cssStyle="grid-cols-1" id={"addForm"}>
                                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ">
                                        <FormGroup
                                            label={"Key"}
                                            id={"key"}
                                            type={"text"}
                                            value={keyValue}
                                            handleChange={handleChangeKey}
                                            placeholder={"Enter Key"}
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
                                        </div>

                                        <FormGroupLang
                                            label={"Content"}
                                            en={ {
                                                id:"enContent",
                                                name:"enContent",
                                            }}
                                            ar={ {
                                                id:"arContent",
                                                name:"arContent",
                                            }}
                                            type={"textarea"}
                                            enValue={enContentValue}
                                            arValue={arContentValue}
                                            handleChange={handleChangeContent}
                                            placeholder={"Write Content..."}
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