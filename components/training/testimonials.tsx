import React from 'react';
import {TrainingVideos} from "../../data/types";
import {NextPage} from "next";
import Iframe from "../iframe";

type Props = {
    videos: TrainingVideos[]
}

const Testimonials: NextPage<Props> = ({videos}) => {
    return (
        <section className="mt-8 flex flex-col justify-center items-center w-full mdx:gap-24 gap-14">
            {
                videos.map((element, index) =>
                    <div key={index} className="flex mdx:flex-row flex-col justify-evenly items-center w-full gap-14">
                        <Iframe
                            url={element.url1.replace("https://youtu.be/", "https://youtube.com/embed/")}
                            className={"mdx:w-1/3 sm:w-1/2 w-3/4 border-silver border-4 shadow-lg rounded-lg outline-dashed outline-[3px] outline-offset-8 outline-gold"}
                        />

                        {element.url2 !== undefined &&
                            <Iframe
                                url={element.url2.replace("https://youtu.be/", "https://youtube.com/embed/")}
                                className={"mdx:w-1/3 sm:w-1/2 w-3/4 border-silver border-4 shadow-lg rounded-lg outline-dashed outline-[3px] outline-offset-8 outline-gold"}
                            />}
                    </div>
                )
            }
        </section>
    );
};

export default Testimonials;