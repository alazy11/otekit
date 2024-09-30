
import Image from "next/image";



async function getPhoto() {

    let res = await fetch("https://jsonplaceholder.typicode.com/photos");

    let data = await res.json();

    return data;
}


export default async function Photo() {

    let photos = await getPhoto();

    return (
        <div className="flex gap-2 flex-wrap">
            {
                photos.map((photo, index) => {
                    return (

                        <div key={photo.id} className="w-52 overflow-hidden">
                            <div className="w-full relative h-44">
                                <Image src={photo.url} alt={photo.title} className="w-full h-full" fill />
                            </div>
                            <div>
                                {photo.title}
                            </div>
                        </div>

                    )
                })
            }

        </div>

    )
}
