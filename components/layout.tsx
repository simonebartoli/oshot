import React, {useEffect, useRef} from 'react';
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import {NextPage} from "next";
import {useLayoutContext} from "../contexts/layout-context";
import {useResizer} from "../contexts/resizer-context";

type Props = {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
    const {navHeight, footerHeight} = useLayoutContext()
    const {widthPage, heightPage} = useResizer()
    const mainRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(navHeight !== undefined && footerHeight !== undefined && mainRef.current !== null){
            const toRemove = navHeight + footerHeight
            mainRef.current.style.minHeight = `${heightPage - toRemove}px`
        }
    }, [widthPage, heightPage, navHeight, footerHeight])

    return (
        <>
            <Navbar/>
                <div ref={mainRef}>
                    {children}
                </div>
            <Footer/>
        </>
    );
};

export default Layout;