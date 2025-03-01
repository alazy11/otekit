"use client";
import { useSearchParams,useRouter } from "next/navigation";


const Sort = ()=> {

    const searchParams = useSearchParams();
    const router = useRouter();
    
    return (
        <div
        className="relative"
        >

            <select name="" id=""
             className="py-[0.348rem] px-2 text-[0.7875rem] outline-0 leading-[1.5] text-[#323a46] bg-transparent 
             select-none border border-solid border-[#eef2f7] rounded-lg transition-colors
             hover:bg-[#eef2f7] cursor-pointer capitalize
             flex items-center gap-2 min-h-[33px]
             "
             value={searchParams.get('order_by') || "Newest"}
             onChange={(e)=>{
                const params = new URLSearchParams(searchParams.toString());
                params.set('order_by',e.currentTarget.value);
                router.push(`?${params}`);
             }}
            >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    )
};

export default Sort;