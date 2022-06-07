import React, {useEffect, useRef} from 'react';
import {IoHammerSharp} from "react-icons/io5";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {useResizer} from "../contexts/resizer-context";

const WorkInProgress = () => {
    const {heightPage} = useResizer()
    const mainRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if(mainRef.current !== null){
            mainRef.current.style.minHeight = `${heightPage}px`
        }
    }, [heightPage])

    return (
        <main id={"main"} ref={mainRef}  className="p-8 w-full h-full flex flex-col justify-center items-center gap-16">
            <div className="w-full flex flex-row items-center gap-8 justify-center sm:text-6xl smxl:text-5xl text-4xl text-gold">
                <IoHammerSharp className="smx:inline-block hidden"/>
                <h1 className="font-homeTitle text-center">Work In Progress</h1>
            </div>
            <p className="sm:text-2xl smx:text-xl text-lg text-center leading-10 font-homeTitle">
                This site is under construction and it will be available soon.<br/>
                In the meanwhile you can follow us on our social
            </p>
            <div className="flex flex-row justify-center items-center smx:gap-20 gap-12 text-5xl text-gold">
                <a href="https://www.instagram.com/regenerativeaestheticcentre/">
                    <BsInstagram/>
                </a>
                <a href="https://www.facebook.com/RegenerativeAestheticCentre">
                    <BsFacebook/>
                </a>
                <a href="https://twitter.com/DrSWclinics">
                    <BsTwitter/>
                </a>
            </div>
        </main>
    );
};

export default WorkInProgress;