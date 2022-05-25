import type {NextPage} from 'next'
import Head from "next/head";

import React from "react";
import Homepage from "../components/index/homepage";
import Reasons from "../components/index/reasons";
import Reviews from "../components/index/reviews";
import Doctor from "../components/index/doctor";
import Benefits from "../components/index/benefits";
import Contact from "../components/index/contact";
import {TestimonialsCombinedType, TestimonialsType} from "../data/types";
import getTestimonials from "./api/testimonials";

type Props = {
    testimonials: TestimonialsCombinedType[]
}

const Home: NextPage<Props> = ({testimonials}) => {
    return (
        <main id={"main"} className="flex flex-col items-center w-full text-4xl">
            <Head>
                <title>Oshot UK - Improve Vaginal Stimulation</title>
                <meta name="description"
                      content="The O-Shot (or Orgasm Shot) is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina."/>
                <meta name="keywords"
                      content="vagina, stimulation, orgasm, urine, female, passion, surgery, operation, professional, cheap"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>
            </Head>
            <Homepage/>
            <Reasons/>
            <Reviews testimonials={testimonials}/>
            <Doctor/>
            <Benefits/>
            <Contact/>
        </main>
    )
}

export const getStaticProps = () => {
    const fetch: TestimonialsType = getTestimonials()
    const testimonials = [
        ...fetch.articlesLeft,
        ...fetch.articlesRight
    ]
    return {
        props: {
            testimonials
        }
    }
}

export default Home
