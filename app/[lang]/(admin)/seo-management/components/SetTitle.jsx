"use client";
import { useDispatch } from "react-redux";
import {setTitle} from "@/state-management/slices/dashHeaderSlice";

const SetTitle = ()=> {
    const dispatch = useDispatch();

    dispatch(setTitle('SEO Management'))

    return (
        <>
        </>
    )
}

export default SetTitle;