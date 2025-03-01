
const TableSkeleton = ({ count,colCount }) => {
    let data = Array(count).fill(Array(colCount).fill(" "));

    return (
        <>


            {/* <div className="grid grid-cols-1 gap-3">
                {arr.map((ele, index) => {
                    return (
                        <div
                            role="status"
                            key={index}
                            className="animate-pulse flex items-center gap-2"
                        >
                            <div className="flex items-center justify-center w-[250px] h-[30px] bg-gray-300 rounded"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    );
                })}
            </div> */}


            <table className="align-middle w-full min-w-[800px] border-0 table-fixed ">
                <thead className="bg-[#eef2f780]">
                    <tr className="border-b border-solid border-[#eaedf1]">
                        <th className="w-5 p-[0.85rem] "></th>
                        <th className=" text-start w-[10%] p-[0.85rem] ">
                            <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                        </th>
                        <th className=" text-start p-[0.85rem]  w-[15%]">
                        <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                        </th>
                        <th className=" text-start p-[0.85rem]  w-[25%]">
                        <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                        </th>
                        <th className=" text-start p-[0.85rem]  w-[15%]">
                        <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                        </th>
                        <th className=" text-start p-[0.85rem]  w-[15%]">
                        <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                        </th>
                        <th className=" text-start p-[0.85rem]  w-[15%]">
                        <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                        </th>
                        <th className=" text-start p-[0.85rem]  w-[12%]">
                        <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index} className="border-b border-solid border-[#eaedf1]">
                                    {
                                    item.map((col,ind)=>{
                                    return (
                                        <td key={ind} className="text-start p-[0.85rem]">
                                                                                                            <div
                                role="status"
                                className="animate-pulse flex items-center gap-2 w-full"
                            >
                                <div className="flex items-center justify-center w-full h-[30px] bg-gray-300 rounded"></div>
                            </div>
                                        </td>
                                    )
                                    })
                                    }

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>



        </>

    );
};

export default TableSkeleton;
