import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import Image from "next/image";
import ImageAward2020 from "../../public/media/photos/about/2020.png";
import ImageAward2016 from "../../public/media/photos/about/2016.jpg";
import ImageAward2019 from "../../public/media/photos/about/2019.png";
import ImageAward2015 from "../../public/media/photos/about/2015.jpg";
import ImageAward2020Extended from "../../public/media/photos/about/2020-large.jpg";
import {useResizer} from "../../contexts/resizer-context";

const Slider = () => {
    const {widthPage} = useResizer()
    const [slideNumber, setSlideNumber] = useState<number | "auto">(4)

    useEffect(() => {
        if(widthPage > 1152){
        }else if (widthPage <= 640){
        }
    }, [widthPage])

    return (
        <article className="flex flex-row items-center justify-center w-full">
            <Swiper
                loop={true}
                draggable={true}
                slidesPerView={slideNumber}
                slidesPerGroup={1}
                slidesPerGroupAuto={true}
                spaceBetween={50}
                grabCursor={true}
                autoplay={{
                    delay: 1500
                }}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay]}
                className={"w-full about"}
            >
                <SwiperSlide className={"test1"}>
                    <div className="flex flex-row items-center justify-center p-2 border-2 border-gold rounded-md outline-1 outline-offset-8 outline-dashed">
                        <Image src={ImageAward2020} alt={"Award 2020"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={"test1"}>
                    <div className="flex flex-row items-center justify-center p-2 border-2 border-gold rounded-md outline-1 outline-offset-8 outline-dashed">
                        <Image src={ImageAward2016} alt={"Award 2016"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={"test1"}>
                    <div className="flex flex-row items-center justify-center p-2 border-2 border-gold rounded-md outline-1 outline-offset-8 outline-dashed">
                        <Image src={ImageAward2019} alt={"Award 2019"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={"test1"}>
                    <div className="flex flex-row items-center justify-center p-2 border-2 border-gold rounded-md outline-1 outline-offset-8 outline-dashed">
                        <Image src={ImageAward2015} alt={"Award 2015"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="test">
                    <div className="flex flex-row items-center justify-center p-2 border-2 border-gold rounded-md outline-1 outline-offset-8 outline-dashed">
                        <Image src={ImageAward2020Extended} alt={"Award 2020 Big"}/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </article>
    );
};

export default Slider;