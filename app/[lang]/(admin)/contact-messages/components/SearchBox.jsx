"use client";

import { useSearchParams, useRouter } from "next/navigation";


const SearchBox = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    return (
        <div className="w-[213px]">
                                <div className="w-full relative">
                                    <input type="text" placeholder="Search..." className="border-1 border-solid ps-[40px] pe-[15px] bg-[#eae8e8] h-[33px]
                            w-full py-1 text-xs leading-[1.5] text-[#5d7186] rounded-lg outline-0 placeholder:text-[#5d7186]
                            "
                            onChange={(e)=>{
                                let params = new URLSearchParams(searchParams.toString());
                                if(e.currentTarget.value.trim() !== "") {
                                    params.set("search",e.currentTarget.value.trim());
                                    router.push(`?${params}`);
                                } else {
                                    params.delete("search");
                                    router.push(`?${params}`);
                                }
                            }}
                            />
                                    <span className="absolute z-10 text-lg ltr:left-[11px] rtl:right-[11px] text-[#8486a7] top-1/2 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11.5" cy="11.5" r="9.5"></circle><path strokeLinecap="round" d="M18.5 18.5L22 22"></path></g></svg>
                                    </span>
                                </div>
                            </div>
    )

    // const[searc]

}

export default SearchBox;