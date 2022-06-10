import React from 'react';
import Head from "next/head";

const Incontinence = () => {
    return (
        <article className="flex flex-col sm:gap-6 gap-10 relative justify-center items-center p-8 py-16">
            <Head>
                <title>Incontinence - Oshot UK</title>
                <meta name="description" content={"In this page you will find information about different medical conditions that could be improved/resolved with the Oshot therapy"}/>
                <meta name="keywords" content="disease, pain, sexual, dysfunction, incontinence, lichen, sclerosus, oshot, solution, feeling"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content={"Incontinence - Oshot UK"}/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/incontinence"/>
                <meta property="og:description" content={"In this page you will find information about different medical conditions that could be improved/resolved with the Oshot therapy"}/>
                <meta property="og:type" content="article"/>
            </Head>
            <span className="absolute -top-20" id={"incontinence"}/> {/*ANCHOR LINK*/}
            <h2 className={`text-4xl transition font-semibold text-gold sm:text-left text-center`}>Incontinence</h2>
            <div className={`flex md:flex-row flex-col md:gap-20 gap-8 justify-center items-center sm:p-8 smx:p-4 smx:py-8 py-2 rounded-lg transition text-lg leading-10`}>
                <div className="space-y-6 basis-1/3 grow">
                    <h3 className="text-2xl font-semibold">What is it?</h3>
                    <div className="space-y-4 text-justify">
                        <p>
                            Stress incontinence happens when physical movement or activity - such as coughing, sneezing, running or heavy lifting - puts pressure (stress) on your bladder. Stress incontinence is not related to psychological stress.
                        </p>
                        <p>
                            Stress incontinence differs from urge incontinence, which is the unintentional loss of urine caused by the bladder muscle contracting, usually associated with a sense of urgency. Stress incontinence is much more common in women than men.
                        </p>
                    </div>
                </div>
                <div className="space-y-8 basis-1/3 grow">
                    <div className="space-y-6 text-justify">
                        <h3 className="text-2xl font-semibold">What could you feel?</h3>
                        <p>
                            If you have stress incontinence, you may feel embarrassed, isolate yourself, or limit your work and social life, especially exercise and leisure activities. With treatment, you’ll likely be able to manage stress incontinence and improve your overall well being.
                        </p>
                    </div>
                    <div className="space-y-6 text-justify">
                        <h3 className="text-2xl font-semibold">Oshot Results</h3>
                        <p>
                            The O-Shot® procedure has an 85% success rate is treating Urinary Stress Incontinence!
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Incontinence;