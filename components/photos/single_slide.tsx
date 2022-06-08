import React from 'react';
import Image from "next/image";
import {GalleryType} from "../../data/types";
import {NextPage} from "next";

type Props = {
    slide: GalleryType
}

const SingleSlide: NextPage<Props> = ({slide}) => {
    return (
        <div className="flex sm:flex-row flex-col justify-evenly gap-14 items-center h-full relative">
            <div className="sm:w-2/5 w-2/3 lg:w-1/5 relative photo">
                <div className="bg-black text-gold px-4 py-2 min-w-1/4 absolute top-0 left-0 z-10 font-semibold text-center rounded-tl-md">Before</div>
                <Image src={`/media/photos/gallery/${slide.before}`} alt="Oshot Changes"
                       layout={"fill"} className={"photo-image"}
                />
            </div>
            <div className="sm:absolute static sm:w-fit w-full sm:h-[100%] w-3/4 p-[1px] bg-gold"/>
            <div className="sm:w-2/5 w-2/3 lg:w-1/5 relative photo">
                <div className="bg-black text-gold px-4 py-2 min-w-1/4 absolute top-0 left-0 z-10 font-semibold text-center rounded-tl-md">After</div>
                <Image src={`/media/photos/gallery/${slide.after}`} alt="Oshot Changes"
                       layout={"fill"} className={"photo-image"}
                />
            </div>
        </div>
    );
};

export default SingleSlide;