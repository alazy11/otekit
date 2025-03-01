import Image from "next/image"
import serverErrorImage from "@/public/error/500-Internal-Server-Error.svg" ;

const ServerError = ({handleTry})=> {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="grid gap-3 justify-items-center content-center">
            <div className="w-[70%] max-w-[500px] h-auto">
                <Image src={serverErrorImage} alt="service not available" className="w-full" />
            </div>
            <div className="px-3">
                <h2 className="text-center leading-[1.5] font-bold mb-2.5">
                    Ooops! The Page You&apos;re  Looking For Was Not Found
                </h2>
                <p className="text-[#5d7186] text-center mb-9 mt-2">
                Sorry, we couldn&apos;t find the page you were looking for. We suggest that you return to main sections
                </p>
            </div>
            <button onClick={handleTry} className="error-back-button">
                Try Again
            </button>
            </div>
        </div>
    )
};

export default ServerError;