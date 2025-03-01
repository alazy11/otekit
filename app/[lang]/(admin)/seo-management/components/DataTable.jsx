"use client";
import TableRow from "./TableRow";
import endPoints from "@/config/endPoints";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/lib/hooks/StoreHook";
// import useSWR from "swr";
import FetchError from "../../components/error/FetchError";
import NoResult from "../../components/error/NoResult";
import ServerError from "../../components/error/ServerError";
import { setData, setError, setLoading, setFailed, resetStates, setServerError,setTotal } from "@/state-management/slices/data/seoDataSlice";
import TableSkeleton from "../../components/skeleton/TableSkeleton";
import { useSearchParams } from "next/navigation";



const DataTable = ({ lang }) => {
    let language = lang;

    const searchParams = useSearchParams();

    const dispatch = useDispatch();
    const data = useAppSelector(state => state.seoData.data);
    const total = useAppSelector(state => state.seoData.total);
    const error = useAppSelector(state => state.seoData.error);
    const loading = useAppSelector(state => state.seoData.loading);
    const failed = useAppSelector(state => state.seoData.failed);
    const serverError = useAppSelector(state => state.seoData.serverError);
    const refresh = useAppSelector(state => state.seoData.refresh);

    useEffect(() => {
        dispatch(resetStates());
        async function getData() {
            let data,count;
            try {
                const res = await fetch(endPoints.seo.getSeo +"?"+ searchParams.toString(), {
                    // next:{
                    //     tags:['seo'],
                    // },
                    headers: {
                        "cache-control": "no-store",
                        "Content-Type" : "application/json"
                    }
                });
                if (res.status == 204)
                    dispatch(setFailed(true));
                else if(res.status >= 500)
                    dispatch(setServerError(true));
                else {
                    data = await res.json();
                    count = data.data.total;
                    data = data.data.result;
                    dispatch(setData(data));
                    dispatch(setTotal(count));
                }
            } catch (err) {
                console.log(err);
                dispatch(setError(true));
                dispatch(setLoading(false));
            } finally {
                dispatch(setLoading(false));
            }
        }
        getData();
    }, [searchParams,refresh,dispatch]);


    if (loading) return <TableSkeleton count={5} colCount={8} />
    if (error) return <FetchError />
    if (failed) return <NoResult />
    if(serverError) return <ServerError />
    return (
        <table className="align-middle w-full min-w-[1000px] border-0 table-fixed ">
            <thead className="bg-[#eef2f780]">
                <tr className="font-bold text-[rgb(93,113,134)] border-b text-sm border-solid border-[#eaedf1]">
                    {/* <th className="w-5 p-[0.85rem] "></th> */}
                    <th className=" text-start w-[10%] p-[0.85rem] capitalize">Key</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[15%]">Title</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[25%]">Meta</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[15%]">keywords</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[15%]">Page</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[15%]">create date</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[15%]">update date</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[12%]">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => {
                        const nativeItem = item;
                        item = {
                            // id:item.id,
                            seo_key: item.seo_key,
                            title: item.title[lang],
                            description: item.description[lang],
                            keywords: item.keywords[lang],
                            page_name: item.page_name,
                            created_at: new Date(item.created_at).toLocaleDateString(),
                            updated_at: new Date(item.updated_at).toLocaleDateString(),
                        }

                        return (
                            <TableRow key={index} nativeItem={nativeItem} keyword={4} item={[...Object.values(item)]} />
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default DataTable;