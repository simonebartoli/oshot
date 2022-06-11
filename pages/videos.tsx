import React from 'react';
import VideosArticle from "../components/videos/videos";
import Head from "next/head";
import {VideosType} from "../data/types";
import getVideos from "./api/videos";
import {NextPage} from "next";

type Props = {
    videos: VideosType[]
}

const Videos: NextPage<Props> = ({videos}) => {

    return (
        <main id={"main"} className="flex flex-col p-8 gap-8 pb-16 justify-start items-center gap-12">
            <Head>
                <title>Videos - Oshot UK</title>
                <meta name="description" content="In this page you can find videos explaining what is the Oshot Treatment and how has changed life of many women."/>
                <meta name="keywords" content="videos, testimonials, oshot, sw, clinics, professional, comfortable, life, changes"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="Videos - Oshot UK"/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/videos"/>
                <meta property="og:description" content="In this page you can find videos explaining what is the Oshot Treatment and how has changed life of many women."/>
                <meta property="og:type" content="video.episode"/>
            </Head>
            <h1 className="text-4xl">Videos</h1>
            <section className="flex flex-col gap-12 p-4">
                {videos.map((element, index) =>
                    <React.Fragment key={index}>
                        <VideosArticle title={element.title} description={element.description} url={element.url}/>
                        {
                            index !== videos.length-1 && <span className="w-full p-[0.75px] bg-neutral-500"/>
                        }
                    </React.Fragment>
                )}
            </section>
        </main>
    );
};

export const getStaticProps = () => {
    const videos: VideosType[] = getVideos()
    return {
        props: {
            videos
        }, revalidate: 3600
    }
}

export default Videos;