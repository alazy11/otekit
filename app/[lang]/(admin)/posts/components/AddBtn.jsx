"use client";
import { useSelector, useDispatch } from "react-redux";
import { show } from "@/state-management/slices/open-slices/seoFormSlice";

const AddBtn = ()=>{

    const seoFormOpen = useSelector(state => state.showModel.open);
    const dispatch = useDispatch();

    return (
        <button className="py-[0.348rem] px-3 text-[0.7875rem] leading-[1.5] text-white bg-[var(--main-color)] text-center
        select-none border border-solid border-[var(--main-color)] rounded-lg transition-colors hover:bg-[var(--main-color-hover)]
        min-h-[33px]
        "
        onClick={()=>{
            dispatch(show(true))
        }}
        >
            <span className="hidden sm:block">
                Add New
            </span>
            <span className="sm:hidden">
                <svg width={"1.2em"} height={"1.2em"} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14" />
                    <path d="M5 12h14" />
                </svg>
            </span>
        </button>
    )
};

export default AddBtn;