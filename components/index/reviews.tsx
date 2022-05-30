import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css/bundle";
import {TestimonialsCombinedType} from "../../data/types";
import {NextPage} from "next";
import Link from "next/link";
import {useResizer} from "../../contexts/resizer-context";

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
    const trimChars = (text: string, chars: number) => {
        let index = 0
        let finalText = ""
        while(index < chars){
            finalText += text.charAt(index)
            index++
        }
        return finalText
    }
    useEffect(() => {
        setReady(true)
    }, [])

    return (
        <section className="flex flex-col sm:px-8 px-0 py-16 items-center w-full home-container">
            <div className="space-y-10 text-center px-8 sm:px-0">
                <h2 className="leading-[3rem]">What People say about this treatment?</h2>
                <p className="text-lg leading-8">
                    Below you can find what people that have experienced this treatment felt after having received the treatment
                </p>
            </div>
            <div className={"w-full"}>
                {ready &&
                    <Swiper
                        loop={true}
                        draggable={true}
                        slidesPerView={widthPage === undefined ? 1 : widthPage>1200 ? 3 : widthPage > 900 ? 2 : 1}
                        grabCursor={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            horizontalClass: "navigationBar"
                        }}
                        modules={[Navigation, Pagination]}
                        className={""}
                    >
                        {testimonials.map((element, index) =>
                            <SwiperSlide key={index} className="p-8 py-16 flex flex-col self-stretch h-max">
                                <div className={"flex flex-col h-max  gap-4 p-4 border-[1px] border-neutral-400 mx-8 bg-white shadow-xl rounded-tl-2xl rounded-br-2xl"}>
                                    <div className="space-y-2">
                                        <span className="block text-green-600 italic text-base">{trimText(element.author, 2)}</span>
                                        <span className="block font-semibold text-xl">{element.title}</span>
                                    </div>
                                    <div className={"flex flex-col"}>
                                        <p className="text-base leading-8 pb-4">
                                            {trimChars(element.message, 215)}...
                                        </p>
                                        <Link href={"/testimonials"}>
                                            <a className="text-green-600 text-right text-base">Read More...</a>
                                        </Link>
                                    </div>
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