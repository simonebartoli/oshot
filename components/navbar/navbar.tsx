import React, {Ref, useEffect, useRef, useState} from 'react';
import {NextComponentType} from "next";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";

const Navbar: NextComponentType = () => {
    const [height, setHeight] = useState(0)
    const [screenWidth, setScreenWidth]: any = useState(null)

    const heightRef: Ref<any> = useRef(null)
    useEffect(() => {
        setHeight(heightRef.current?.clientHeight)
        setScreenWidth(screen.width)
    }, [])

    const elements = ["about", "conditions", "female orgasm system", "videos", "faqs", "press", "training", "contact us"]
    const subElements = [
        ["about me", "testimonials"],
        ["sexual dysfunction", "incontinence", "lichen-sclerosus"],
        undefined, undefined, undefined, undefined, undefined, undefined
    ]

    return (
        <nav ref={heightRef} className="fixed top-0 left-0 flex flex-row justify-between items-center bg-white drop-shadow-xl w-full px-6 xls:py-0 py-6 relative">
            <h1 className="uppercase">This is the logo</h1>
            {screenWidth !== null &&
                (screenWidth>1152 ?
                    <DesktopNav elements={elements} subElements={subElements}/>
                    :
                    <MobileNav height={height} elements={elements} subElements={subElements}/>
                )
            }
        </nav>
    );
};

export default Navbar;