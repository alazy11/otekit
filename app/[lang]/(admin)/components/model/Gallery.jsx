"use client";
import { useSelector, useDispatch } from "react-redux";
import { show } from "@/state-management/slices/open-slices/showModelSlice";
import Image from "next/image";
import profile from "@/public/images/profile.jpeg";
import appConfig from "@/config/app.config";
import { useEffect, useState } from "react";
import fetcher from "@/util/fetcher";
import useSWR from "swr";



const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function niceBytes(x) {

    let l = 0, n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
        n = n / 1024;
    }

    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}


const Gallery = ()=>{

    const dataModel = useSelector(state => state.showModel.data);
    const dataUrl = useSelector(state => state.showModel.dataUrl);
    const [data,setData] = useState(dataModel);
    const seoFormOpen = useSelector(state => state.showModel.open);
    // const { data, error, isLoading } = useSWR(dataUrl, fetcher);
    // const replayFormOpen = useSelector(state => state.seoForm.open);
    const dispatch = useDispatch();


    useEffect(()=>{
        async function getData() {
            const res = await fetch(dataUrl,{
                headers: {
                    "cache-control":'no-store'
                }
            });
            const result = await res.json();
            // console.log(result.data[0]);
            setData(prev => ({...prev,...result.data[0]}));
        }
        if(dataUrl)
        getData();

    },[dataUrl]);


    // if(isLoading) return <div>loading</div>
    // if(data)
    return (
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
                        <h4 className="text-base text-white font-semibold font-secondary ">Gallery View</h4>
                        <button className="hover:text-[#5d7186] transition-colors"
                            onClick={() => {
                                dispatch(show(false));
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
                                <div className="w-full flex justify-between items-center">
                                    <h5 className="text-[0.9375rem] font-semibold leading-[1.1] text-[#313b5e] font-secondary">
                                        {data?.name || "Youtube Video"}
                                    </h5>

                                    <span>
                                        {niceBytes(data?.size)}
                                    </span>
                                </div>
                                <hr />
                                <div className="relative w-full h-[350px]">
                                    {
                                        data.type === "youtube" ? 
                                        (<iframe width="100%" height="315" src={data.path} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>)
                                        : data.type.startsWith('image') ? 
                                        (
                                            <Image src={appConfig.backEndUri+"/"+data.path.replaceAll("\\","/")} className="object-contain" fill alt="" /> 
                                        ) :
                                        (
                                            <video className="w-full h-full absolute top-0 ltr:left-0 rtl:right-0 object-contain" 
                                            controls playsInline
                                            // src={`${appConfig.backEndUri}/uploads/media/0ca94477-f28d-4fe5-b188-8a27bd6c1f9b1732483799390.mp4`}></video>
                                            src={appConfig.backEndUri+"/"+data.path.replaceAll("\\","/")}></video>
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


}


export default Gallery;