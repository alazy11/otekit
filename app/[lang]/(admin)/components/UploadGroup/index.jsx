"use client";
import { useEffect, useRef, useState } from "react";
import UploadedItem from "./UploadedItem";
import { useSelector } from "react-redux";
import endPoints from "@/config/endPoints";


const UploadGroup = ({accept="image",setPath,mediaPath,setMediaInfo}) => {

    const editData = useSelector(state => state.seoForm.data);
    const process = useSelector(state => state.seoForm.process);
    const fileRef = useRef();
    const [files, setFiles] = useState([]);

    useEffect(()=> {

        async function getData() {
            const res = await fetch(endPoints.media.getMediaInfo(editData.id),{
                headers: {
                    "cache-control":'no-store'
                }
            });
            const result = await res.json();
            // console.log(result.data[0]);
            setMediaInfo(result.data[0])
            setFiles([
                {
                    name:result.data[0].name,
                    type:result.data[0].type,
                    size:result.data[0].size
                }
            ]);
        }

        if(process === "edit") {
            getData();
        }

    },[])


    return (
        <div className="w-full grid grid-cols-1 gap-3 content-start">
            <div className="flex items-center justify-between gap-3">
                <label
                    htmlFor={"file"}
                    className="font-medium text-base text-[#5d7186] capitalize"
                >
                    Upload File
                </label>
            </div>
            <div className="w-full cursor-pointer border-2 border-dashed border-[var(--bs-input-border-color)] rounded-md min-h-[150px] p-5"
                onClick={() => {
                    // if (count <= 0)
                        fileRef.current.click();
                }}
            >
                <div className="text-center">
                    <span className="text-[var(--main-color)] flex justify-center">
                        <svg width={50} height={50} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 19v-4h3l-4-5-4 5h3v4h2Z" />
                            <path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5Z" />
                        </svg>
                    </span>
                    <h3 className="mt-4 mb-[10px] text-[23px] font-semibold text-[#313b5e]" style={{
                        fontFamily: '"Hanken Grotesk", sans-serif',
                        fontSize: "calc(1.2rem + 0.3vw)"
                    }}>
                        Drop your Files here, or {" "}
                        <span className="text-[var(--main-color)]">click to browse</span>
                    </h3>
                    {/* <span className="text-[13px] text-[#5d7186]">
                1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
            </span> */}
                </div>
                <input type="file" name="file" id="file"
                    ref={fileRef}
                    accept={`${accept}/*`}
                    className="hidden"
                    onChange={(e) => {
                        // setFiles(prev => [...prev, ...e.target.files]);
                        // setFiles(prev => []);
                        if(e.target.files.length > 0) {
                            setFiles(prev => [...e.target.files]);
                            setMediaInfo({
                                name:e.target.files[0].name,
                                type:e.target.files[0].type,
                                size:e.target.files[0].size
                            })
                        }
                        // console.log(e.target.files[0]);
                    }}
                />
            </div>

            {
                files.length > 0 && (
                    files?.map((item, index) => {
                        return (
                            <UploadedItem key={index} setFiles={setFiles} setPath={setPath} mediaPath={mediaPath} file={item} />
                        );
                    })
                )
            }
        </div>
    )
}

export default UploadGroup;