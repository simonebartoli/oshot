import React, {RefObject, useEffect, useRef} from 'react';
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import {NextPage} from "next";

type Props = {
    children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {
    const navHeightRef: RefObject<HTMLInputElement> = useRef(null)
    const footerHeightRef: RefObject<HTMLInputElement> = useRef(null)

    useEffect(() => {
        const total = window.innerHeight
        console.log(document.documentElement.clientHeight)
        setTimeout(() => {
            const toRemove = navHeightRef.current!.clientHeight + footerHeightRef.current!.clientHeight
            document.getElementById("main")!.style.minHeight = `${total - toRemove}px`
            const fullPage = Array.from(document.getElementsByClassName("full-page") as HTMLCollectionOf<HTMLElement>)
            fullPage.forEach(element => {
                element.style.height = `${total - navHeightRef.current!.clientHeight}px`
            })
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