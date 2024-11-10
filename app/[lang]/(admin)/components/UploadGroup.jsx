"use client";
import { useRef } from "react";



const UploadGroup = ({

}) => {

    const fileRef = useRef();

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
        onClick={()=>{
            fileRef.current.click();
        }}
        >
            <div className="text-center my-8">
                <span className="text-[var(--main-color)] flex justify-center">
                    <svg width={50} height={50} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 19v-4h3l-4-5-4 5h3v4h2Z" />
                        <path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5Z" />
                    </svg>
                </span>
                <h3 className="mt-9 mb-[10px] text-[23px] font-semibold text-[#313b5e]" style={{
                    fontFamily: '"Hanken Grotesk", sans-serif',
                    fontSize: "calc(1.275rem + 0.3vw)"
                }}>
                    Drop your Files here, or {" "}
                    <span className="text-[var(--main-color)]">click to browse</span>
                </h3>
                <span className="text-[13px] text-[#5d7186]">
                    1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
                </span>
            </div>
            <input type="file" name="file" id="file"
            ref={fileRef}
            className="hidden"
            />
        </div>
        </div>
    )

}

export default UploadGroup;