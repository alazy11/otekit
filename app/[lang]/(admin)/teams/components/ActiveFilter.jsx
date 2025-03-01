"use client";
import { useSearchParams, useRouter } from "next/navigation";



const ActiveFilter = () => {

    const searchParams = useSearchParams();
    const router = useRouter();

    // searchParams.
    const params = [
        searchParams.get('filter_date') ?
            {
                name: 'filter_date',
                displayName: 'date',
                value: searchParams.get('filter_date')
            } : null
        ,
        searchParams.get('filter_page') ?
            {
                name: 'filter_page',
                displayName: 'page',
                value: searchParams.get('filter_page')
            } : null
        ,
        searchParams.get('search') ?
            {
                name: 'search',
                displayName: 'search',
                value: searchParams.get('search')
            } : null
        ,
        searchParams.get('order_by') ?
            {
                name: 'order_by',
                displayName: 'order_by',
                value: searchParams.get('order_by')
            } : null
        ,
        searchParams.get('status') ?
            {
                name: 'status',
                displayName: 'status',
                value: searchParams.get('status')
            } : null
    ]

    return (
        <div className="flex items-center gap-3 flex-wrap ">
            {
                params.map((item, index) => {
                    if (item)
                        return (
                            <div key={index} className="py-[0.348rem] px-2 text-[0.7875rem] outline-0 leading-[1.5] text-[#323a46] bg-transparent 
                        select-none border border-solid border-[#eef2f7] rounded-lg 
                        flex items-center gap-2 min-h-[33px]
                        ">
                                <div>
                                    <span className="font-semibold hidden sm:inline-block">
                                        {item.displayName + `: `}
                                    </span>
                                    <span>
                                        {item.value}
                                    </span>
                                </div>
                                <button className="transition-colors hover:text-[var(--main-color)]" onClick={() => {
                                    let params = new URLSearchParams(searchParams.toString());
                                    params.delete(`${item.name}`);
                                    router.push(`?${params}`);
                                }}>
                                    <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                </button>
                            </div>
                        )
                    return null
                }).filter(item => item !== null)
            }
        </div>
    )
}

export default ActiveFilter;