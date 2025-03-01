
import ButtonSkeleton from "../components/skeleton/ButtonSkeleton"
import TableSkeleton from "../components/skeleton/TableSkeleton";
import TitleSkeleton from "../components/skeleton/TitleSkeleton";

const PageSkeleton = ()=> {

    return (
        <div className="relative w-full h-fit">
        <main>
            <div className="container-main">
                <div className="grid grid-cols-1 shadow-[var(--bs-box-shadow)] mb-6 text-[#5d7186] bg-white border border-solid border-[#eaedf1] rounded-xl">
                    <div className="py-[18px] px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center justify-between gap-[0.375rem]">
                        <div className="w-[213px]">
                            <div className="w-full relative">
                                <TitleSkeleton />
                            </div>
                        </div>
                        <div className="flex items-center h-full gap-[0.375rem]">
                        <ButtonSkeleton count={1} />
                        <ButtonSkeleton count={1} />
                        </div>
                    </div>

                    <div className="py-3 px-4 sm:px-6 border-b border-solid border-[#eaedf1] flex items-center gap-[0.375rem]">
                        <ButtonSkeleton count={1} />
                        <ButtonSkeleton count={1} />
                    </div>

                    <div>
                        <div className="w-full overflow-x-auto scroll-table">
                        <TableSkeleton count={8} colCount={8} />
                        </div>
                        <div className="border-t border-solid border-[#eaedf1] px-6 py-[18px]">
                            <div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    </div>
    )

};

export default PageSkeleton;