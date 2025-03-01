"use client";
// import FormGroup from "../../components/FormGroup";
// import FormGroupLang from "../../components/FormGroupLang";
// import { useState, useCallback } from "react";
// import FormContainer from "../../components/FormContainer";
import { useSelector, useDispatch } from "react-redux";
import { show } from "@/state-management/slices/open-slices/showModelSlice";
// import { show as showReplay } from "@/state-management/slices/open-slices/seoFormSlice";
// import SelectGroup from "../../components/SelectGroup";
// import UploadGroup from "../../components/UploadGroup";
import Image from "next/image";
import profile from "@/public/images/profile.jpeg";




const ShowModel = () => {

    const seoFormOpen = useSelector(state => state.showModel.open);
    // const replayFormOpen = useSelector(state => state.seoForm.open);
    const dispatch = useDispatch();




    return (
        <>
            {
                seoFormOpen &&
                <div className="fixed top-0 left-0 w-full h-dvh z-[3000] overflow-hidden" role="dialog">
                    <div className="absolute top-0 left-0 w-full  h-full z-[-1] bg-[#5d7186bf] opacity-50"
                        onClick={() => {
                            console.log("dkjdf")
                            dispatch(show(!seoFormOpen))
                        }}
                    ></div>
                    <div className="w-full h-full overflow-y-auto relative flex items-baseline justify-center py-5">

                        <div className=" w-[90%] sm:w-[80%] md:w-[60%]">
                            {/* <div className="relative z-10 grid grid-cols-1 overflow-hidden shadow-[var(--bs-box-shadow)] text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-xl"> */}
                            <div className="relative z-10 grid grid-cols-1 overflow-hidden shadow-[var(--bs-box-shadow)] text-[#5d7186] bg-white  rounded-xl">
                                <div className="py-[12px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]
                                bg-[var(--main-color)] text-white
                                ">
                                    {/* <h4 className="text-base text-[#313b5e] font-semibold font-secondary ">Message contact</h4> */}
                                    <h4 className="text-base text-white font-semibold font-secondary ">Message contact</h4>
                                    <button className="hover:text-[#5d7186] transition-colors"
                                        onClick={() => {
                                            dispatch(show(!seoFormOpen));
                                        }}
                                    >
                                        <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div>
                                    <div className="px-6 pb-5">
                                        <div className="my-3">
                                            <div className="w-full flex justify-between">
                                                <h5 className="text-[0.9375rem] mb-[10px] font-semibold leading-[1.1] text-[#313b5e] font-secondary">
                                                    Hi Jorge, How are you?
                                                </h5>
                                                <div className="flex items-center justify-center text-[#323a46] bg-[#eef2f7] rounded-xl overflow-hidden">
                                                    <button className="px-4 py-2 bg-transparent transition-colors hover:text-[var(--main-color)]"
                                                    onClick={()=>{
                                                        dispatch(show(!seoFormOpen))
                                                        dispatch(showReplay(true))
                                                    }}
                                                    >
                                                        <span>
                                                            <svg width={15} height={15} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="m15 14 5-5-5-5" />
                                                                <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                    <button className="px-4 py-2 bg-transparent transition-colors hover:text-[var(--main-color)]">
                                                        <span>
                                                        <svg width={15} height={15} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 6h18" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  <path d="M10 11v6" />
  <path d="M14 11v6" />
</svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="mb-9 mt-[0.375rem] text-[#5d7186] flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full relative overflow-hidden">
                                                        <Image src={profile} alt="avatar image" fill className="object-cover" />
                                                    </div>
                                                    <div className="h-full block flex-col justify-between">
                                                        <h6 className="text-xs font-semibold leading-[1.1] text-[#313b5e] font-secondary">alazy alhimeari</h6>
                                                        <span className="text-xs leading-[1.1] text-[#5d7186]">From: alazyAlhimeari@gmail.com</span>
                                                    </div>
                                                </div>
                                                <div className="h-full flex items-start self-baseline">
                                                    <span className="text-sm leading-[1.5] text-[#5d7186]">
                                                        07:23 AM
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="text-[#5d7186] text-sm leading-[1.5]">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

                                                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.

                                                    Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div>
                                    <div className="border-t border-solid border-[#eaedf1] px-6 py-[18px]">
                                        <div>
                                            <div className="w-full flex items-center gap-3 justify-end">
                                                <button className=" py-2 px-4 text-sm text-[var(--bs-btn-color)] border border-sold border-[var(--bs-btn-border-color)] rounded-xl bg-transparent capitalize
                                                hover:bg-[var(--bs-btn-hover-bg)]  hover:border-[var(--bs-btn-hover-bg)] hover:text-white transition-colors
                                                "
                                                    onClick={() => {
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
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ShowModel;