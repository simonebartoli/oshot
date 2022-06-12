import React, {useEffect, useRef, useState} from 'react';
import Gallery from "../components/photos/gallery";
import getGallery from "./api/gallery";
import {GalleryType} from "../data/types";
import {NextPage} from "next";
import Head from "next/head";

type Props = {
    gallery: GalleryType[]
}

const Photos: NextPage<Props> = ({gallery}) => {
    const [explicit, setExplicit] = useState(false)
    const hideRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(hideRef.current !== null && explicit){
            hideRef.current.style.display = "none"
        }
    }, [explicit])


    return (
        <main className="flex flex-col py-16 items-center justify-center gap-10">
            <Head>
                <title>Gallery - Oshot UK</title>
                <meta name="description"
                      content="In this page you'll be able to see what are the results of our operations over many different cases."/>
                <meta name="keywords"
                      content="photos, results, operations, vagina, change, problems, curiosity, expect, expectation"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="revisit-after" content="3 days"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="Gallery - Oshot UK"/>
                <meta property="og:site_name" content="Oshot UK - Improve Vaginal Stimulation"/>
                <meta property="og:url" content="oshot.uk/photos"/>
                <meta property="og:description"
                      content="In this page you'll be able to see what are the results of our operations over many different cases."/>
                <meta property="og:type" content="article"/>
                <meta property="og:image" content="https://oshot.uk/media/photos/logo.png"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@DrSWclinics"/>
                <meta name="twitter:title" content={"Gallery - Oshot UK"}/>
                <meta name="twitter:description" content={"In this page you'll be able to see what are the results of our operations over many different cases."}/>
                <meta name="twitter:image" content="https://oshot.uk/media/photos/logo.png"/>
            </Head>
            <h1 className="text-4xl">Gallery</h1>
            <p className="text-lg w-3/4 text-center leading-10">
                With <span className="text-gold font-semibold">more than 100 operations</span> we collected enough photos to
                show you  <span className="text-gold font-semibold">how the Oshot can actually&nbsp;</span>
                change you. And remember... <span className="text-gold font-semibold">the Oshot is</span> not about sexual illness but it&apos;s&nbsp;
                <span className="text-gold font-semibold">about sexual wellness</span>.
            </p>
            <div className="min-h-[500px] py-12 bg-neutral-50 border-y-2 border-silver border-dashed relative w-full flex flex-col items-center">
                <div className="sticky top-20 w-full z-20">
                    <div ref={hideRef} className="absolute top-20 left-0 w-full z-20 p-8 bg-black text-gold text-center flex flex-col gap-8 items-center">
                        <span className="text-2xl underline underline-offset-8">Explicit Content Warning</span>
                        <div className="space-y-4">
                            <span className="block text-lg">This content is the result of our operations and it is explicit</span>
                            <span className="block text-lg">If you wish to see it, Please Click the Button Below</span>
                        </div>
                        <button onClick={() => setExplicit(true)} className="p-3 bg-white border-2 border-gold font-semibold w-fit">Show the Images</button>
                    </div>
                </div>
                <Gallery explicit={explicit} gallery={gallery}/>
            </div>
        </main>
    );
};

export const getStaticProps = () => {
    const gallery: GalleryType[] = getGallery()
    return {
        props: {
            gallery
        }, revalidate: 3600
    }
}

export default Photos;