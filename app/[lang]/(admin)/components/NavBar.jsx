"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const NavBar = () => {

    const path = usePathname();
    const lang = useSelector(state => state.lang.lang);
    const dictionary = useSelector(state => state.lang.dictionary);

    return (
        <nav className="w-full h-[82%] overflow-y-auto scroll-nav pb-5">
            <ul className="grid grid-cols-1">
                <li className="w-full">
                    <Link href={'/' + lang + '/dashboard'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                ${path.startsWith('/' + lang + '/dashboard') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                `}  >
                        <span className={`text-[22px] flex items-center justify-center
                    ${path.startsWith('/' + lang + '/dashboard') ? 'text-[var(--main-color)]' : ''}
                    `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 15.4c0-2.074 0-3.111.659-3.756S15.379 11 17.5 11s3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756S19.621 22 17.5 22s-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6z" opacity=".5"></path><path fill="currentColor" d="M2 8.6c0 2.074 0 3.111.659 3.756S4.379 13 6.5 13s3.182 0 3.841-.644C11 11.71 11 10.674 11 8.6V6.4c0-2.074 0-3.111-.659-3.756S8.621 2 6.5 2s-3.182 0-3.841.644C2 3.29 2 4.326 2 6.4zm11-3.1c0-1.087 0-1.63.171-2.06a2.3 2.3 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06s0 1.63-.171 2.06a2.3 2.3 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.3 2.3 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"></path><path fill="currentColor" d="M2 18.5c0 1.087 0 1.63.171 2.06a2.3 2.3 0 0 0 1.218 1.262c.413.178.938.178 1.986.178h2.25c1.048 0 1.573 0 1.986-.178c.551-.236.99-.69 1.218-1.262c.171-.43.171-.973.171-2.06s0-1.63-.171-2.06a2.3 2.3 0 0 0-1.218-1.262C9.198 15 8.673 15 7.625 15h-2.25c-1.048 0-1.573 0-1.986.178c-.551.236-.99.69-1.218 1.262C2 16.87 2 17.413 2 18.5" opacity=".5"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt1}
                        </span>
                    </Link>
                </li>

                <li className="w-full">
                    <Link href={'/' + lang + '/seo-management'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/seo-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <span className={`text-[22px] flex items-center justify-center
                        ${path.startsWith('/' + lang + '/seo-management') ? 'text-[var(--main-color)]' : ''}
                        `}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2c0 .66 0 1.261-.006 1.812l-1.403-1.403a2.25 2.25 0 0 0-3.182 0l-2 2a2.25 2.25 0 0 0 1.341 3.827v1.738C15.964 20 15.056 20 14 20" opacity=".5"></path><path fill="currentColor" fillRule="evenodd" d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z" clipRule="evenodd"></path><path fill="currentColor" d="M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm-6.5 0a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.995 4h4.01c3.781 0 5.672 0 6.846 1.116c.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4"></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M2.028 11.25A10 10 0 0 1 12 2c-.83 0-1.57.364-2.18.921c-.605.554-1.116 1.328-1.53 2.242c-.416.92-.74 1.996-.959 3.163a20 20 0 0 0-.318 2.924zm0 1.5h4.985c.036 1.002.143 1.988.318 2.924c.22 1.167.543 2.243.959 3.163c.414.914.925 1.688 1.53 2.242c.61.557 1.35.921 2.18.921c-5.27 0-9.589-4.077-9.972-9.25" clipRule="evenodd"></path><path fill="currentColor" d="M12 2c.831 0 1.57.364 2.18.921c.605.554 1.117 1.328 1.53 2.242c.417.92.74 1.996.959 3.163c.175.936.282 1.922.318 2.924h4.985A10 10 0 0 0 12 2m4.669 13.674c-.219 1.167-.542 2.243-.959 3.163c-.413.914-.925 1.688-1.53 2.242c-.61.557-1.349.921-2.18.921c5.27 0 9.589-4.077 9.972-9.25h-4.985a20 20 0 0 1-.318 2.924"></path><path fill="currentColor" d="M12 3.396c-.275 0-.63.117-1.043.495c-.416.38-.833.977-1.201 1.79c-.366.808-.663 1.784-.867 2.873c-.16.859-.26 1.768-.296 2.696h6.814a18.5 18.5 0 0 0-.296-2.696c-.204-1.09-.5-2.065-.867-2.872c-.368-.814-.784-1.41-1.2-1.791c-.414-.378-.769-.495-1.044-.495m-3.111 12.05c.204 1.09.501 2.065.867 2.873c.368.813.785 1.41 1.2 1.79c.414.379.77.496 1.044.496c.275 0 .63-.117 1.044-.495c.416-.381.832-.978 1.2-1.791c.366-.808.663-1.783.867-2.873c.161-.858.261-1.768.296-2.696H8.593c.035.928.135 1.838.296 2.696" opacity=".5"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt2}
                        </span>
                    </Link>
                </li>

                <li className="w-full">
                    <Link href={'/' + lang + '/content-management'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/content-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <span className={`text-[22px] flex items-center justify-center
                    ${path.startsWith('/' + lang + '/content-management') ? 'text-[var(--main-color)]' : ''}
                    `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" opacity=".5"></path><path fill="currentColor" d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z"></path><path fill="currentColor" fillRule="evenodd" d="M6.25 10.5A.75.75 0 0 1 7 9.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 14a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75" clipRule="evenodd"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt3}
                        </span>
                    </Link>
                </li>


                <li className="w-full">
                    <Link href={'/' + lang + '/media-management'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                ${path.startsWith('/' + lang + '/media-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                `}  >
                        <span className={`text-[22px] flex items-center justify-center
                    ${path.startsWith('/' + lang + '/media-management') ? 'text-[var(--main-color)]' : ''}
                    `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.29 11.968a1.33 1.33 0 0 1-1.322 1.338a1.33 1.33 0 0 1-1.323-1.338a1.33 1.33 0 0 1 1.323-1.337c.73 0 1.323.599 1.323 1.337"></path><path fill="currentColor" fillRule="evenodd" d="M18.132 7.408c-.849-.12-1.942-.12-3.305-.12H9.173c-1.363 0-2.456 0-3.305.12c-.877.125-1.608.392-2.152 1.02c-.543.628-.71 1.396-.716 2.293c-.006.866.139 1.962.319 3.328l.365 2.772c.141 1.068.255 1.933.432 2.61c.185.704.457 1.288.968 1.74c.51.453 1.12.649 1.834.74c.687.089 1.55.089 2.615.089h4.934c1.065 0 1.928 0 2.615-.088c.715-.092 1.323-.288 1.834-.74c.511-.453.783-1.037.968-1.741c.177-.677.291-1.542.432-2.61l.365-2.772c.18-1.366.325-2.462.319-3.328c-.007-.897-.172-1.665-.716-2.293s-1.275-.895-2.152-1.02M6.052 8.732c-.726.104-1.094.292-1.34.577c-.248.285-.384.679-.39 1.421c-.005.761.126 1.764.315 3.195l.05.379l.371-.272c.96-.703 2.376-.668 3.288.095l3.384 2.833c.32.268.871.318 1.269.084l.235-.139c1.125-.662 2.634-.592 3.672.19l1.832 1.38c.09-.495.171-1.104.273-1.875l.352-2.675c.189-1.43.32-2.434.314-3.195c-.005-.742-.141-1.136-.388-1.42c-.247-.286-.615-.474-1.342-.578c-.745-.106-1.745-.107-3.172-.107h-5.55c-1.427 0-2.427.001-3.172.107" clipRule="evenodd"></path><path fill="currentColor" d="M6.88 4.5c-1.252 0-2.279.84-2.621 1.954l-.02.07c.358-.12.73-.2 1.108-.253c.972-.139 2.201-.139 3.629-.139h6.202c1.428 0 2.657 0 3.63.139c.377.053.75.132 1.108.253l-.02-.07c-.343-1.114-1.37-1.954-2.62-1.954z" opacity=".7"></path><path fill="currentColor" d="M8.859 2h6.282c.209 0 .37 0 .51.015a2.62 2.62 0 0 1 2.159 1.672H6.19a2.62 2.62 0 0 1 2.159-1.672c.14-.015.3-.015.51-.015" opacity=".4"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt4}
                        </span>
                    </Link>
                </li>




                <li className="w-full">
                    <Link href={'/' + lang + '/contact-messages'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/contact-messages') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <span className={`text-[22px] flex items-center justify-center
                    ${path.startsWith('/' + lang + '/contact-messages') ? 'text-[var(--main-color)]' : ''}
                    `}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.456 3.09A10 10 0 0 0 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.764.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.134A9.96 9.96 0 0 0 12 22c4.885 0 8.952-3.503 9.826-8.134A9 9 0 0 1 7.456 3.09"></path><path fill="currentColor" d="M21.826 13.866q.172-.909.174-1.866c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-4.544 1.09a9 9 0 0 0 14.37 10.776" opacity=".5"></path></svg> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" opacity={0.5}></path><path fill="currentColor" d="M7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.975 13.814A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1"></path><path fill="currentColor" fillRule="evenodd" d="m13.087 21.389l.542-.916c.42-.71.63-1.066.968-1.262c.338-.197.763-.204 1.613-.219c1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706c.227-.547.319-1.182.356-2.1A10.95 10.95 0 0 1 17 15.001C10.925 15 6 10.076 6 4q.001-.945.154-1.847c-.715.106-1.277.284-1.766.584a5 5 0 0 0-1.651 1.65C2 5.591 2 7.228 2 10.501v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372c.85.015 1.275.022 1.613.219c.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0" clipRule="evenodd"></path><path fill="currentColor" d="M13.5 2h-3c-1.94 0-3.305 0-4.346.153Q6.001 3.055 6 4c0 6.075 4.925 11 11 11c1.79 0 3.48-.428 4.975-1.187C22 13.192 22 12.441 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2" opacity={0.5}></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt5}
                        </span>
                    </Link>
                </li>



                <li className="w-full">
                    <Link href={'/' + lang + '/teams'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                ${path.startsWith('/' + lang + '/teams') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                `}  >
                        <span className={`text-[22px] flex items-center justify-center
                    ${path.startsWith('/' + lang + '/teams') ? 'text-[var(--main-color)]' : ''}
                    `}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 7.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></path><path fill="currentColor" d="M19.5 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-15 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0" opacity={0.4}></path><path fill="currentColor" d="M18 16.5c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5S8.686 13 12 13s6 1.567 6 3.5"></path><path fill="currentColor" d="M22 16.5c0 1.38-1.79 2.5-4 2.5s-4-1.12-4-2.5s1.79-2.5 4-2.5s4 1.12 4 2.5m-20 0C2 17.88 3.79 19 6 19s4-1.12 4-2.5S8.21 14 6 14s-4 1.12-4 2.5" opacity={0.4}></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx={15} cy={6} r={3} fill="currentColor" opacity={0.4}></circle><ellipse cx={16} cy={17} fill="currentColor" opacity={0.4} rx={5} ry={3}></ellipse><circle cx={9.001} cy={6} r={4} fill="currentColor"></circle><ellipse cx={9.001} cy={17.001} fill="currentColor" rx={7} ry={4}></ellipse></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt6}
                        </span>
                    </Link>
                </li>



                <li className="w-full">
                    <Link href={'/' + lang + '/testimonials'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                ${path.startsWith('/' + lang + '/testimonials') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                `}  >
                        <span className={`text-[22px] flex items-center justify-center
                    ${path.startsWith('/' + lang + '/testimonials') ? 'text-[var(--main-color)]' : ''}
                    `}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity={0.5}></path><path fill="currentColor" fillRule="evenodd" d="M11.718 7.215a.75.75 0 0 0-1.436-.43l-.74 2.465H7a.75.75 0 0 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 1 0 0 1.5h1.892l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465h3.434l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.035a.75.75 0 0 0-1.436-.43l-.74 2.465h-3.434zm2.374 3.535l-.75 2.5H9.908l.75-2.5z" clipRule="evenodd"></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity={0.5}></path><path fill="currentColor" d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.383.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z"></path></svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16.068l-3.771 3.905c-.54.559-.81.839-1.04.935c-.52.22-1.099.032-1.373-.448c-.12-.21-.158-.59-.232-1.35c-.043-.43-.064-.644-.128-.824a1.43 1.43 0 0 0-.835-.864c-.173-.067-.38-.089-.795-.133c-.734-.077-1.101-.116-1.305-.24c-.463-.284-.646-.883-.433-1.422c.094-.237.364-.517.904-1.076L5.456 12l1.238-1.238zl5.306-5.306L18.544 12l2.464 2.55c.54.56.81.84.904 1.076c.213.54.03 1.139-.433 1.423c-.204.124-.57.163-1.305.24c-.414.044-.622.066-.795.133c-.389.149-.69.462-.835.864c-.064.18-.085.394-.128.823c-.075.76-.112 1.14-.232 1.351c-.274.48-.853.669-1.374.448c-.228-.096-.498-.376-1.038-.935z" opacity={0.5}></path><path fill="currentColor" fillRule="evenodd" d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6" clipRule="evenodd"></path></svg> */}
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt7}
                        </span>
                    </Link>
                </li>


                <li className="w-full">
                    <Link href={'/' + lang + '/partners'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/partners') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <span className={`text-[22px] flex items-center justify-center
                        ${path.startsWith('/' + lang + '/partners') ? 'text-[var(--main-color)]' : ''}
                        `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0a7.23 7.23 0 0 1 2.455-5.438m10.583-1.124a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0a8.73 8.73 0 0 0-2.962-6.562m-7.601 13.584a.75.75 0 1 0-.374 1.452a8.8 8.8 0 0 0 4.374 0a.75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25a7.3 7.3 0 0 1-1.813-.228" opacity=".5"></path><path fill="currentColor" d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0M2.5 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m16 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt8}
                        </span>
                    </Link>
                </li>


                <li className="w-full transition-all">
                    <Link href={'/' + lang + '/post-management'} className={`flex items-center justify-between text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/post-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <div className="flex items-center gap-3">
                            <span className={`text-[22px] flex items-center justify-center
                            ${path.startsWith('/' + lang + '/post-management') ? 'text-[var(--main-color)]' : ''}
                            `}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.05 3.05 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0a1.657 1.657 0 0 0-2.25 0a1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27c.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2" opacity=".5"></path><path fill="currentColor" d="M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"></path></svg>
                            </span>
                            <span className="capitalize">
                                {dictionary.dashboardNav.opt9.option}
                            </span>
                        </div>
                        <span>
                            <svg width={'1.2rem'} height={'1.2rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </Link>
                    <div className="hidden">
                        <ul className="grid grid-cols-1 ps-3">
                            <li className="px-[25px] py-[5px]">
                                <Link href={'/' + lang + '/project-management'} className={`flex items-center text-[#9097a7] hover:text-white hover:translate-x-1.5 text-[15px]
                                px-[25px] py-[2.5px] gap-3 whitespace-nowrap transition-all
                                ${path.startsWith('/' + lang + '/project-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                                `}  >
                                    {dictionary.dashboardNav.opt9.category}
                                </Link>
                            </li>
                            <li className="px-[25px] py-[5px]">
                                <Link href={"#"} className={`flex items-center text-[#9097a7] hover:text-white hover:translate-x-1.5 text-[15px]
                                px-[25px] py-[2.5px] gap-3 whitespace-nowrap transition-all
                                ${path.startsWith('/' + lang + '/project-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                                `}  >
                                    {dictionary.dashboardNav.opt9.post}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="w-full transition-all">
                    <Link href={'/' + lang + '/project-management'} className={`flex items-center justify-between text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/project-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <div className="flex items-center gap-3">
                            <span className={`text-[22px] flex items-center justify-center
                            ${path.startsWith('/' + lang + '/project-management') ? 'text-[var(--main-color)]' : ''}
                            `}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" fillRule="evenodd" d="M17.192 6H6.808c-1.688 0-2.531 0-3.175.33A3 3 0 0 0 2.33 7.633C2 8.277 2 9.12 2 10.808c0 .429 0 .643.073.824a1 1 0 0 0 .3.404c.153.122.358.183.77.307L8.5 13.95v1.213c0 .765.46 1.471 1.187 1.767l.56.227a4.65 4.65 0 0 0 3.506 0l.56-.227a1.91 1.91 0 0 0 1.187-1.767V13.95l5.358-1.607c.41-.124.616-.185.768-.307a1 1 0 0 0 .3-.404c.074-.18.074-.395.074-.824c0-1.688 0-2.531-.33-3.175a3 3 0 0 0-1.303-1.303C19.723 6 18.88 6 17.192 6M13.6 13h-3.2c-.22 0-.4.182-.4.406v1.757c0 .166.1.315.251.377l.56.228c.764.31 1.614.31 2.377 0l.56-.228a.41.41 0 0 0 .252-.377v-1.757a.403.403 0 0 0-.4-.406" clipRule="evenodd"></path><path fill="currentColor" d="m20.958 12.313l-.034.01L15.5 13.95v1.213c0 .765-.46 1.471-1.187 1.767l-.56.227a4.65 4.65 0 0 1-3.506 0l-.56-.227A1.91 1.91 0 0 1 8.5 15.163V13.95L3 12.3c0 3.675.035 7.388 1.318 8.528C5.636 22 7.758 22 12 22s6.364 0 7.682-1.172c1.283-1.14 1.317-4.853 1.318-8.528z" opacity=".5"></path><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M9.17 4a3.001 3.001 0 0 1 5.66 0" opacity=".5"></path></g></svg>
                            </span>
                            <span className="capitalize">
                                {dictionary.dashboardNav.opt10.option}
                            </span>
                        </div>
                        <span>
                            <svg width={'1.2rem'} height={'1.2rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </Link>
                    <div className="hidden">
                        <ul className="grid grid-cols-1 ps-3">
                            <li className="px-[25px] py-[5px]">
                                <Link href={'/' + lang + '/newsletter'} className={`flex items-center text-[#9097a7] hover:text-white hover:translate-x-1.5 text-[15px]
                                px-[25px] py-[2.5px] gap-3 whitespace-nowrap transition-all
                                ${path.startsWith('/' + lang + '/newsletter') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                                `}  >
                                    {dictionary.dashboardNav.opt10.category}
                                </Link>
                            </li>
                            <li className="px-[25px] py-[5px]">
                                <Link href={"#"} className={`flex items-center text-[#9097a7] hover:text-white hover:translate-x-1.5 text-[15px]
                                px-[25px] py-[2.5px] gap-3 whitespace-nowrap transition-all
                                ${path.startsWith('/' + lang + '/content') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                                `}  >
                                    {dictionary.dashboardNav.opt10.project}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>


                <li className="w-full transition-all">
                    <Link href={'/' + lang + '/link-management'} className={`flex items-center justify-between text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/link-management') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <div className="flex items-center gap-3">
                            <span className={`text-[22px] flex items-center justify-center
                            ${path.startsWith('/' + lang + '/link-management') ? 'text-[var(--main-color)]' : ''}
                            `}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="0.8em" height="0.8em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.728 3.884c1.434-1.44 3.532-1.47 4.694-.304c1.164 1.168 1.132 3.28-.303 4.72l-2.424 2.433a.75.75 0 0 0 1.063 1.059l2.424-2.433c1.91-1.919 2.15-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.818 7.692c-1.912 1.919-2.152 4.982-.303 6.837a.75.75 0 1 0 1.062-1.058c-1.163-1.168-1.132-3.28.303-4.72z"></path><path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304c-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.837" opacity={0.5}></path></svg>
                            </span>
                            <span className="capitalize">
                                {dictionary.dashboardNav.opt11.option}
                            </span>
                        </div>
                        <span>
                            <svg width={'1.2rem'} height={'1.2rem'} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </Link>
                    <div className="hidden">
                        <ul className="grid grid-cols-1 ps-3">
                            <li className="px-[25px] py-[5px]">
                                <Link href={"#"} className={`flex items-center text-[#9097a7] hover:text-white hover:translate-x-1.5 text-[15px]
                                px-[25px] py-[2.5px] gap-3 whitespace-nowrap transition-all
                                ${path.startsWith('/' + lang + '/content') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                                `}  >
                                    {dictionary.dashboardNav.opt11.category}
                                </Link>
                            </li>
                            <li className="px-[25px] py-[5px]">
                                <Link href={"#"} className={`flex items-center text-[#9097a7] hover:text-white hover:translate-x-1.5 text-[15px]
                                px-[25px] py-[2.5px] gap-3 whitespace-nowrap transition-all
                                ${path.startsWith('/' + lang + '/content') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                                `}  >
                                    {dictionary.dashboardNav.opt11.link}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>


                <li className="w-full">
                    <Link href={'/' + lang + '/newsletter'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/newsletter') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <span className={`text-[22px] flex items-center justify-center
                        ${path.startsWith('/' + lang + '/newsletter') ? 'text-[var(--main-color)]' : ''}
                        `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 11.25C2 8.35 4.015 6 6.5 6S11 8.35 11 11.25V20H4.233C3 20 2 18.834 2 17.395z" opacity=".5"></path><path fill="currentColor" d="M11 11.25V20h8.793C21.012 20 22 18.847 22 17.425V11.25C22 8.35 19.985 6 17.5 6h-11C8.985 6 11 8.35 11 11.25" opacity=".8"></path><path fill="currentColor" d="M9.5 20v2a.75.75 0 0 0 1.5 0v-2zm5.5 0h-1.5v2a.75.75 0 0 0 1.5 0z"></path><path fill="currentColor" fillRule="evenodd" d="M4.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m13.135-9.415l.256-.052a2.2 2.2 0 0 1 1.24.115c.69.277 1.446.328 2.165.148l.061-.015c.524-.131.893-.618.893-1.178v-2.13c0-.738-.664-1.282-1.355-1.109c-.396.1-.812.071-1.193-.081l-.073-.03a3.5 3.5 0 0 0-2-.185l-.449.09c-.54.108-.93.6-.93 1.17v6.953c0 .397.31.719.692.719a.706.706 0 0 0 .693-.72z" clipRule="evenodd"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt12}
                        </span>
                    </Link>
                </li>

                
                <li className="w-full">
                    <Link href={'/' + lang + '/users'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/users') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <span className={`text-[22px] flex items-center justify-center
                        ${path.startsWith('/' + lang + '/users') ? 'text-[var(--main-color)]' : ''}
                        `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><circle cx="10" cy="6.75" r="4" fill="currentColor"></circle><ellipse cx="10" cy="17.75" fill="currentColor" opacity=".5" rx="7" ry="4"></ellipse><path fill="currentColor" fillRule="evenodd" d="M18.357 2.364a.75.75 0 0 1 1.029-.257L19 2.75l.386-.643h.001l.002.002l.004.002l.01.006l.113.076c.07.049.166.12.277.212c.222.185.512.462.802.838c.582.758 1.155 1.914 1.155 3.507s-.573 2.75-1.155 3.507c-.29.376-.58.653-.802.838a4 4 0 0 1-.363.27l-.028.018l-.01.006l-.003.002l-.002.001s-.001.001-.387-.642l.386.643a.75.75 0 0 1-.776-1.283l.005-.004l.041-.027q.06-.042.177-.136c.152-.128.362-.326.573-.6c.417-.542.844-1.386.844-2.593s-.427-2.05-.844-2.593a3.8 3.8 0 0 0-.573-.6a3 3 0 0 0-.218-.163l-.005-.003a.75.75 0 0 1-.253-1.027" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M16.33 4.415a.75.75 0 0 1 1.006-.336L17 4.75l.336-.67h.001l.002.001l.004.002l.008.004l.022.012a2 2 0 0 1 .233.153c.136.102.31.254.48.467c.349.436.664 1.099.664 2.031s-.316 1.595-.664 2.031a2.7 2.7 0 0 1-.654.586l-.06.034l-.02.012l-.01.004l-.003.002l-.002.001l-.33-.657l.329.658a.75.75 0 0 1-.685-1.335l.003-.001l.052-.036c.052-.04.13-.106.209-.205c.15-.189.335-.526.335-1.094s-.184-.905-.335-1.094a1.2 1.2 0 0 0-.261-.24l-.003-.002a.75.75 0 0 1-.322-1" clipRule="evenodd"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt13}
                        </span>
                    </Link>
                </li>


                <li className="w-full">
                    <Link href={'/' + lang + '/settings'} className={`flex items-center text-[#9097a7] hover:text-white text-base
                    px-[25px] py-[10px] border-s-[3px] border-solid gap-3 whitespace-nowrap transition-all
                    ${path.startsWith('/' + lang + '/settings') ? 'border-[var(--main-color)] text-white' : 'border-transparent'}
                    `}  >
                        <span className={`text-[22px] flex items-center justify-center
                        ${path.startsWith('/' + lang + '/settings') ? 'text-[var(--main-color)]' : ''}
                        `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083" clipRule="evenodd" opacity=".5"></path><path fill="currentColor" d="M15.523 12c0 1.657-1.354 3-3.023 3s-3.023-1.343-3.023-3S10.83 9 12.5 9s3.023 1.343 3.023 3"></path></svg>
                        </span>
                        <span className="capitalize">
                            {dictionary.dashboardNav.opt14}
                        </span>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar;