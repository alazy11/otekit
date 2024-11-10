"use client";
import Image from "next/image";
// import profile from "@/public/images/profile.jpeg";
import profile from "@/public/images/profile.jpeg";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {show} from "@/state-management/slices/open-slices/sideNavSlice";

const Header = () => {

    const [isOpen,setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const sideNavOpen = useSelector(state=>state.sideNavOpen.open);
    const headerTitle = useSelector(state=>state.dashHeader.title);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);



    return (
        <header className="sticky w-full top-0 ltr:left-0 rtl:right-0 h-[100px] bg-[#f9f7f7] z-[1000] " >
            <div className="container-main">
                <div className="flex items-center justify-between h-full">
                    <div className="h-full flex items-center">
                    <div className="flex items-center lsm:hidden">
                        <button className="text-[#707793] ltr:mr-3 rtl:ml-3"
                        onClick={()=>{
                            dispatch(show(!sideNavOpen));
                        }}
                        >
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"></path></svg>
                            </span>
                        </button>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <h4 className="text-[#707793] text-base sm:text-lg font-bold uppercase">{headerTitle}</h4>
                    </div>
                    </div>
                    <div className="flex items-center gap-1 h-full">
                        <div className="hidden sm:block">
                        <button className="rounded-full transition-colors text-[#707793] p-2 relative hover:text-[var(--main-color)] 
                            flex items-center gap-1
                            ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083" clipRule="evenodd" opacity=".5"></path><path fill="currentColor" d="M15.523 12c0 1.657-1.354 3-3.023 3s-3.023-1.343-3.023-3S10.83 9 12.5 9s3.023 1.343 3.023 3"></path></svg>
                            </button>
                        </div>
                        <div>
                        <button className="rounded-full transition-colors text-[#707793] p-2 relative hover:text-[var(--main-color)] 
                            flex items-center gap-1
                            ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></path><path fill="currentColor" fillRule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="h-full flex items-center justify-center">
                            <button className="rounded-full transition-colors text-[#707793] p-2 relative hover:text-[var(--main-color)] 
                            flex items-center gap-1
                            ">
                                {/* <span> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M2.028 11.25A10 10 0 0 1 12 2c-.83 0-1.57.364-2.18.921c-.605.554-1.116 1.328-1.53 2.242c-.416.92-.74 1.996-.959 3.163a20 20 0 0 0-.318 2.924zm0 1.5h4.985c.036 1.002.143 1.988.318 2.924c.22 1.167.543 2.243.959 3.163c.414.914.925 1.688 1.53 2.242c.61.557 1.35.921 2.18.921c-5.27 0-9.589-4.077-9.972-9.25" clipRule="evenodd"></path><path fill="currentColor" d="M12 2c.831 0 1.57.364 2.18.921c.605.554 1.117 1.328 1.53 2.242c.417.92.74 1.996.959 3.163c.175.936.282 1.922.318 2.924h4.985A10 10 0 0 0 12 2m4.669 13.674c-.219 1.167-.542 2.243-.959 3.163c-.413.914-.925 1.688-1.53 2.242c-.61.557-1.349.921-2.18.921c5.27 0 9.589-4.077 9.972-9.25h-4.985a20 20 0 0 1-.318 2.924"></path><path fill="currentColor" d="M12 3.396c-.275 0-.63.117-1.043.495c-.416.38-.833.977-1.201 1.79c-.366.808-.663 1.784-.867 2.873c-.16.859-.26 1.768-.296 2.696h6.814a18.5 18.5 0 0 0-.296-2.696c-.204-1.09-.5-2.065-.867-2.872c-.368-.814-.784-1.41-1.2-1.791c-.414-.378-.769-.495-1.044-.495m-3.111 12.05c.204 1.09.501 2.065.867 2.873c.368.813.785 1.41 1.2 1.79c.414.379.77.496 1.044.496c.275 0 .63-.117 1.044-.495c.416-.381.832-.978 1.2-1.791c.366-.808.663-1.783.867-2.873c.161-.858.261-1.768.296-2.696H8.593c.035.928.135 1.838.296 2.696" opacity=".5"></path></svg>
                                {/* </span> */}
                                <span>
                                    AR
                                </span>
                            </button>
                        </div>
                        <div className="relative h-full flex items-center justify-center"
                        ref={dropdownRef}
                        >
                            <button className="rounded-full transition-colors text-[#707793] p-2 relative hover:text-[var(--main-color)] 
                            flex items-center gap-1
                            "
                            onClick={()=>{
                                setIsOpen(!isOpen);
                            }}
                            >
                                <span className="block relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image src={profile} fill className="object-cover" alt="profile image" />
                                </span>
                            </button>
                            {
                                isOpen && (
                                    <div className="absolute top-full mt-0.5 ltr:right-0 rtl:left-0 text-[0.875rem] drop-shadow
                                    bg-white py-1 min-w-40 text-[#5d7186] border border-solid border-[#eaedf1] rounded-lg
                                    ">
                                        <h6 className="py-2 px-[18px] text-[0.7875rem]">Welcome Alazy!</h6>
                                        <Link href="#" className="w-full px-6 py-1.5 text-[#5d7186] flex items-center gap-[0.375rem] text-sm
                                        transition-colors hover:bg-[#f8f9fa]
                                        " >
                                        <span className="block text-[#5d7186] text-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={2}><circle cx={12} cy={9} r={3}></circle><circle cx={12} cy={12} r={10}></circle><path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"></path></g></svg>
                                        </span>
                                        <span>
                                            Profile
                                        </span>
                                        </Link>
                                        <Link href="#" className="w-full px-6 py-1.5 text-[#5d7186] flex items-center gap-[0.375rem] text-sm
                                        transition-colors hover:bg-[#f8f9fa]
                                        " >
                                        <span className="block text-[#5d7186] text-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="m13.087 21.388l.645.382zm.542-.916l-.646-.382zm-3.258 0l-.645.382zm.542.916l.646-.382zm-8.532-5.475l.693-.287zm5.409 3.078l-.013.75zm-2.703-.372l-.287.693zm16.532-2.706l.693.287zm-5.409 3.078l-.012-.75zm2.703-.372l.287.693zm.7-15.882l-.392.64zm1.65 1.65l.64-.391zM4.388 2.738l-.392-.64zm-1.651 1.65l-.64-.391zM9.403 19.21l.377-.649zm4.33 2.56l.541-.916l-1.29-.764l-.543.916zm-4.007-.916l.542.916l1.29-.764l-.541-.916zm2.715.152a.52.52 0 0 1-.882 0l-1.291.764c.773 1.307 2.69 1.307 3.464 0zM10.5 2.75h3v-1.5h-3zm10.75 7.75v1h1.5v-1zm-18.5 1v-1h-1.5v1zm-1.5 0c0 1.155 0 2.058.05 2.787c.05.735.153 1.347.388 1.913l1.386-.574c-.147-.352-.233-.782-.278-1.441c-.046-.666-.046-1.51-.046-2.685zm6.553 6.742c-1.256-.022-1.914-.102-2.43-.316L4.8 19.313c.805.334 1.721.408 2.977.43zM1.688 16.2A5.75 5.75 0 0 0 4.8 19.312l.574-1.386a4.25 4.25 0 0 1-2.3-2.3zm19.562-4.7c0 1.175 0 2.019-.046 2.685c-.045.659-.131 1.089-.277 1.441l1.385.574c.235-.566.338-1.178.389-1.913c.05-.729.049-1.632.049-2.787zm-5.027 8.241c1.256-.021 2.172-.095 2.977-.429l-.574-1.386c-.515.214-1.173.294-2.428.316zm4.704-4.115a4.25 4.25 0 0 1-2.3 2.3l.573 1.386a5.75 5.75 0 0 0 3.112-3.112zM13.5 2.75c1.651 0 2.837 0 3.762.089c.914.087 1.495.253 1.959.537l.783-1.279c-.739-.452-1.577-.654-2.6-.752c-1.012-.096-2.282-.095-3.904-.095zm9.25 7.75c0-1.622 0-2.891-.096-3.904c-.097-1.023-.299-1.862-.751-2.6l-1.28.783c.285.464.451 1.045.538 1.96c.088.924.089 2.11.089 3.761zm-3.53-7.124a4.25 4.25 0 0 1 1.404 1.403l1.279-.783a5.75 5.75 0 0 0-1.899-1.899zM10.5 1.25c-1.622 0-2.891 0-3.904.095c-1.023.098-1.862.3-2.6.752l.783 1.28c.464-.285 1.045-.451 1.96-.538c.924-.088 2.11-.089 3.761-.089zM2.75 10.5c0-1.651 0-2.837.089-3.762c.087-.914.253-1.495.537-1.959l-1.279-.783c-.452.738-.654 1.577-.752 2.6C1.25 7.61 1.25 8.878 1.25 10.5zm1.246-8.403a5.75 5.75 0 0 0-1.899 1.899l1.28.783a4.25 4.25 0 0 1 1.402-1.403zm7.02 17.993c-.202-.343-.38-.646-.554-.884a2.2 2.2 0 0 0-.682-.645l-.754 1.297c.047.028.112.078.224.232c.121.166.258.396.476.764zm-3.24-.349c.44.008.718.014.93.037c.198.022.275.054.32.08l.754-1.297a2.2 2.2 0 0 0-.909-.274c-.298-.033-.657-.038-1.069-.045zm6.498 1.113c.218-.367.355-.598.476-.764c.112-.154.177-.204.224-.232l-.754-1.297c-.29.17-.5.395-.682.645c-.173.238-.352.54-.555.884zm1.924-2.612c-.412.007-.771.012-1.069.045c-.311.035-.616.104-.909.274l.754 1.297c.045-.026.122-.058.32-.08c.212-.023.49-.03.93-.037z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M8 11h.009m3.982 0H12m3.991 0H16"></path></g></svg>
                                        </span>
                                        <span>
                                            Messages
                                        </span>
                                        </Link>
                                        <Link href="#" className="w-full px-6 py-1.5 text-[#5d7186] flex items-center gap-[0.375rem] text-sm
                                        transition-colors hover:bg-[#f8f9fa]
                                        " >
                                        <span className="block text-[#5d7186] text-lg">
                                        <svg width={"1em"} height={"1em"} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>
                                        </span>
                                        <span>
                                            Help
                                        </span>
                                        </Link>
                                        <div className="my-3 h-0 border-t border-solid border-[#eaedf1]"></div>
                                        <Link href="#" className="w-full px-6 py-1.5 text-[#ef5f5f] flex items-center gap-[0.375rem] text-sm
                                        transition-colors hover:bg-[#f8f9fa]
                                        " >
                                        <span className="block text-lg">
                                        <svg width={'1em'} height={'1em'} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 13v-2H7V8l-5 4 5 4v-3h9Z" />
          <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2Z" />
        </svg>
                                        </span>
                                        <span>
                                            Logout
                                        </span>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        <div className="ms-2 w-[213px] hidden sm:block">
                            <div className="w-full relative">
                                <input type="text" placeholder="Search..." className="border-1 border-solid ps-[40px] pe-[15px] bg-[#eae8e8] h-[42px]
                                w-full py-2 text-sm leading-[1.5] text-[#5d7186] rounded-lg outline-0 placeholder:text-[#5d7186]
                                " />
                                <span className="absolute z-10 text-lg ltr:left-[11px] rtl:right-[11px] text-[#8486a7] top-1/2 -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11.5" cy="11.5" r="9.5"></circle><path strokeLinecap="round" d="M18.5 18.5L22 22"></path></g></svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;