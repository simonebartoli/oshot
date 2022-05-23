import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
import Link from "next/link";

const Navbar: NextPage<{heightRef: any}> = ({heightRef}) => {
    const [height, setHeight] = useState(0)
    const [screenWidth, setScreenWidth]: any = useState(null)

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
    const links: (string[] | string)[] = [
        ["/about", "/testimonials"],
        ["/conditions#sexual-dysfunction", "/conditions#incontinence", "/conditions#lichen-sclerosus"],
        "/female-orgasm-system", "/videos", "/faqs", "/press/", "undefined", "/contact"
    ]


    return (
        <nav ref={heightRef} className="sticky z-40 top-0 left-0 flex flex-row justify-between items-center bg-white drop-shadow-xl w-full px-6 xls:py-0 py-6">
            <Link href={"/"}>
                <a className="uppercase">Oshot uk</a>
            </Link>
            {screenWidth !== null &&
                (screenWidth>1152 ?
                    <DesktopNav elements={elements} subElements={subElements} links={links}/>
                    :
                    <MobileNav height={height} elements={elements} subElements={subElements} links={links}/>
                )
            }
        </nav>
    );
};

export default Navbar;