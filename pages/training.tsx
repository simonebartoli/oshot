import React from 'react';
import WhatIsIt from "../components/training/whatIsIt";
import Citations from "../components/training/citations";
import Testimonials from "../components/training/testimonials";
import {TrainingCitations, TrainingVideos} from "../data/types";
import {getTrainingCitations, getTrainingVideos} from "./api/training";
import {NextPage} from "next";
import Head from "next/head";

type Props = {
    videos: TrainingVideos[]
    citations: TrainingCitations[]
}

const Training: NextPage<Props> = ({videos, citations}) => {
    return (
        <main className="flex flex-col py-16 items-center justify-center gap-16 w-full">
            <Head>
                <title>Training - Oshot UK</title>
                <meta name="description"
                      content="In this page you'll find what doctor think about the trainer that I hosted in the past."/>
                <meta name="keywords"
                      content="doctors, IAAGSW, Association, Aesthetic, Gynaecology, Sexual, Wellbeing, practitioners, transparency, awareness, conference, knowledge, testimonials, videos"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="1 days"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="Traning"/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/training"/>
                <meta property="og:description"
                      content="In this page you'll find what doctor think about the trainer that I hosted in the past."/>
                <meta property="og:type" content="article"/>
            </Head>
            <h1 className="text-4xl">Training Courses</h1>
            <WhatIsIt/>
            <Citations citations={citations}/>
            <Testimonials videos={videos}/>
        </main>
    );
};

export const getStaticProps = () => {
    const videos: TrainingVideos[] = getTrainingVideos()
    const citations: TrainingCitations[] = getTrainingCitations()
    return {
        props: {
            videos,
            citations
        }, revalidate: 3600*24
    }
}

export default Training;