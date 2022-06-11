import React, {useEffect, useState} from 'react';

import {NextPage} from "next";
import SingleSlide from "./single_slide";
import {GalleryType} from "../../data/types";


type Props = {
    explicit: boolean
    gallery: GalleryType[]
}

const Gallery: NextPage<Props> = ({explicit, gallery}) => {
    const [galleryVisible, setGalleryVisible] = useState<GalleryType[]>([])
    const [counter, setCounter] = useState(2)

    useEffect(() => {
        const membersToAdd = counter - galleryVisible.length
        const firstIndex = galleryVisible.length
        const finalIndex = galleryVisible.length + membersToAdd

        const newMembers: GalleryType[] = []
        for(let i = firstIndex; i < finalIndex; i++){
            if(i < gallery.length) newMembers.push(gallery[i])
        }

        setGalleryVisible([
            ...galleryVisible,
            ...newMembers
        ])

    }, [counter])

    const onLoadMore = () => {
        setCounter(counter+2)
    }

    return (
        <div className={`flex flex-col items-center justify-center gap-20 w-full transition-all ${!explicit ? "blur-xl saturate-50 pointer-events-none" : ""}`}>
            {
                galleryVisible.map((element, index) =>
                    <React.Fragment key={index}>
                        <SingleSlide slide={element}/>
                        {
                            index !== galleryVisible.length - 1 ?
                                <span className="w-3/4 pt-[1px] border-t-[1px] border-dashed border-neutral-500"/>
                            :

                            counter < gallery.length &&
                                <button onClick={onLoadMore} className="hover:bg-purple transition border-black border-[1px] p-4 w-2/3 sm:w-1/3 bg-gold text-white text-lg rounded-lg shadow-lg">
                                    Load More
                                </button>
                        }
                    </React.Fragment>
                )
            }

        </div>
    );
};

export default Gallery;