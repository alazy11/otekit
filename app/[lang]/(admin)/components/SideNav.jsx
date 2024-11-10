"use client";
import Image from "next/image";
// import logo from "@/public/otek.png";
import logo from "@/public/otek.png";
import NavBar from "./NavBar";
import { useSelector,useDispatch } from "react-redux";
import {show} from "@/state-management/slices/open-slices/sideNavSlice";


const SideNav = () => {

    const sideNavOpen = useSelector(state=>state.sideNavOpen.open);
    const dispatch = useDispatch();

    return (
        <>

        {
            sideNavOpen && 
            <div className="fixed top-0 left-0 w-dvw h-dvh z-[1150] bg-[#5d7186bf] opacity-50 "
            onClick={()=>{
                dispatch(show(!sideNavOpen));
            }}
            ></div>
        }

        <div className={`w-[280px] min-h-[100vh] fixed lsm:static z-[2000] duration-[400] transition-all
        ${sideNavOpen ? 'ltr:left-0 rtl:right-0 ':'ltr:-left-full rtl:-right-full'}
        h-full bg-[#262d34]`}>
            <div className="h-full w-full">

                <div className="w-full flex items-center justify-center py-7 h-[18%]">
                    <div className="w-[60px] ">
                        <Image src={logo} alt="otek logo" className="w-full" />
                    </div>
                </div>

                <NavBar />

            </div>
        </div>
        </>
    )
};

export default SideNav;