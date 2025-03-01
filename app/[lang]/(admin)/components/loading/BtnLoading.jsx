

const BtnLoading = ()=> {

    return (
        <button type="button" className="
        py-[0.348rem] px-3 text-[0.7875rem] leading-[1.5] text-white bg-[var(--main-color)] text-center
        select-none border border-solid border-[var(--main-color)] rounded-lg transition-colors hover:bg-[var(--main-color-hover)]
        min-h-[33px]
        ">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-[spin_2s_linear_infinite] inline-block align-middle ltr:mr-2 rtl:ml-2 shrink-0"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
            Loading
        </button>
    )

}

export default BtnLoading;