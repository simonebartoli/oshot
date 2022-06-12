import React from 'react';
import WhatIsIt from "../components/training/whatIsIt";
import Citations from "../components/training/citations";
import Testimonials from "../components/training/testimonials";
import {TrainingCitations, TrainingVideos} from "../data/types";
import {getTrainingCitations, getTrainingVideos} from "./api/training";
import {NextPage} from "next";
import Head from "next/head";
import {trainingJSONLD} from "../data/jsonld/training-jsonld";

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
                <meta name="revisit-after" content="3 days"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="Training - Oshot UK"/>
                <meta property="og:site_name" content="Oshot UK - Improve Vaginal Stimulation"/>
                <meta property="og:url" content="oshot.uk/training"/>
                <meta property="og:description" content="In this page you'll find what doctor think about the trainer that I hosted in the past."/>
                <meta property="og:type" content="article"/>
                <meta property="og:image" content="https://oshot.uk/media/photos/logo.png"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@DrSWclinics"/>
                <meta name="twitter:title" content={"Training - Oshot UK"}/>
                <meta name="twitter:description" content={"In this page you'll find what doctor think about the trainer that I hosted in the past."}/>
                <meta name="twitter:image" content="https://oshot.uk/media/photos/logo.png"/>

                <script key={"about-JSONLD"} type={"application/ld+json"}
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify(trainingJSONLD())
                        }}
                />
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
        }, revalidate: 3600
    }
}

export default Training;