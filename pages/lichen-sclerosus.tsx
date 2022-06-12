import React, {useState} from 'react';
import Head from "next/head";
import Image from "next/image"

import ImageCase1Before from "../public/media/photos/conditions/case 1/before.jpg"
import ImageCase1After from "../public/media/photos/conditions/case 1/after.jpg"
import ImageCase2Before from "../public/media/photos/conditions/case 2/before.jpg"
import ImageCase2After from "../public/media/photos/conditions/case 2/before.jpg"

const Lichen = () => {
    const [explicit, setExplicit] = useState(false)

    return (
        <article className="flex flex-col sm:gap-6 gap-10 relative items-center justify-center py-16">
            <Head>
                <title>Lichen Sclerosus - Oshot UK</title>
                <meta name="description" content={"In this page you will find information about lichen sclerosus that could be improved/resolved with the Oshot therapy"}/>
                <meta name="keywords" content="disease, pain, sexual, dysfunction, incontinence, lichen, sclerosus, oshot, solution, feeling"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content={"Lichen Sclerosus - Oshot UK"}/>
                <meta property="og:site_name" content="Oshot UK - Improve Vaginal Stimulation"/>
                <meta property="og:url" content="oshot.uk/lichen-sclerosus"/>
                <meta property="og:description" content={"In this page you will find information about lichen sclerosus that could be improved/resolved with the Oshot therapy"}/>
                <meta property="og:type" content="article"/>
                <meta property="og:image" content="https://oshot.uk/media/photos/logo.png"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@DrSWclinics"/>
                <meta name="twitter:title" content={"Lichen Sclerosus - Oshot UK"}/>
                <meta name="twitter:description" content={"In this page you will find information about lichen sclerosus that could be improved/resolved with the Oshot therapy"}/>
                <meta name="twitter:image" content="https://oshot.uk/media/photos/logo.png"/>
            </Head>
            <h2 className={`px-8 text-4xl transition sm:text-left text-center font-semibold text-gold`}>Lichen Sclerosus</h2>
            <div className={`text-justify flex md:flex-row flex-col md:gap-20 gap-12 justify-center items-center sm:p-16 smx:p-10 p-8 smx:py-16 py-4 rounded-lg transition text-lg leading-10`}>
                <div className="space-y-6 basis-1/3 grow">
                    <h3 className="text-2xl font-semibold">What is it?</h3>
                    <div className="space-y-4">
                        <p>
                            Lichen sclerosus (LIE-kun skluh-ROW-sus) is an uncommon condition that creates patchy, white skin that’s thinner than normal. Lichen sclerosus may affect skin on any part of your body, but most often involves skin of the vulva, foreskin of the penis or skin around the anus.
                        </p>
                        <p>
                            Anyone can get lichen sclerosus, but postmenopausal women are at highest risk. Left untreated, lichen sclerosus may lead to other complications.
                        </p>
                    </div>
                </div>
                <div className="space-y-12 basis-1/3 grow">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Do you need treatment?</h3>
                        <p>
                            You may not need treatment because sometimes lichen sclerosus improves on its own. If you do need treatment, your doctor can suggest options to return a more normal appearance to your skin and decrease the tendency for scarring.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Oshot, what it does?</h3>
                        <p>
                            The O-Shot is an excellent treatment for this condition as platelet rich plasma from the patient’s own body is injected into the affected areas.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative sticky top-[15%] z-20">
                    <div className={`${!explicit ? "absolute" : "hidden"} w-full top-[10%] left-1/2 -translate-x-1/2 z-20 p-14 bg-black text-gold text-center flex flex-col gap-8 items-center`}>
                        <span className="text-2xl underline underline-offset-8">Explicit Content Warning</span>
                        <div className="space-y-4">
                            <span className="block text-lg">This content is the result of our operations and it is explicit</span>
                            <span className="block text-lg">If you wish to see it, Please Click the Button Below</span>
                        </div>
                        <button onClick={() => setExplicit(true)} className="p-3 bg-white border-2 border-gold font-semibold w-fit">Show the Images</button>
                    </div>
                </div>
                <div className={`${!explicit ? "blur-2xl": "blur-0"} flex flex-col gap-20 py-14 transition-all`}>
                    <div className="flex smxl:flex-row flex-col w-full items-center justify-evenly bg-neutral-100 py-8 border-y-2 border-dashed border-gold gap-8">
                        <div className="smxl:w-1/4 smx:w-1/2 w-3/4 relative condition">
                            <div className="absolute top-0 left-0 p-3 text-gold bg-black z-20 text-center min-w-[33%] font-semibold rounded-tl-lg">Before</div>
                            <Image alt="Lichen Sclerosus Before Case 1" src={ImageCase1Before} placeholder={"blur"} priority={true}/>
                        </div>
                        <div className="smxl:w-1/4 smx:w-1/2 w-3/4 relative condition">
                            <div className="absolute top-0 left-0 p-3 text-gold bg-black z-20 text-center min-w-[33%] font-semibold rounded-tl-lg">After</div>
                            <Image alt="Lichen Sclerosus After Case 1" src={ImageCase1After} placeholder={"blur"} priority={true}/>
                        </div>
                    </div>
                    <div className="flex smxl:flex-row flex-col w-full items-center justify-evenly bg-neutral-100 py-8 border-y-2 border-dashed border-gold gap-8">
                        <div className="smxl:w-1/4 smx:w-1/2 w-3/4 relative condition">
                            <div className="absolute top-0 left-0 p-3 text-gold bg-black z-20 text-center min-w-[33%] font-semibold rounded-tl-lg">Before</div>
                            <Image alt="Lichen Sclerosus Before Case 2" src={ImageCase2Before} placeholder={"blur"}/>
                        </div>
                        <div className="smxl:w-1/4 smx:w-1/2 w-3/4 relative condition">
                            <div className="absolute top-0 left-0 p-3 text-gold bg-black z-20 text-center min-w-[33%] font-semibold rounded-tl-lg">After</div>
                            <Image alt="Lichen Sclerosus After Case 2" src={ImageCase2After} placeholder={"blur"}/>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Lichen;