import Link from "next/link";

import Sort from "../components/Sort";
import seo from "@/data/seo.json";
import TableRow from "../components/TableRow";
import SetTitle from "./components/SetTitle";
import AddForm from "./components/AddForm";
import AddBtn from "./components/AddBtn";
import Filter from "./components/Filter";
import ActiveFilter from "./components/ActiveFilter";


import PaginatedItems from "../components/Pagination";

const SeoPage = () => {
    return (
        <div className="relative w-full h-fit">
            <SetTitle />
            <main>
                <div className="container-main">
                    {/* <div className="grid grid-cols-1 shadow-[var(--bs-box-shadow)] mb-6 text-[#5d7186] overflow-hidden bg-white border border-solid border-[#eaedf1] rounded-xl"> */}
                    <div className="grid grid-cols-1 shadow-[var(--bs-box-shadow)] mb-6 text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-xl">
                        <div className="py-[18px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]">
                            <div className="w-[213px]">
                                <div className="w-full relative">
                                    <input type="text" placeholder="Search..." className="border-1 border-solid ps-[40px] pe-[15px] bg-[#eae8e8] h-[33px]
                            w-full py-1 text-xs leading-[1.5] text-[#5d7186] rounded-lg outline-0 placeholder:text-[#5d7186]
                            " />
                                    <span className="absolute z-10 text-lg ltr:left-[11px] rtl:right-[11px] text-[#8486a7] top-1/2 -translate-y-1/2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11.5" cy="11.5" r="9.5"></circle><path strokeLinecap="round" d="M18.5 18.5L22 22"></path></g></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center h-full gap-[0.375rem]">
                                <AddBtn />
                                <Sort />
                            </div>
                        </div>

                        <div className="py-3 px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center gap-[0.375rem]">
                           
                           <span className="w-[17px]">
                           <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.001 7a1 1 0 0 1 1-1h17.998a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm3.375 5.624a1 1 0 0 1 1-1h11.249a1 1 0 1 1 0 2H6.376a1 1 0 0 1-1-1Zm4.374 4.625a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2h-4.5Z"></path></svg>
                           </span>
                           <div className="text-sm hidden sm:block font-semibold text-[#5d7186]">
                                Filter:-
                            </div>
                        <Filter />
                        <ActiveFilter />
                        </div>

                        <div>
                            <div className="w-full overflow-x-auto scroll-table">
                                {/* <table className="align-middle w-full min-w-[500px] border border-solid border-[#eaedf1]"> */}
                                <table className="align-middle w-full min-w-[800px] border-0 table-fixed ">
                                    <thead className="bg-[#eef2f780]">
                                        <tr className="font-bold text-[#5d7186] border-b border-solid border-[#eaedf1]">
                                            <th className="w-5 p-[0.85rem] "></th>
                                            <th className=" text-start w-[15%] p-[0.85rem] capitalize">Key</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[25%]">Title</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[40%]">Meta</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[15%]">Page</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[12%]">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            seo.map((item, index) => {
                                                return (
                                                    <TableRow key={index} item={[...Object.values(item)]} />
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="border-t border-solid border-[#eaedf1] px-6 py-[18px]">
                                <div>
                                    {/* 
                                    <div className="w-full flex items-center justify-end">
                                        <button className="rounded-ss-xl rounded-es-xl py-1.5 px-3 text-sm text-[#424e5a] bg-transparent
                                        border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]
                                        ">
                                            Previous
                                        </button>
                                        <div>
                                            <ul className="flex items-center">
                                                <li className="py-1.5 px-3 text-sm cursor-pointer
                                                border border-solid border-[var(--main-color)] transition-colors bg-[var(--main-color)] text-white
                                                ">
                                                    <span>
                                                        1
                                                    </span>
                                                </li>
                                                <li className="py-1.5 px-3 text-sm text-[#424e5a] bg-transparent cursor-pointer
                                                border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]
                                                ">
                                                    <span>
                                                        2
                                                    </span>
                                                </li>
                                                <li className="py-1.5 px-3 text-sm text-[#424e5a] bg-transparent cursor-pointer
                                                border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]
                                                ">
                                                    <span>
                                                        3
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <button className="rounded-se-xl rounded-ee-xl py-1.5 px-3 text-sm text-[#424e5a] bg-transparent
                                        border border-solid border-[#eaedf1] transition-colors hover:text-[#a2132b] hover:bg-[#f8f9fa]
                                        ">
                                            Next
                                        </button>
                                    </div> */}
                                </div>
                                <div className="flex ">
                                <PaginatedItems itemsPerPage={4} />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <AddForm  />
            </main>
        </div>
    );
};

export default SeoPage;