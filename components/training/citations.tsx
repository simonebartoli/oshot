import React, {useEffect, useState} from 'react';
import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/bundle";
import {useResizer} from "../../contexts/resizer-context";
import {TrainingCitations} from "../../data/types";
import {NextPage} from "next";

type Props = {
    citations: TrainingCitations[]
}

const Citations: NextPage<Props> = ({citations}) => {
    const {widthPage} = useResizer()
    const [slidesPerView, setSlidesPerView] = useState(3)

    useEffect(() => {
        if(widthPage > 768){
            setSlidesPerView(3)
        }else if(widthPage > 500 && widthPage <= 768){
            setSlidesPerView(2)
        }else{
            setSlidesPerView(1)
        }
    }, [widthPage])

    return (
        <section className="w-full flex flex-row py-14 pb-12 citations bg-neutral-50 border-y-2 border-dashed border-gold">
            <Swiper
                loop={true}
                autoHeight={true}
                draggable={true}
                slidesPerView={slidesPerView}
                spaceBetween={50}
                grabCursor={true}
                navigation={false}
                autoplay={{
                    delay: 3000
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className={""}
            >
                {citations.map((element, index) =>
                    <SwiperSlide key={index}>
                        <div className="flex flex-col gap-4 justify-center items-center w-3/4">
                            <span className="text-2xl">
                                “{element.message}”
                            </span>
                            <span className="italic text-base self-end text-gold">{element.name}</span>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    );
};

export default Citations;