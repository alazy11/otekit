"use client";
import DropMenu from "../../components/DropMenu";
import { useRef, useState } from "react";
// import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { show, setEditData, setProcess } from "@/state-management/slices/open-slices/seoFormSlice";
import { show as showGallery, setDataUrl, setData } from "@/state-management/slices/open-slices/showModelSlice";
import { show as showToast, setToastType, setToastMessage, setToastLoading } from "@/state-management/slices/events/toastSlice";
import endPoints from "@/config/endPoints";
import Image from "next/image";
import appConfig from "@/config/app.config";






async function toggleActive(key, status,setItem, dispatch) {


    dispatch(setToastLoading(true));
    dispatch(setToastMessage("status update process in progress..."));
    dispatch(showToast(true));


    try {
        const res = await fetch(endPoints.media.toggleActive(key, !status), {
            method: "PATCH",
            // next:{
            //     tags:['seo'],
            // },
            headers: {
                "cache-control": "no-store",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({media_key:key,status:!status})
        });

        if (res.status === 200) {
            if (status === 1)
                dispatch(setToastMessage("hide successfully."));
            else
                dispatch(setToastMessage("active successfully."));
            setItem(prev=> {
                return {
                    ...prev,
                    is_active: status === 1 ? 0 : 1
                }
            })
        }
    } catch (err) {
        console.log(err);
    } finally {
        dispatch(setToastLoading(false));
    }
}



const TableRow = ({ lang, nativeItem }) => {

    const [item, setItem] = useState(nativeItem)
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const seoFormOpen = useSelector(state => state.seoForm.open);
    const dispatch = useDispatch();


    console.log("nativeItem",nativeItem)


    return (
        <tr className="cursor-default text-[#313b5e] font-normal hover:bg-[#fafafa] transition-colors
        border-b border-solid border-[#eaedf1]  text-[13px]
        "
            onClick={() => {
                if (item.type !== "youtube") {
                    dispatch(setDataUrl(endPoints.media.getMediaInfo(item.id)));
                }
                dispatch(setData({
                    type: item.type,
                    path: item.path
                }));
                dispatch(showGallery(true));
            }}
        >
            <td title={item.name[lang]} className="text-start p-[0.85rem]">
                <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{item.name[lang]}</p>
            </td>
            <td title={item.job[lang]} className="text-start p-[0.85rem]">
                <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{item.job[lang]}</p>
            </td>
            <td title={item.email} className="text-start p-[0.85rem]">
                <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{item.email}</p>
            </td>
            <td className="text-start p-[0.85rem]">
                <div className="w-14 h-14 p-0.5 rounded-xl bg-[#eef2f7] overflow-hidden relative">
                    {/* <Image src={"https://t3.ftcdn.net/jpg/02/43/12/34/240_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"} quality={100} fill className="object-cover" alt="employee photo" /> */}
                    <Image src={appConfig.backEndUri + "/" + item.picture.path.replaceAll("\\", '/')} quality={100} fill className="object-cover" alt="employee photo" />
                </div>
            </td>
            <td className="text-start p-[0.85rem]">
            <button className={`py-[0.375rem] px-3 text-xs font-semibold leading-[1] rounded whitespace-nowrap overflow-hidden text-ellipsis
            bg-[var(--main-color)] transition-colors hover:bg-[var(--main-color-hover)] text-white
            `}>social media</button>
            </td>
            <td title={item.is_active} className="text-start p-[0.85rem]">
                <span className={`py-[0.375rem] px-3 text-xs font-semibold leading-[1] rounded whitespace-nowrap overflow-hidden text-ellipsis
                    ${item.is_active == 1 ? 'bg-[#d3f3df] text-[#22c55e]' : 'bg-[#fcdfdf] text-[#ef5f5f]'}
                `}>{item.is_active == 1 ? "Active" : "Hidden"}</span>
            </td>
            <td title={item.created_at} className="text-start p-[0.85rem]">
                <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{item.created_at}</p>
            </td>
            <td title={item.updated_at} className="text-start p-[0.85rem]">
                <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{item.updated_at}</p>
            </td>
            <td className="text-center p-[0.85rem] capitalize relative"
                ref={dropdownRef}
            >
                <button className="flex items-center justify-center cursor-pointer px-2 hover:text-[var(--main-color)] transition-colors"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsOpen(!isOpen);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></path></svg>
                </button>
                {
                    isOpen && (
                        <DropMenu isOpen={isOpen} setIsOpen={setIsOpen} dropdownRef={dropdownRef}
                            cssStyle='top-[30px] ltr:right-1/2 rtl:left-1/2'
                        >
                            <button className="w-full px-6 py-1.5 text-[#5d7186] flex items-center gap-[0.375rem] text-sm
                            transition-colors hover:bg-[#f8f9fa]
                            "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleActive(item.media_key, item.is_active,setItem, dispatch);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="block text-[#5d7186] text-lg">
                                    {
                                        item.is_active === 1 ? (
                                            <svg width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19.004c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.02-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.309c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633c.02.066 2.315 6.683 9.948 6.683Zm0-14c-1.837 0-3.346.396-4.604.98l-3.69-3.687L2.294 3.71l18 18 1.414-1.414-3.32-3.32c2.615-1.95 3.548-4.614 3.562-4.656a.994.994 0 0 0 0-.633c-.022-.067-2.316-6.684-9.95-6.684Zm4.972 10.558-2.28-2.28c.19-.39.308-.82.308-1.278 0-1.641-1.36-3-3-3-.46 0-.888.118-1.277.309L8.915 7.505A9.26 9.26 0 0 1 12 7.004c5.35 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558Z"></path></svg>
                                        ) : (
                                            <svg width={"1rem"} height={"1rem"} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3Z" />
                                                <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316c.022.067 2.316 6.684 9.95 6.684 7.632 0 9.926-6.617 9.947-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5Zm0 12c-5.35 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5Z" />
                                            </svg>
                                        )
                                    }
                                </span>
                                <span>
                                    {
                                        item.is_active === 1 ? "Hide" : "Active"
                                    }
                                </span>
                            </button>
                            <button className="w-full px-6 py-1.5 text-[#5d7186] flex items-center gap-[0.375rem] text-sm
                            transition-colors hover:bg-[#f8f9fa]
                            "
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch(show(true));
                                    dispatch(setEditData(item));
                                    // console.log("item",item)
                                    dispatch(setProcess('edit'));
                                }}
                            >
                                <span className="block text-[#5d7186] text-lg">
                                    <svg width={'1rem'} height={"1rem"} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m7 17.011 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414 0-.534-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.581v4.43ZM18.045 4.456l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58ZM9 13.416l6.03-5.974 1.586 1.586L10.587 15 9 15.004v-1.589Z" />
                                        <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2Z" />
                                    </svg>
                                </span>
                                <span>
                                    Edit
                                </span>
                            </button>

                            <button className="w-full px-6 py-1.5  text-[#ef5f5f] flex items-center gap-[0.375rem] text-sm
                            transition-colors hover:bg-[#f8f9fa]
                            "
                                onClick={() => {
                                    dispatch(show(true));
                                    dispatch(setEditData(item));
                                    console.log("item", item)
                                    dispatch(setProcess('edit'));
                                }}
                            >
                                <span className="block text-lg">
                                    <svg width="1rem" height="1rem" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
                                </span>
                                <span>
                                    Delete
                                </span>
                            </button>

                        </DropMenu>
                    )
                }
            </td>
        </tr>
    )
}

export default TableRow;