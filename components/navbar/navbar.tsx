import React, {useEffect, useState} from 'react';
import DesktopNav from "./desktopNav";
import MobileNav from "./mobileNav";
import Link from "next/link";
import {useResizer} from "../../contexts/resizer-context";
import {useLayoutContext} from "../../contexts/layout-context";

const Navbar = () => {
    const {widthPage, heightPage} = useResizer()
    const {navbarRef, setNavHeight} = useLayoutContext()
    const [showDesktop, setShowDesktop] = useState(false)

    useEffect(() => {
        if(widthPage > 1152) setShowDesktop(true)
        else setShowDesktop(false)

        if(navbarRef.current !== null){
            setNavHeight(navbarRef.current.clientHeight)
        }
    }, [widthPage, heightPage])

    const [elements] = useState(
        ["about", "conditions", "female orgasm system", "videos", "faqs", "press", "training", "contact us"]
    )
    const [subElements] = useState(
        [
            ["about me", "testimonials"],
            ["sexual dysfunction", "incontinence", "lichen-sclerosus"],
            undefined, undefined, undefined, undefined, undefined, undefined
        ]
    )
    const [links] = useState<(string[] | string)[]>(
        [
            ["/about", "/testimonials"],
            ["/conditions#sexual-dysfunction", "/conditions#incontinence", "/conditions#lichen-sclerosus"],
            "/female-orgasm-system", "/videos", "/faqs", "/press/", "/undefined", "/contact"
        ]
    )

    return (
        <nav ref={navbarRef} className="sticky z-40 top-0 left-0 flex flex-row justify-between items-center bg-white drop-shadow-xl w-full px-6 xls:py-0 py-6">
            <Link href={"/"}>
                <a className="uppercase">Oshot uk</a>
            </Link>
            {showDesktop ?
                <DesktopNav elements={elements} subElements={subElements} links={links}/>
                :
                <MobileNav elements={elements} subElements={subElements} links={links}/>
            }
        </nav>
    );
};

export default Navbar;