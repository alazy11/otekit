"use client";
import { useEffect } from "react";

const DropMenu = ({children,isOpen,setIsOpen,dropdownRef,
    cssStyle ="top-full ltr:right-0 rtl:left-0"
})=> {

    // const [isOpen,setIsOpen] = useState(false);
    // const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);

    return (
                <div className={`absolute  mt-0.5  text-[0.875rem] drop-shadow
                bg-white py-1 min-w-40 text-[#5d7186] border border-solid border-[#eaedf1] rounded-lg
                z-[1000] ${cssStyle}
                `}>
                    {children}
                </div>

    )
};

export default DropMenu;