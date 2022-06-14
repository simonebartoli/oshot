import React from 'react';
import {BsLightningCharge, BsPatchCheck} from "react-icons/bs";
import {BiBed} from "react-icons/bi";
import {MdOutlineMedicalServices} from "react-icons/md";
import {FaSyringe} from "react-icons/fa";

const WhyYouNeedIt = () => {
    return (
        <section className="flex flex-col px-8 py-16 items-center gap-24 w-full">
            <div className="space-y-12 md:w-3/4 sm:w-4/5 w-full">
                <h2 className="text-center leading-[3rem]">Why you probably need Oshot?</h2>
                <p className="leading-10 tracking-wide text-lg pl-8 border-l-4 border-gold">
                    It’s not just men who experience sexual problems, such as decreased pleasure and sensation, but many women choose to suffer in silence! No longer does this need to be the case! There are plenty of causes for such problems; childbirth, menopause, even natural ageing; but there is just one solution: The O-Shot ®.
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-24 p-4 w-[95%]">
                <div className="grid mdx:grid-cols-3 grid-cols-1 items-center justify-around gap-24 w-full">
                    <div className="flex flex-row items-center mdx:justify-center justify-start gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] sm:p-8 p-7 bg-gold rounded-full z-0"/>
                            <BsPatchCheck className="relative z-10 text-white"/>
                        </div>
                        <span className="mdx:text-2xl lg:!text-3xl sm:text-3xl text-2xl">Non Surgical</span>
                    </div>
                    <div className="flex flex-row items-center mdx:justify-center justify-start gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] sm:p-8 p-7 bg-gold rounded-full z-0"/>
                            <BiBed className="relative z-10 text-white"/>
                        </div>
                        <span className="mdx:text-2xl lg:!text-3xl sm:text-3xl text-2xl">Painless</span>
                    </div>
                    <div className="flex flex-row items-center mdx:justify-center justify-start gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] sm:p-8 p-7 bg-gold rounded-full z-0"/>
                            <BsLightningCharge className="relative z-10 text-white"/>
                        </div>
                        <span className="mdx:text-2xl lg:!text-3xl sm:text-3xl text-2xl">40min Office Procedure</span>
                    </div>
                </div>
                <div className="grid mdx:grid-cols-2 grid-cols-1 items-center justify-around gap-24 pb-12 lg:!w-11/12 w-full">
                    <div className="flex flex-row items-center mdx:justify-center justify-start gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] sm:p-8 p-7 bg-gold rounded-full z-0"/>
                            <FaSyringe className="relative z-10 text-white"/>
                        </div>
                        <span className="mdx:text-2xl lg:!text-3xl sm:text-3xl text-2xl">Under Topical Anaesthesia</span>
                    </div>
                    <div className="flex flex-row items-center mdx:justify-center justify-start gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] sm:p-8 p-7 bg-gold rounded-full z-0"/>
                            <MdOutlineMedicalServices className="relative z-10 text-white"/>
                        </div>
                        <span className="mdx:text-2xl lg:!text-3xl sm:text-3xl text-2xl">No Side Effect Reported so Far</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyYouNeedIt;