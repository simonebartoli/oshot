import React from 'react';
import Article from "../components/testimonials/article";
import Head from "next/head";
import {TestimonialsType} from "../data/types";
import getTestimonials from "./api/testimonials";
import {NextPage} from "next";

type Props = {
    testimonials: TestimonialsType
}

// ARTICLES LEFT & ARTICLES RIGHT

const Testimonials: NextPage<Props> = ({testimonials}) => {
    return (
        <main id={"main"} className="flex flex-col justify-start items-center p-8 pb-16 gap-8">
            <Head>
                <title>Testimonials and Experiences - Oshot UK</title>
                <meta name="description" content="Here you can find all the experiences and story of our past patients. They all were very impressed on how this treatment change their lives."/>
                <meta name="keywords" content="review, reviews, experience, experiences, good, pleasure, pain, UK, relax, condition"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="Testimonials and Experiences - Oshot UK"/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/testimonials"/>
                <meta property="og:description" content="Here you can find all the experiences and story of our past patients. They all were very impressed on how this treatment change their lives."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content=""/>

            </Head>
            <h1 className="text-4xl">Testimonials</h1>
            <p>In this page you will see the feelings of people that have tried our treatment.</p>
            <section className="flex flex-row flex-wrap gap-8 sm:p-4">
                <div className="flex grow flex-col lg:basis-1/3 h-fit gap-8">
                    {testimonials.articlesLeft.map((element, index) =>
                        <Article key={index} author={element.author} title={element.title} message={element.message}/>
                    )}
                </div>
                <div className="flex grow flex-col lg:basis-1/3 h-fit gap-8">
                    {testimonials.articlesRight.map((element, index) =>
                        <Article key={index} author={element.author} title={element.title} message={element.message}/>
                    )}
                </div>
            </section>
        </main>
    );
};

export const getStaticProps = () => {
    const testimonials: TestimonialsType = getTestimonials()
    return {
        props: {
            testimonials
        }, revalidate: 3600
    }
}

export default Testimonials;