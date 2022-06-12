import React, {RefObject, useEffect, useRef, useState} from 'react';
import styles from "../../styles/press.module.css";
import Image from "next/image";
import {FaAngleDoubleRight} from "react-icons/fa";
import {VscDebugBreakpointLog} from "react-icons/vsc";
import {NextPage} from "next";
import Link from "next/link";
import {Waypoint} from "react-waypoint";

type Props = {
    id: number
    title: string,
    brief: string,
    author: string,
    date: string,
    path: string
    nation?: string
    reading?: string
}

const IndexArticle: NextPage<Props> = ({id, title, brief, author, date, path, nation, reading}) => {
    const iconRef: RefObject<HTMLElement> = useRef(null)
    const dateRef: RefObject<HTMLElement> = useRef(null)
    const arrowMovingRef: RefObject<HTMLElement> = useRef(null)
    const readMoreRef: RefObject<HTMLAnchorElement> = useRef(null)
    const [widthPage, setWidthPage] = useState<number | null>(null)

    const switchColor = () => {
        const icon = iconRef.current?.children[0]
        const date = dateRef.current
        const arrow = arrowMovingRef.current?.children[0]
        const readMore = readMoreRef.current

        icon?.classList.toggle("text-neutral-500")
        icon?.classList.toggle("text-black")
        icon?.classList.toggle("scale-[250%]")

        date?.classList.toggle("text-xl")
        date?.classList.toggle("text-neutral-500")
        date?.classList.toggle("text-gold")

        arrow?.classList.toggle("animate-arrowMove")
        arrow?.classList.toggle("text-gold")
        arrow?.classList.toggle("text-neutral-500")

        readMore?.classList.toggle("text-neutral-500")
        readMore?.classList.toggle("text-gold")
    }

    useEffect(() => {
        setWidthPage(window.innerWidth)
    })

    return (
        <article className="w-full flex flex-col sm:flex-row gap-8 justify-evenly items-center relative">
            <div className={"absolute"}>
                <Waypoint onEnter={switchColor} topOffset={"20%"} bottomOffset={"30%"} onLeave={switchColor}/>
            </div>
            <div className={styles.press}>
                <Image src={path} layout="fill"  alt={`Image - ${title}`} className={styles.image}/>
            </div>
            <div className="sm:w-1/2 w-full flex flex-col gap-4 justify-evenly self-stretch">
                <div>
                    {
                        nation !== undefined && <span className="text-red-600 italic text-lg">International</span>
                    }
                    <h2 className="text-2xl" dir="auto">{title}</h2>
                    <span className="text-sm italic">{`${author} ${(widthPage !== null && widthPage < 768) ? " | " + date : ""}`}</span>
                </div>
                <p dir="auto">
                    {brief}
                </p>
                <div className="flex flex-row justify-end sm:justify-start items-center gap-8">
                    <span ref={arrowMovingRef}>
                        <FaAngleDoubleRight className="mt-[8px] scale-125 text-neutral-500 transition"/>
                    </span>
                    <Link href={`/press/${id}`}>
                        <a href={`/press/${id}`} ref={readMoreRef} className="text-neutral-500 hover:scale-110 hover:text-gold transition text-xl underline underline-offset-8">Read More</a>
                    </Link>
                </div>
            </div>
            <span ref={iconRef}>
                <VscDebugBreakpointLog className="md:block hidden text-neutral-500 absolute transition top-1/2 right-0 xls:-right-[6.25%] -translate-y-1/2 translate-x-1/2"/>
            </span>
            <span ref={dateRef} className="md:block hidden text-neutral-500 absolute w-max top-1/2 transition left-[103.125%] xls:left-[109.375%] -translate-y-1/2">{date}</span>
        </article>
    );
};

export default IndexArticle;