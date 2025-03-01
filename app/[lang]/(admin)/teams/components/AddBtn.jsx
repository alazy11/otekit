"use client";
import { useSelector, useDispatch } from "react-redux";
import { show,setProcess } from "@/state-management/slices/open-slices/seoFormSlice";
import { show as showNotification ,setNotificationType } from "@/state-management/slices/events/notification-slice";
import { show as showToast, setToastType, setToastMessage,setToastLoading } from "@/state-management/slices/events/toastSlice";
import { setUploadUrl } from "@/state-management/slices/uploadDataSlice";
import endPoints from "@/config/endPoints";

const AddBtn = ()=>{

    const seoFormOpen = useSelector(state => state.seoForm.open);
    const dispatch = useDispatch();

    return (
        <button className="py-[0.348rem] px-3 text-[0.7875rem] leading-[1.5] text-white bg-[var(--main-color)] text-center
        select-none border border-solid border-[var(--main-color)] rounded-lg transition-colors hover:bg-[var(--main-color-hover)]
        min-h-[33px]
        "
        onClick={()=>{
            dispatch(show(true));
            dispatch(setProcess('add'));
            dispatch(setUploadUrl(endPoints.team.uploadTeam));

            console.log("open")
// 
            // dispatch(setNotificationType("warning"));
            // dispatch(showNotification(true));
            // dispatch(setToastMessage("add successfully."));
            // dispatch(showToast(true));
            // setTimeout(() => {
            //     dispatch(setToastLoading(false))
            // }, 4000);


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