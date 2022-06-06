import React, {RefObject, useEffect, useRef, useState} from 'react';
import {NextPage} from "next";
import {Waypoint} from "react-waypoint";

type Props = {
    question: string,
    answer: string
}

const FaqsArticle:NextPage<Props> = ({question, answer}) => {
    const ref: RefObject<HTMLInputElement> = useRef(null)
    const [sizeWindow, setSizeWindow]: any = useState(null)

    useEffect(() => {
        setSizeWindow(window.innerWidth)
    }, [])

    const switchColor = (enter: boolean) => {
        if(enter) ref.current!.style.color = "green"
        else ref.current!.style.color = "black"
    }

    return (
        <article className="flex gap-4 flex-col md:gap-0 md:flex-row justify-between items-center group">
            {(sizeWindow !== null && sizeWindow <= 768) ? <Waypoint onEnter={() => switchColor(true)} onLeave={() => switchColor(false)} bottomOffset={"60%"}/> : ""}
            <div className="
                 basis-5/12 flex items-center text-xl md:border-r-2 border-r-neutral-500
                 self-stretch group-hover:text-gold group-hover:border-r-gold transition duration-200">
                <h2 ref={ref} className="text-xl leading-8 md:basis-4/5">{question}</h2>
            </div>
            <p className="basis-1/2 leading-8 md:py-2">
                {answer}
            </p>
        </article>
    );
};

export default FaqsArticle;