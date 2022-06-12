import React from 'react';
import Image from "next/image";
import Photo from "../../public/media/photos/training/cropped-IAAGSW-final.png";
import Link from "next/link";

const WhatIsIt = () => {
    return (
        <section className="p-8 flex lg:flex-row flex-col justify-evenly items-center w-full">
            <div className="smxl:w-2/3 sm:w-1/2 w-full flex items-center justify-center p-4">
                <Image src={Photo} alt="IAAGSW Logo"/>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-8 text-lg leading-10 p-4 items-center">
                <p className="sm:text-justify smx:text-left text-justify">
                    <span className="font-semibold text-gold">IAAGSW</span>
                    &nbsp;(International Association of Aesthetic Gynaecology and Sexual Wellbeing)&nbsp;
                    <span className="font-semibold text-gold">
                            was formed in response to the dramatic increase in demand for surgical and non-surgical treatments
                        </span>
                    &nbsp;in this field. This Association aim to create a <span className="font-semibold text-gold">transparent</span>
                    &nbsp;platform where <span className="font-semibold text-gold">professionals</span> from different
                    specialities come together to <span className="font-semibold text-gold">share their medical knowledge and experience</span>.
                    By doing so, <span className="font-semibold text-gold">practitioners will have a greater</span>
                    &nbsp;awareness of another field’s approach to a condition/diagnosis and this&nbsp;
                    <span className="font-semibold text-gold">communal and comprehensive understanding</span> can only
                    benefit the patient.
                </p>
                <p className="sm:text-justify smx:text-left text-justify">
                    <span className="font-semibold text-gold">Dr Sherif Wakil</span>
                    &nbsp;has been the <span className="font-semibold text-gold">president of third IAAGSW conference</span>.&nbsp;
                    <span className="font-semibold text-gold">He trained several practitioner</span> teaching them all the skills
                    required to improve the sexual well being
                    of their patient. <span className="font-semibold text-gold">They all remained very satisfied</span> as you can below.
                </p>
                <div className="flex sm:flex-row flex-col justify-evenly w-full items-center gap-4">
                    <span className="underline underline-offset-8 text-xl">Are you Interested?</span>
                    <Link href="/contact">
                        <a href={"/contact"} className="p-4 sm:w-1/2 w-full my-4 text-center bg-purple transition hover:bg-gold text-lg rounded-lg text-white cursor-pointer">Contact Us</a>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhatIsIt;