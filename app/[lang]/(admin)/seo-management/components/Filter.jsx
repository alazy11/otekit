"use client";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";



const Filter = ()=> {

    const router = useRouter();
    const [selectedFilter,setSelectedFilter] = useState('');
    const [openDate,setOpenDate] = useState(false);
    const [openPage,setOpenPage] = useState(false);
    const dropdownRef = useRef();


    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
          ) {
            setOpenDate(false);
            setOpenPage(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);


    return (
        <div
        className="relative"
        ref={dropdownRef}
        >

            <select name="" id=""
             className="py-[0.348rem] px-2 text-[0.7875rem] outline-0 leading-[1.5] text-[#323a46] bg-transparent 
             select-none border border-solid border-[#eef2f7] rounded-lg transition-colors
             hover:bg-[#eef2f7] cursor-pointer
             flex items-center gap-2 min-h-[33px]
             "
            //  value={selectedFilter}
             onChange={(e)=>{
                console.log(e.currentTarget.value)
                if(e.currentTarget.value === "date") {
                    setOpenDate(true);
                } else if(e.currentTarget.value === "page") {
                    setOpenPage(true);
                } else{

                }
                setSelectedFilter(e.currentTarget.value)
             }}
            >
                <option value="">...</option>
                <option value="date">Date</option>
                <option value="page">Page</option>
            </select>


            {
                openDate && (
                    <div className="absolute ltr:left-0 rtl:right-0  sm:ltr:left-full sm:rtl:right-full w-[200px] sm:w-[320px] top-[105%] sm:top-0 down-shadow p-4 text-sm text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-lg"
                    style={{
                        // inset:"0px auto auto 0px"
                    }}
                    >
                        <div className="text-[#5d7186] text-sm">
                            <label htmlFor="date" className="block mb-[0.4rem] font-medium">
                                Select Date
                            </label>
                            <input type="date" id="date"
                            className="block w-full py-2 px-4 font-normal leading-[1.5] border border-solid border-[var(--bs-input-border-color)] rounded-lg transition-colors 
                            focus:border-[var(--bs-input-focus-border-color)] cursor-pointer
                            "
                            onChange={(e)=>{
                                router.push(`?filter_date=${e.currentTarget.value}`);
                                setOpenDate(false);
                            }}
                            />
                        </div>
                    </div>
                )
            }
            
            
            {
                openPage && (
                    <div className="absolute ltr:left-0 rtl:right-0  sm:ltr:left-full sm:rtl:right-full w-[200px] sm:w-[320px] top-[105%] sm:top-0 down-shadow p-4 text-sm text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-lg"
                    style={{
                        // inset:"0px auto auto 0px"
                    }}
                    >
                        <div className="text-[#5d7186] text-sm">
                            <label htmlFor="page" className="block mb-[0.4rem] font-medium">
                                Select Page
                            </label>
<select name="" id="page"
            //  className="py-[0.348rem] px-2 text-[0.7875rem] outline-0 leading-[1.5] text-[#323a46] bg-transparent 
            //  select-none border border-solid border-[#eef2f7] rounded-lg transition-colors
            //  hover:bg-[#eef2f7] cursor-pointer
            //  flex items-center gap-2 min-h-[33px]
            //  "
            className="block w-full py-2 px-4 font-normal leading-[1.5] border border-solid border-[var(--bs-input-border-color)] rounded-lg transition-colors 
            focus:border-[var(--bs-input-focus-border-color)] cursor-pointer
            "
            onChange={(e)=>{
                router.push(`?filter_page=${e.currentTarget.value}`);
                setOpenPage(false)
            }}
            >
                <option value="date">Date</option>
                <option value="page">Page</option>
                <option value="page">Page</option>
                <option value="page">Page</option>
                <option value="page">Page</option>
            </select>

                        </div>
                    </div>
                )
            }

        </div>
    )
};

export default Filter;