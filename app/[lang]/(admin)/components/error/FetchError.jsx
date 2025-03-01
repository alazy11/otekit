import Image from "next/image"
import fetchErrorImage from "@/public/error/503-Error-Service-Unavailable.svg" ;

const FetchError = ()=> {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="grid justify-items-center content-center">
            <div className="w-[70%] max-w-[500px] h-auto">
                <Image src={fetchErrorImage} alt="service not available" className="w-full" />
            </div>
            <div className="px-3 mt-[-33px]">
                <h2 className="text-center leading-[1.5] font-bold mb-2.5">
                    Ooops! The Page You&apos;re  Looking For Was Not Found
                </h2>
                <p className="text-[#5d7186] text-center mb-9 mt-2">
                Sorry, we couldn&apos;t find the page you were looking for. We suggest that you return to main sections
                </p>
            </div>
            </div>
        </div>
    )
};

export default FetchError;