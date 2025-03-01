import { Suspense } from "react";
import Sort from "../components/Sort";
import SetTitle from "../components/SetTitle";
// import AddForm from "./components/AddForm";
import AddBtn from "./components/AddBtn";
import Filter from "./components/Filter";
import ActiveFilter from "./components/ActiveFilter";
import PaginatedItems from "../components/Pagination";
import TableSkeleton from "../components/skeleton/TableSkeleton";
import DataTable from "./components/DataTable";
import SearchBar from "../components/SearchBar";
import TopMiddle from "../components/alert/TopMiddle";
import TableContainer from "./components/TableContainer";




const SeoPage = ({params}) => {
    const lang = params.lang;
    return (
        <div className="relative w-full h-fit">
            <Suspense>
                <SetTitle title={"Media Management"} />
            </Suspense>
            <main>
                <div className="container-main">
                    {/* <div className="grid grid-cols-1 shadow-[var(--bs-box-shadow)] mb-6 text-[#5d7186] overflow-hidden bg-white border border-solid border-[#eaedf1] rounded-xl"> */}
                    <div className="grid grid-cols-1 shadow-[var(--bs-box-shadow)] mb-6 text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-xl">
                        <div className="py-[18px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]">
                            <Suspense>
                            <SearchBar />
                            </Suspense>
                            <div className="flex items-center h-full gap-[0.375rem]">
                                <Suspense>
                                <AddBtn />
                                </Suspense>
                                <Sort />
                            </div>
                        </div>

                        <div className="py-3 px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-baseline gap-[0.375rem]">

                            <span className="w-[17px]">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.001 7a1 1 0 0 1 1-1h17.998a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm3.375 5.624a1 1 0 0 1 1-1h11.249a1 1 0 1 1 0 2H6.376a1 1 0 0 1-1-1Zm4.374 4.625a1 1 0 1 0 0 2h4.5a1 1 0 1 0 0-2h-4.5Z"></path></svg>
                            </span>
                            <div className="text-sm hidden sm:block font-semibold text-[#5d7186]">
                                Filter:-
                            </div>
                            <Suspense>
                            <Filter />
                            </Suspense>
                            <ActiveFilter />
                        </div>

                        <div>
                            <div className="w-full overflow-x-auto scroll-table min-h-[380px] ">
                                <Suspense fallback={ <TableSkeleton count={6} colCount={8} />}>
                                    <TableContainer lang={lang} />
                                </Suspense>
                            </div>
                            <div className="border-t border-solid border-[#eaedf1] px-6 py-[18px]">
                                <div className="flex ">
                                    <PaginatedItems current="mediaData" itemsPerPage={4} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <Suspense>
                <AddForm />
                </Suspense> */}
                <Suspense>
                <TopMiddle />
                </Suspense>
            </main>
        </div>
    );
};

export default SeoPage;