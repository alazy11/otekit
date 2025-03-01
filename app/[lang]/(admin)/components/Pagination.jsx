"use client"
// import {Pagination} from "@nextui-org/react";
import React, { useCallback, useEffect } from "react";
import { Pagination } from "@nextui-org/pagination";
import { useRouter,useSearchParams } from "next/navigation";
import { useAppSelector } from "@/lib/hooks/StoreHook";

function PaginatedItems({ itemsPerPage,current }) {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = React.useState(parseInt(searchParams.get('page')) || 1);
  const initialPage = parseInt(searchParams.get('page') || 1);

  // const total = parseInt(useAppSelector(state => (state.seoData.total || state.contentData.total || state.mediaData.total)));
  const total = parseInt(useAppSelector(state => (state[current]?.total))|| 0);

  const handleChange = useCallback((value)=>{
    const params = new URLSearchParams(searchParams.toString());
    params.set("page",value)
    router.push(`?${params}`);
  },[currentPage]);


  useEffect(()=>{
    setCurrentPage(parseInt(searchParams.get('page')) || 1)
  },[searchParams])

  if(!total)
    return <p>no page</p>
  else
  return (
    <>
      <div className="w-full flex items-center justify-end">
        <button className="rounded-ss-xl rounded-es-xl py-1.5 px-3 text-sm text-[#424e5a] bg-transparent
          border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]
          "
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            if(currentPage > 1) {
              params.set("page",currentPage - 1);
              router.push(`?${params}`);
            }
          }}
        >
          Previous
        </button>
        <div>
          <Pagination isCompact showControls 
            total={total} 
            initialPage={initialPage}
            page={currentPage}
            onChange={handleChange}
            classNames={{
              base: "",
              prev: "hidden",
              next: "hidden",
              // wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
              item: "py-1.5 px-3 text-sm text-[#424e5a] bg-transparent cursor-pointer border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]",
              cursor: "py-1.5 px-3 text-sm cursor-pointer border border-solid border-[var(--main-color)] transition-colors bg-[var(--main-color)] text-white"
              // "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
            }}

          />
        </div>
        <button className="rounded-se-xl rounded-ee-xl py-1.5 px-3 text-sm text-[#424e5a] bg-transparent
        border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]
        "
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            if(currentPage < total) {
              params.set("page",currentPage + 1)
              router.push(`?${params}`);
            }
          }}

        >
          Next
        </button>
      </div>

    </>
  );
}

export default PaginatedItems;
