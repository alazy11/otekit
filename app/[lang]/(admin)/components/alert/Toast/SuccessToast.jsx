
"use client";
import { useAppSelector } from "@/lib/hooks/StoreHook";
import { useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks/StoreHook";
import { show, setToastType, setToastMessage,setToastLoading } from "@/state-management/slices/events/toastSlice";


const SuccessToast = () => {

    const toastMessage = useAppSelector(state => state.showToast.message);
    const loading = useAppSelector(state => state.showToast.loading);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(!loading) {
            setTimeout(() => {
                dispatch(show(false))
            }, 4000);
        }
    },[loading]);


    return (
        <div className=" p-3 shadow-lg rounded bg-slate-800 text-white fixed animation-left w-fit top-7 ltr:-right-full rtl:-left-full z-[100000] ">
            <div className="w-full flex items-center gap-3">
                <div className="relative min-w-[2.2rem] min-h-[2.2rem]">
                    {
                        loading ? 
                        <span className="animate-spin absolute top-0 left-0 border-[3px] border-[#a5dc864d] border-l-[#a5dc86] rounded-full w-[2.2rem] h-[2.2rem] inline-block align-middle"></span>
                        :
                        <svg width={"2.2rem"} height={"2.2rem"} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="#a5dc86" d="m7 12.5 3 3 7-7" />
                        <path stroke="rgba(165,220,134,.3)" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                        </svg>
                    }
                </div>
                <p>
                    {toastMessage}
                </p>
            </div>
        </div>
    )

}

export default SuccessToast;