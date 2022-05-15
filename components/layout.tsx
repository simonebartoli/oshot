import React, {useEffect, useRef} from 'react';
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import {NextPage} from "next";

type Props = {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
    const navHeightRef: any = useRef(null)
    const footerHeightRef: any = useRef(null)

    useEffect(() => {
        const total = window.innerHeight
        console.log(document.documentElement.clientHeight)
        setTimeout(() => {
            const toRemove = navHeightRef.current!.clientHeight + footerHeightRef.current!.clientHeight
            console.log(toRemove)
            document.getElementById("main")!.style.minHeight = `${total - toRemove}px`
        }, 10)
    })

    return (
        <>
            <Navbar heightRef={navHeightRef}/>
                {children}
            <Footer heightRef={footerHeightRef}/>
        </>
    );
};

export default Layout;