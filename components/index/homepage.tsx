import React, {useEffect, useRef} from 'react';
import Image from "next/image";
import HomePageImage from "../../public/media/photos/home.jpg"
import {useResizer} from "../../contexts/resizer-context";
import {useLayoutContext} from "../../contexts/layout-context";

const Homepage = () => {
    const fullPageRef = useRef<HTMLDivElement>(null)
    const {heightPage} = useResizer()
    const {navHeight} = useLayoutContext()

    useEffect(() => {
        if(fullPageRef.current !== null && navHeight !== undefined){
            fullPageRef.current.style.minHeight = `${heightPage - navHeight}px`
        }
    }, [heightPage, navHeight])

    return (
        <section ref={fullPageRef} className="relative w-full home-container flex flex-col items-center justify-evenly">
            {/*<div className="absolute  top-0 left-0 bg-cover bg-center bg-no-repeat bg-fixed w-full h-full flex blur-[1px]" style={{backgroundImage: "url('/media/photos/home.jpg')"}}/>*/}
            <div className="w-full h-full absolute homepage-image">
                <Image alt="Female Rose" placeholder="blur" priority={true} src={HomePageImage} layout="fill" objectFit="cover"/>
            </div>
            <div className="z-10 flex flex-col items-center gap-12 p-8">
                <h1 className="stroke-text sm:text-8xl text-6xl font-homeTitle font-bold text-center leading-[5rem]">THE O-SHOT</h1>
                <span className="block leading-8 stroke-text block sm:text-3xl lg:text-4xl text-2xl text-center font-homeTitle">With Blue Pills, Penis Implants, and Hundreds of Supplements to Help Men…</span>
            </div>
            <span className="block leading-[3rem] z-10 p-4 stroke-text block sm:text-4xl lg:text-5xl text-3xl text-center font-bold italic font-homeTitle">“Isn’t it About Time the Girls Have Their Turn?” ™</span>
        </section>
    );
};

export default Homepage;