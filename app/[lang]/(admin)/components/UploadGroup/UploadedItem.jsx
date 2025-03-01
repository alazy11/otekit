"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import profile from "@/public/images/profile.jpeg";
import convertBase64 from "@/util/convertToBase64";
import endPoints from "@/config/endPoints";
import appConfig from "@/config/app.config";
import { useSelector } from "react-redux";


const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function niceBytes(x) {

    let l = 0, n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
        n = n / 1024;
    }

    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}


const HandleUploadFile = (uploadUrl, selectedFile, setLoader, setIsComplete, setPercent, setAttachment, timeout, signalAbort, setError, setVideoSrc) => {

    const formData = new FormData();

    formData.append('file', selectedFile)

    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    signalAbort(xhr)

    xhr.ontimeout = () => {
        console.error(`The request for ${url} timed out.`);
    };
    xhr.upload.addEventListener("progress", (e) => { ProgressHandler(e, setLoader, setPercent) }, false);
    xhr.addEventListener("load", (e) => { SuccessHandler(e, setLoader, setIsComplete, setAttachment, setError, setVideoSrc) }, false);
    xhr.addEventListener("error", (e) => { ErrorHandler(e, setLoader, setError) }, false);
    xhr.addEventListener("abort", (e) => { AbortHandler(e, setLoader) }, false);
    xhr.open("POST", `${uploadUrl}`, true);
    xhr.timeout = timeout;
    xhr.withCredentials = true;
    xhr.send(formData);
};

const ProgressHandler = (e, setLoader, setPercent) => {
    setLoader(true)
    var percent = (e.loaded / e.total) * 100;
    setPercent(Math.round(percent))
};

const SuccessHandler = (e, setLoader, setIsComplete, setAttachment, setError, setVideoSrc) => {

    if (e.target.status === 200) {
        setLoader(false);
        setIsComplete(true);
        setAttachment(e.target.response?.data);
        setVideoSrc(e.target.response?.data);
    } else {
        setError(true);
    }
    console.log('ressssss', e.target);

};
const ErrorHandler = (e, setLoader, setError, response) => {
    setLoader(false);
    setError(true)
    console.log('res error', e.target?.response)
};
const AbortHandler = (e, setLoader, response) => {
    setLoader(false)
};




const UploadedItem = ({ file, setFiles, setPath }) => {

    const editData = useSelector(state => state.seoForm.data);
    const process = useSelector(state => state.seoForm.process);
    const uploadUrl = useSelector(state => state.uploadData.uploadUrl);
    const [loader, setLoader] = useState(false);
    const [percent, setPercent] = useState(0);
    const [error, setError] = useState(false);
    const [isComplete, setIsComplete] = useState(process === "edit" ? true : false);
    const [count, setCount] = useState(0);
    const [isFirst, setIsFirst] = useState(process === "edit" ? false : true);
    const [tryAgain, setTryAgain] = useState(false);
    const [fileSrc, setFileSrc] = useState(editData.path || '');
    const [signalAbort, setSignalAbort] = useState();

    // console.log("UploadedItem")

    useEffect(()=> {
        console.log("isComplete",isComplete);
    },[isComplete])

    useEffect(() => {
        if(process !== "edit") {
            setIsFirst(true);
            setTryAgain(!tryAgain);
            setFileSrc("");
        }
    }, [file]);

    useEffect(() => {

        if (isFirst) {
            setPercent(0);
            setIsComplete(false);
            setError(false);
            HandleUploadFile(uploadUrl, file, setLoader, setIsComplete, setPercent, setPath, 20000, setSignalAbort, setError, setFileSrc)
        }

        setIsFirst(false);

        return () => {
            setIsFirst(false);
        }

    }, [tryAgain]);
    // }, [file]);


    return (
        <div className="w-full flex items-center gap-3">
            <div
            className={`w-full flex gap-3
            ${file.type.startsWith("video") ? "flex-col items-start":"items-end"}
            `}>
                <div className="">
                    <div className={`relative border border-solid  flex items-center justify-center
                    ${error ? "border-red-600" : 'border-[var(--bs-input-border-color)]'}
                    ${file.type.startsWith("video") ? "w-[18rem] h-[9rem]":"w-28 h-32"}
                    `}>
                        {
                            file.type.startsWith("image") ?
                                <Image src={appConfig.backEndUri + "/" + fileSrc.replaceAll("\\", '/')} alt="downloaded photo" fill className="object-contain" />
                                :
                                <video controls className="h-full">
                                    <source src={appConfig.backEndUri + "/" + fileSrc.replaceAll("\\", '/')} type={file.type} />
                                </video>
                        }
                    </div>
                </div>
                {
                    !error ? (
                        !isComplete ? (
                            <div className="grid gap-2 flex-1">
                                <div className="flex items-center gap-3 justify-between w-full text-base">
                                    <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                        <span className="text-black">{file?.name}</span>
                                    </div>
                                    <button type="button" className="hover:text-[var(--main-color)] transition-colors"
                                        onClick={() => {
                                            signalAbort?.abort();
                                            setFiles(prev => {
                                                const newFiles = prev.filter(item => {
                                                    return item.name !== file.name;
                                                });
                                                return newFiles;
                                            })
                                        }}
                                    >
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div>
                                    <div role="progress" className="bg-slate-200 h-1 rounded-2xl overflow-hidden">
                                        <span className="block h-full rounded-2xl max-w-full bg-[var(--main-color)]"
                                            style={{
                                                width: percent + "%"
                                            }}
                                        ></span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full text-sm">
                                    <span>
                                        {percent + "%"}
                                    </span>
                                    <span>
                                        76KB/{niceBytes(file?.size)}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="grid gap-2 flex-1">
                                <div className="flex items-center gap-3 justify-between w-full text-base">
                                    <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
                                        <span className="text-black">{file?.name}</span>
                                    </div>
                                    <span>
                                        {niceBytes(file?.size)}
                                    </span>
                                </div>
                            </div>

                        )

                    ) : (
                        <div className="grid gap-2 flex-1">
                            <div className="flex items-center justify-between w-full text-base">
                                <span className="text-red-600">photo.png</span>
                                <button type="button" className="hover:text-[var(--main-color)] transition-colors"
                                    onClick={() => {
                                        setTryAgain(!tryAgain);
                                        setIsFirst(true);
                                    }}
                                >
                                    <svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4v6h6" />
                                        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <div className="text-sm text-red-600">
                                    Something went wrong...!
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )

};


export default UploadedItem;