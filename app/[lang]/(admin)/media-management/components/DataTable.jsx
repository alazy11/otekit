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
import { setData, setError, setLoading, setFailed, resetStates, setServerError, setTotal, setRefresh } from "@/state-management/slices/data/mediaDataSlice";
import TableSkeleton from "../../components/skeleton/TableSkeleton";
import { useSearchParams } from "next/navigation";




const DataTable = ({ lang }) => {
    const searchParams = useSearchParams();

    const dispatch = useDispatch();
    const data = useAppSelector(state => state.mediaData.data);
    const total = useAppSelector(state => state.mediaData.total);
    const error = useAppSelector(state => state.mediaData.error);
    const loading = useAppSelector(state => state.mediaData.loading);
    const failed = useAppSelector(state => state.mediaData.failed);
    const serverError = useAppSelector(state => state.mediaData.serverError);
    const refresh = useAppSelector(state => state.mediaData.refresh);

    useEffect(() => {
        dispatch(resetStates());
        async function getData() {
            let data, count;
            try {
                const res = await fetch(endPoints.media.getMedia + "?" + searchParams.toString(), {
                    // next:{
                    //     tags:['seo'],
                    // },
                    headers: {
                        "cache-control": "no-store",
                        "Content-Type": "application/json"
                    }
                });

                if (res.status == 204) {
                    console.log("res.status ", res.status)
                    dispatch(setFailed(true));
                }
                else if (res.status >= 500)
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
    }, [searchParams, refresh, dispatch]);


    if (loading) return <TableSkeleton count={5} colCount={8} />
    if (error) return <FetchError />
    if (failed) return <NoResult />
    if (serverError) return <ServerError handleTry={(e) => {
        dispatch(setRefresh(!refresh))
    }} />
    return (
        <>
         <table className="align-middle w-full min-w-[1000px] border-0 table-fixed ">
            <thead className="bg-[#eef2f780]">
                <tr className="font-bold text-[rgb(93,113,134)] border-b text-sm border-solid border-[#eaedf1]">
                    <th className=" text-start w-[11%] p-[0.85rem] capitalize">Key</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">Type</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[20%]">Path</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[15%]">Alt</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">Status</th>
                    {/* <th className=" text-start p-[0.85rem] capitalize w-[10%]">Page</th> */}
                    <th className=" text-start p-[0.85rem] capitalize w-[13%]">Create Date</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[13%]">updated Date</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[11%]">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => {
                        const nativeItem = item;
                        item = {
                            media_key: item.media_key,
                            type: item.type,
                            path: item.path,
                            alt: item.alt[lang],
                            status: item.is_active,
                            // page_name: item.page_name,
                            created_at: new Date(item.created_at).toLocaleDateString(),
                            updated_at: new Date(item.updated_at).toLocaleDateString(),
                        }

                        return (
                            <TableRow lang={lang} key={index} nativeItem={nativeItem} />
                        )
                    })
                }

            </tbody>
        </table>

        </>
    )
}

export default DataTable;