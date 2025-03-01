import Link from "next/link";

import Sort from "../components/Sort";
import team from "@/data/team.json";
import TableRow from "./components/TableRow";
import SetTitle from "../components/SetTitle";
// import ShowModel from "./components/ShowModel";
import AddBtn from "./components/AddBtn";
import Filter from "./components/Filter";
import ActiveFilter from "./components/ActiveFilter";
import SearchBox from "./components/SearchBox";
import AddForm from "./components/AddForm";

import PaginatedItems from "../components/Pagination";

const SeoPage = () => {


    return (
        <div className="relative w-full h-fit">
            <SetTitle title={"Content management"} />
            <main>
                <div className="container-main">
                    {/* <div className="grid grid-cols-1 shadow-[var(--bs-box-shadow)] mb-6 text-[#5d7186] overflow-hidden bg-white border border-solid border-[#eaedf1] rounded-xl"> */}
                    <div className="grid grid-cols-1 shadow-[var(--bs-box-shadow)] mb-6 text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-xl">
                        <div className="py-[18px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]">
                            <SearchBox />
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
                                <table className="align-middle w-full min-w-[1000px] border-0 table-fixed ">
                                    <thead className="bg-[#eef2f780]">
                                        <tr className="font-bold text-[#5d7186] border-b border-solid border-[#eaedf1]">
                                            <th className="w-[5%] p-[0.85rem] "></th>
                                            <th className=" text-start w-[15%] p-[0.85rem] capitalize">name</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[15%]">job</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[18%]">email</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[10%]">image</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[14%]">social Media</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[9%]">status</th>
                                            <th className=" text-start p-[0.85rem] capitalize w-[9%]">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            team.map((item, index) => {
                                                return (
                                                    // <TableRow key={index} item={[...Object.values(item)]} status={[6,7]} />
                                                    <TableRow key={index} item={item} status={[6,7]} />
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="border-t border-solid border-[#eaedf1] px-6 py-[18px]">
                                <div className="flex ">
                                <PaginatedItems itemsPerPage={4} />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <AddForm />
            </main>
        </div>
    );
};

export default SeoPage;