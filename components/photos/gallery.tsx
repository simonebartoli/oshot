import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css/bundle";

import {NextPage} from "next";
import SingleSlide from "./single_slide";
import {GalleryType} from "../../data/types";


type Props = {
    explicit: boolean
    gallery: GalleryType[]
}

const Gallery: NextPage<Props> = ({explicit, gallery}) => {
    return (
        <Swiper
            loop={true}
            autoHeight={false}
            draggable={true}
            slidesPerView={1}
            grabCursor={true}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation]}
            className={`w-full h-full transition-all ${!explicit ? "blur-xl saturate-50 pointer-events-none" : ""} gallery`}
        >
            {gallery.map((element, index) =>
                <SwiperSlide key={index}>
                    <SingleSlide slide={element}/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default Gallery;