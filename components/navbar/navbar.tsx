import React, {Ref, useEffect, useRef, useState} from 'react';
import {NextComponentType} from "next";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Navbar: NextComponentType = () => {
    const [height, setHeight] = useState(0)
    const navHeight: Ref<any> = useRef(null)
    useEffect(() => setHeight(navHeight.current?.clientHeight), [])

    return (
        <nav ref={navHeight} className="flex flex-row justify-between items-center bg-white drop-shadow-xl w-full px-6 xls:py-0 py-6 relative">
            <h1 className="uppercase">This is the logo</h1>
            <DesktopNav/>
            <MobileNav height={height}/>
        </nav>
    );
};

export default Navbar;