import React from 'react';
import FaqsArticle from "../components/faqs/faqs";
import Head from "next/head";
import getFaqs from "./api/faqs";
import {FaqsType} from "../data/types";
import {NextPage} from "next";

type Props = {
    faqs: FaqsType[]
}

const Faqs: NextPage<Props> = ({faqs}) => {
    return (
        <main id={"main"} className="flex flex-col justify-start items-center p-8 pb-16 md:gap-16 gap-12">
            <Head>
                <title>Faqs - Oshot UK</title>
                <meta name="description" content="In this page you'll find all the answers for the most common questions we have collected over time."/>
                <meta name="keywords" content="faqs, faq, question, answer, urinary, incontinence, painful, expect, expectation, hurt, downtime, pregnant"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="3 days"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="Faq"/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/faqs"/>
                <meta property="og:description" content="In this page you'll find all the answers for the most common questions we have collected over time."/>
                <meta property="og:type" content="article"/>
            </Head>
            <h1 className="text-4xl">Faqs</h1>
            <section className="flex flex-col justify-center gap-14 p-4">
                {faqs.map((element, index) =>
                    <FaqsArticle key={index} question={element.question} answer={element.answer}/>
                )}
            </section>
        </main>
    );
};

export const getStaticProps = () => {
    const faqs: FaqsType[] = getFaqs()
    return {
        props: {
            faqs
        }, revalidate: 600
    }
}

export default Faqs;