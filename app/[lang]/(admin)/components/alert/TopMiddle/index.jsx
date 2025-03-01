"use client";
import ErrorAlert from "./components/ErrorAlert";



const TopMiddle = ()=> {

    return (
        <div className="fixed top-8 left-1/2 w-full max-w-[550px] -translate-x-1/2 z-[90000]">
            <div className="grid gap-3">
                <ErrorAlert />
            </div>
        </div>
    )
}

export default TopMiddle;