"use client";
import FormGroup from "../../components/FormGroup";
import FormGroupLang from "../../components/FormGroupLang";
import { useState, useCallback } from "react";
import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { show } from "@/state-management/slices/open-slices/seoFormSlice";
import SelectGroup from "../../components/SelectGroup";
import UploadGroup from "../../components/UploadGroup";

const AddForm = () => {

    const seoFormOpen = useSelector(state => state.seoForm.open);
    const dispatch = useDispatch();

    const [keyValue, setKeyValue] = useState("");
    const [typeValue, setTypeValue] = useState("");
    const [pageValue, setPageValue] = useState("");
    const [enAltValue, setEnAltValue] = useState("");
    const [arAltValue, setArAltValue] = useState("");


    const clear = useCallback(
        () => {
            setKeyValue('');
            setEnAltValue('');
            setArAltValue('');
        },
        [seoFormOpen],
    );
    const handleChangeType = useCallback(
        (event) => {
            setTypeValue(event.currentTarget.value);
            event.currentTarget.setCustomValidity("");
        },
        [typeValue],
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
    const handleChangeAlt = useCallback(
        (event) => {
            const ele = event.currentTarget;
            const lang = ele.dataset.lang;
            console.log("ele.dataset.lang",ele.dataset.lang)
            if(lang === "en") {
                setEnAltValue(ele.value);
                ele.setCustomValidity("");
            } else {
                setArAltValue(ele.value);
                ele.setCustomValidity("");
            }
        },
        [enAltValue,arAltValue],
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
                                        <SelectGroup 
                                            label={"Media Type"}
                                            id={"Type"}
                                            value={typeValue}
                                            handleChange={handleChangeType}
                                            options={[
                                                {
                                                    name:'Image',
                                                    value:'image'
                                                },
                                                {
                                                    name:'Video',
                                                    value:'video'
                                                }
                                            ]}
                                            required={true}
                                        />
                                        
                                        <FormGroupLang
                                            label={"alt"}
                                            en={ {
                                                id:"enAlt",
                                                name:"enAlt",
                                            }}
                                            ar={ {
                                                id:"arAlt",
                                                name:"arAlt",
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
                                            options={[
                                                {
                                                    name:'Image',
                                                    value:'image'
                                                },
                                                {
                                                    name:'Video',
                                                    value:'video'
                                                }
                                            ]}
                                            required={true}
                                        />
                                        </div>

                                        <UploadGroup />

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