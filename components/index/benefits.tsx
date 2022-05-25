import React from 'react';
import {AiOutlineSend} from "react-icons/ai";

const Benefits = () => {
    return (
        <section className="flex flex-col lg:p-12 p-8 py-16 gap-12 items-center home-container w-full">
            <h2 className="leading-[3rem] text-center">Benefits of the Oshot</h2>
            <p className="text-lg leading-8 lg:w-3/4 w-full md:text-center text-left">
                Each woman’s experience with the O Shot ® will be different, but here’s what some of the patients in our Harley Street Clinic have told us they experienced after having the O-Shot ®
            </p>
            <div className="flex pt-4 md:flex-row flex-col items-center justify-between md:gap-8 gap-12 lg:w-3/4 w-full">
                <div className="flex flex-col gap-12 text-lg sm:w-4/5 smx:w-11/12 w-full">
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Younger, smoother skin of the vulva (lips of the vagina).
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            A tighter introitus (vaginal opening)
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Increased arousal from clitoral stimulation
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Increased sexual desire
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Increased natural lubrication
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-12 text-lg sm:w-4/5 smx:w-11/12 w-full">
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Increased ability to have a vaginal orgasm
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Stronger orgasms
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            More frequent orgasms
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Decreased pain for those with dyspareunia (painful intercourse)
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <AiOutlineSend className="mt-1 basis-1/12 text-green-700"/>
                        <p className="leading-8 basis-11/12">
                            Decreased urinary incontinence
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;