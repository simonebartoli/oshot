import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css/bundle";
import {TestimonialsCombinedType} from "../../data/types";
import {NextPage} from "next";
import Link from "next/link";
import {useResizer} from "../../contexts/resizer-context";
import Image from "next/image";
import DecoratorSVG from "../../public/media/photos/index/decorator.png"
import Iframe from "../iframe";

type Props = {
    testimonials: TestimonialsCombinedType[]
}

const Reviews: NextPage<Props> = ({testimonials}) => {
    const {widthPage} = useResizer()
    const [ready, setReady] = useState(false)

    const trimText = (text:string, word: number): string => {
        const newText: string[] = text.split(" ")
        let finalText = ""
        for(let i = 0; i<word; i++) {
            if(i === 0) finalText += newText[i]
            else if (i+1 === word) finalText += ` ${newText[i].replace(",", "")}`
            else finalText += ` ${newText[i]}`
        }
        return finalText
    }
    // const trimChars = (text: string, chars: number) => {
    //     let index = 0
    //     let finalText = ""
    //     while(index < chars){
    //         finalText += text.charAt(index)
    //         index++
    //     }
    //     return finalText
    // }
    useEffect(() => {
        setReady(true)
    }, [])

    return (
        <section className="flex flex-col py-16 items-center w-full bg-white gap-12">
            <div className="space-y-10 text-center px-8 sm:px-4">
                <h2 className="leading-[3rem]">What People say about this treatment?</h2>
                <p className="text-lg leading-8">
                    Below you can find what people that have experienced this treatment felt after having received the treatment
                </p>
            </div>
            <div className="flex flex-col justify-center items-center w-full relative gap-16 sm:px-8 px-0">
                <div className={"w-3/4"}>
                    <Image src={DecoratorSVG} alt="decorator"/>
                </div>
                <div className="flex md:flex-row flex-col w-full items-center justify-evenly md:gap-0 gap-16">
                    <Iframe
                        url="https://www.youtube.com/embed/9CJmkxKmLDE"
                        className={"rounded-lg basis-1/3 outline-dashed outline-offset-8 outline-gold shadow-lg"}
                    />
                    <Iframe
                        url="https://www.youtube.com/embed/V32C11_XktA"
                        className={"rounded-lg basis-1/3 outline-dashed outline-offset-8 outline-gold shadow-lg"}
                    />
                </div>
                <div className="flex md:flex-row flex-col w-full items-center justify-evenly md:gap-0 gap-16">
                    <Iframe
                        url="https://www.youtube.com/embed/YcwRGH9RHrw"
                        className={"rounded-lg basis-1/3 outline-dashed outline-offset-8 outline-gold shadow-lg"}
                    />
                    <Iframe
                        url="https://www.youtube.com/embed/f19JI50ePWc"
                        className={"rounded-lg basis-1/3 outline-dashed outline-offset-8 outline-gold shadow-lg"}
                    />
                </div>
                <div className="flex flex-col gap-8 px-8 w-full items-center justify-center">
                    <p className="text-center text-xl">Do you want to see more video testimonials?</p>
                    <Link href={"/videos"}>
                        <a href={"/videos"} className="mdx:w-1/3 sm:w-1/2 smxl:w-3/4 w-5/6 text-lg p-4 text-white bg-purple rounded-lg shadow-lg text-center hover:bg-gold transition">Look Our Videos</a>
                    </Link>
                </div>
            </div>
            <div className={"w-full border-dotted border-silver border-y-2 pb-4 mt-6 px-0 bg-neutral-100"}>
                {ready &&
                    <Swiper
                        loop={true}
                        autoHeight={true}
                        draggable={true}
                        slidesPerView={widthPage === undefined ? 1 : widthPage>1200 ? 3 : widthPage > 900 ? 2 : 1}
                        grabCursor={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            horizontalClass: "navigationBar"
                        }}
                        modules={[Navigation]}
                        className={"home-slider"}
                    >
                        {testimonials.map((element, index) =>
                            <SwiperSlide key={index} className="p-8 pb-8 flex flex-col self-stretch h-max">
                                <div className={"flex flex-col h-full justify-between gap-4 p-4 border-[1px] border-purple mx-8 bg-white shadow-md shadow-gold rounded-tl-2xl rounded-br-2xl"}>
                                    <div className="space-y-2">
                                        <span className="block text-gold italic text-base">{trimText(element.author, 2)}</span>
                                        <span className="block font-semibold text-xl">{element.title}</span>
                                    </div>
                                    <div className={"flex flex-col"}>
                                        <p className="text-base leading-8 pb-4">
                                            {trimText(element.message, 50)}...
                                        </p>
                                    </div>
                                    <Link href={"/testimonials"}>
                                        <a href={"/testimonials"} className="text-gold text-right text-base">Read More...</a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>
                }
            </div>
        </section>
    );
};

export default Reviews;