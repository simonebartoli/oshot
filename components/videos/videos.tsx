import React from 'react';
import {NextPage} from "next";

type Props = {
    title: string,
    description: string,
    url: string
}

const VideosArticle: NextPage<Props> = ({title, description, url}) => {

    return (
        <article className="flex flex-col md:flex-row items-center gap-8">
            <div className="basis-1/3 grow flex flex-row justify-center">
                <div className="space-y-4 md:basis-10/12">
                    <h2 className="text-2xl">{title}</h2>
                    <p className="leading-8">{description}</p>
                </div>
            </div>
            <div className="flex flex-row justify-center w-full basis-1/3 grow">
                <iframe src={url.replace("https://youtu.be/", "https://youtube.com/embed/")}
                        title={`Youtube Video - ${title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="lg:w-2/3 w-full shadow-xl aspect-video p-2 border-2 outline outline-1 outline-offset-4 outline-gold border-gold rounded-lg"
                >
                </iframe>
            </div>
        </article>
    );
};

export default VideosArticle;