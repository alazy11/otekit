"use client";
import DropMenu from "../../components/DropMenu";
import { useRef, useState } from "react";
// import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { show,setEditData,setProcess } from "@/state-management/slices/open-slices/seoFormSlice";

const TableRow = ({item,nativeItem,keyword,status=[]}) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const seoFormOpen = useSelector(state => state.seoForm.open);
    const dispatch = useDispatch();

    return (
        <tr className="cursor-default text-[#313b5e] font-normal hover:bg-[#fafafa] transition-colors
        border-b border-solid border-[#eaedf1]  text-[13px]
        ">
            {/* <td></td> */}
            {
                item.map((ele,index)=>{
                    return (
                    <td key={index} title={ele} className="text-start p-[0.85rem]">
                        {
                            // (status.length > 0 && index + 1 === status[index]) ? 
                            (status.length > 0 && status.some(item=>{
                                return index + 1 === item;
                            })) ? 
                                <span className={`py-[0.375rem] px-3 text-xs font-semibold leading-[1] rounded whitespace-nowrap overflow-hidden text-ellipsis
                                    ${ele == 1 ? 'bg-[#d3f3df] text-[#22c55e]' : 'bg-[#fcdfdf] text-[#ef5f5f]'}
                                `}>{ele == 1 ? "Active" : "Hidden"}</span>
                            : <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">{ele}</p>
                        }
                    </td>
                    )
                })
            }
            <td className="text-center flex justify-center items-center p-[0.85rem] capitalize relative"
                ref={dropdownRef}
            >
                <button className="flex items-center justify-center cursor-pointer px-2 hover:text-[var(--main-color)] transition-colors"
                    onClick={() => {
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
                            onClick={()=>{
                                dispatch(show(true));
                                dispatch(setEditData(nativeItem));
                                // console.log("nativeItem",nativeItem)
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
                            onClick={()=>{
                                dispatch(show(true));
                                dispatch(setEditData(nativeItem));
                                console.log("nativeItem",nativeItem)
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