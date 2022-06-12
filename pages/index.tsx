import type {NextPage} from 'next'
import Head from "next/head";

import React from "react";
import Homepage from "../components/index/homepage";
import WhyYouNeedIt from "../components/index/whyYouNeedIt";
import Reviews from "../components/index/reviews";
import Contact from "../components/index/contact";
import {TestimonialsCombinedType, TestimonialsType} from "../data/types";
import getTestimonials from "./api/testimonials";
import WhatIsIt from "../components/index/whatIsIt";
import WhoAreWe from "../components/index/whoAreWe";
import Gallery from "../components/index/gallery";

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

                <meta property="og:title" content="Oshot UK - Improve Vaginal Stimulation"/>
                <meta property="og:site_name" content="Oshot UK - Improve Vaginal Stimulation"/>
                <meta property="og:url" content="oshot.uk"/>
                <meta property="og:description" content="The O-Shot (or Orgasm Shot) is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina."/>
                <meta property="og:type" content="article"/>
                <meta property="og:image" content="https://oshot.uk/media/photos/logo.png"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@DrSWclinics"/>
                <meta name="twitter:title" content={"Oshot UK - Improve Vaginal Stimulation"}/>
                <meta name="twitter:description" content={"The O-Shot (or Orgasm Shot) is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina."}/>
                <meta name="twitter:image" content="https://oshot.uk/media/photos/logo.png"/>
            </Head>
            <Homepage/>
            <WhyYouNeedIt/>
            <WhatIsIt/>
            <Reviews testimonials={testimonials}/>
            <WhoAreWe/>
            {/*<Doctor/>*/}
            <Gallery/>
            {/*<Benefits/>*/}
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
        }, revalidate: 3600
    }
}

export default Home
