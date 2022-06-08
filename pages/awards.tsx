import React, {useEffect, useState} from 'react';
import Image1 from "../public/media/photos/awards/1.jpg"
import Image3 from "../public/media/photos/awards/3.jpg"
import Image4 from "../public/media/photos/awards/4.png"
import Image5 from "../public/media/photos/awards/5.jpg"
import Image6 from "../public/media/photos/awards/6.png"
import Image7 from "../public/media/photos/awards/7.jpg"
import Image8 from "../public/media/photos/awards/8.jpg"
import Image9 from "../public/media/photos/awards/9.png"
import Image10 from "../public/media/photos/awards/10.jpg"

import Image from "next/image";
import {useResizer} from "../contexts/resizer-context";
const Awards = () => {
    const {widthPage} = useResizer()
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setReady(true)
    }, [])

    return (
        <main className="flex flex-col items-center justify-center p-8 py-16 gap-16">
            <h1 className="text-4xl">Awards</h1>
            <div className="grid xls:grid-cols-4 sm:grid-cols-3 smxl:grid-cols-2 grid-cols-1 gap-20 items-center justify-center">
                <div className="flex items-center justify-center">
                    <Image alt="2019 Award Winner" src={Image1} placeholder="blur"/>
                </div>
                <div className="flex items-center justify-center">
                    <Image alt="2020 Award Winner" src={Image10} placeholder="blur"/>
                </div>
                <div className="flex items-center justify-center">
                    <Image alt="2020 Award Highly Commended" src={Image3} placeholder="blur"/>
                </div>
                <div className="flex items-center justify-center">
                    <Image alt="2016 Finalist" src={Image4} placeholder="blur"/>
                </div>
                <div className="smxl:col-span-2 col-span-1 flex items-center justify-center">
                    <Image alt="2020 Aesthetic Practice of the Year" src={Image5} placeholder="blur"/>
                </div>
                <div className="flex items-center justify-center">
                    <Image alt="2022 Global Excellence Awards" src={Image6} placeholder="blur"/>
                </div>
                {
                    ready && widthPage > 1152 ?
                        <div className="flex items-center justify-center">
                            <Image alt="2020/2021 Global Aesthetic Awards" src={Image9} placeholder="blur"/>
                        </div>
                        :
                        <div className="smxl:col-span-2 col-span-1 flex items-center justify-center">
                            <Image alt="2020 Non Surgical Makeover of the Year" src={Image8} placeholder="blur"/>
                        </div>
                }

                <div className="smxl:col-span-2 col-span-1 flex items-center justify-center">
                    <Image alt="2020 Medical Aesthetic Practitioner of the Year" src={Image7} placeholder="blur"/>
                </div>
                {
                    ready && widthPage > 768 && widthPage <= 1152 ?
                        <div className="flex items-center justify-center">
                            <Image alt="2020/2021 Global Aesthetic Awards" src={Image9} placeholder="blur"/>
                        </div>
                            :
                        <div className="smxl:col-span-2 col-span-1 flex items-center justify-center">
                            <Image alt="2020 Non Surgical Makeover of the Year" src={Image8} placeholder="blur"/>
                        </div>
                }

            </div>
        </main>
    );
};

export default Awards;