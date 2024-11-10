"use client";
import { useDispatch } from "react-redux";
import {setTitle} from "@/state-management/slices/dashHeaderSlice";

const SetTitle = ({title})=> {
    const dispatch = useDispatch();

    dispatch(setTitle(title))

    return (
        <>
        </>
    )
}

export default SetTitle;