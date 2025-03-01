"use client";
import { useState } from "react";
import FormGroup from "../FormGroup";


const YoutubeGroup = ({setPath}) => {

    const [youtubeSrc,setYoutubeSrc] = useState("")
    const editData = useSelector(state => state.seoForm.data);

    return (
        <div className="grid gap-4">
            <FormGroup
                label={"Youtube Url"}
                id={"Youtube"}
                type={"url"}
                value={youtubeSrc}
                handleChange={(e)=>{
                    // "".indexOf
                    // console.log("https://www.youtube.com/"+e.currentTarget.value.substring(e.currentTarget.value.indexOf("?v=")))
                    // console.log(e.currentTarget.value.substring(e.currentTarget.value.indexOf("?v=")+3))
                    // console.log("https://www.youtube.com/embed/"+e.currentTarget.value.substring(e.currentTarget.value.indexOf("?v=")+3))
                    // setYoutubeSrc(e.currentTarget.value)
                    setYoutubeSrc("https://www.youtube.com/embed/"+e.currentTarget.value.substring(e.currentTarget.value.indexOf("?v=")+3))
                    setPath("https://www.youtube.com/embed/"+e.currentTarget.value.substring(e.currentTarget.value.indexOf("?v=")+3));
                }}
                placeholder={"Enter Youtube Url..."}
                required={true}
            />

            <div className="w-full">
                {
                    youtubeSrc.trim() && (
                        <iframe width="100%" height="315" src={youtubeSrc} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    )
                }
            </div>

        </div>
    );

}

export default YoutubeGroup;