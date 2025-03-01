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
import { setData, setError, setLoading, setFailed, resetStates, setServerError, setTotal, setRefresh } from "@/state-management/slices/data/teamDataSlice";
import TableSkeleton from "../../components/skeleton/TableSkeleton";
import { useSearchParams } from "next/navigation";





const DataTable = ({ lang }) => {

    const searchParams = useSearchParams();

    const dispatch = useDispatch();
    const data = useAppSelector(state => state.teamData.data);
    const total = useAppSelector(state => state.teamData.total);
    const error = useAppSelector(state => state.teamData.error);
    const loading = useAppSelector(state => state.teamData.loading);
    const failed = useAppSelector(state => state.teamData.failed);
    const serverError = useAppSelector(state => state.teamData.serverError);
    const refresh = useAppSelector(state => state.teamData.refresh);



    useEffect(() => {
        dispatch(resetStates());
        async function getData() {
            let data, count;
            try {
                const res = await fetch(endPoints.team.getTeam + "?" + searchParams.toString(), {
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
        <table className="align-middle w-full min-w-[1100px] border-0 table-fixed ">
            <thead className="bg-[#eef2f780]">
                <tr className="font-bold text-[rgb(93,113,134)] border-b text-sm border-solid border-[#eaedf1]">
                    <th className=" text-start w-[10%] p-[0.85rem] capitalize">name</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">job</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[16%]">email</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">image</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[14%]">social Media</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">status</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">create Date</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">update Date</th>
                    <th className=" text-start p-[0.85rem] capitalize w-[10%]">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => {
                        return (
                            <TableRow lang={lang} key={index} nativeItem={item} />
                        )
                    })
                }

            </tbody>
        </table>
    )
}

export default DataTable;