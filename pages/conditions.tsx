import React, {useState} from 'react';
import Incontinence from "../components/conditions/incontinence";
import Lichen from "../components/conditions/lichen";
import Dysfunction from "../components/conditions/dysfunction";
import Head from "next/head";
import {Waypoint} from "react-waypoint";

const Conditions = () => {
    const [title, setTitle] = useState("Sexual Dysfunction")
    const [selected, setSelected] = useState({
        dysfunction: false,
        incontinence: false,
        lichen: false
    })

    const onEnterWaypoint = (index: number) => {
        switch (index) {
            case 1:
                setTitle("Sexual Dysfunction")
                setSelected({
                    incontinence: false,
                    lichen: false,
                    dysfunction: true
                })
                break
            case 2:
                setTitle("Incontinence")
                setSelected({
                    lichen: false,
                    dysfunction: false,
                    incontinence: true
                })
                break
            case 3:
                setTitle("Lichen Sclerosus")
                setSelected({
                    dysfunction: false,
                    incontinence: false,
                    lichen: true
                })
                break
        }
    }

    return (
        <main id="main" className="flex flex-col gap-12 p-8 pb-16 items-center">
            <Head>
                <title>{title} - Oshot UK</title>
                <meta name="description" content={"In this page you will find information about different medical conditions that could be improved/resolved with the Oshot therapy"}/>
                <meta name="keywords" content="disease, pain, sexual, dysfunction, incontinence, lichen, sclerosus, oshot, solution, feeling"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content={"Conditions - Oshot UK"}/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/conditions"/>
                <meta property="og:description" content={"In this page you will find information about different medical conditions that could be improved/resolved with the Oshot therapy"}/>
                <meta property="og:type" content="article"/>

                <meta property="og:title" content={"Sexual Dysfunction - Oshot UK"}/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/conditions#secual-dysfunction"/>
                <meta property="og:description" content={"In this page you will find information about different medical conditions that could be improved/resolved with the Oshot therapy"}/>
                <meta property="og:type" content="article"/>

                <meta property="og:title" content={"Incontinence - Oshot UK"}/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/conditions#incontinence"/>
                <meta property="og:description" content={"In this page you will find information about different medical conditions that could be improved/resolved with the Oshot therapy"}/>
                <meta property="og:type" content="article"/>

                <meta property="og:title" content={"Lichen Sclerosus - Oshot UK"}/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/conditions#lichen-sclerosus"/>
                <meta property="og:description" content={"In this page you will find information about different medical conditions that could be improved/resolved with the Oshot therapy"}/>
                <meta property="og:type" content="article"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@DrSWclinics"/>
                <meta name="twitter:title" content={"Conditions - Oshot UK"}/>
                <meta name="twitter:description" content={"In this page you will find all the way in which you can contact us. Phone, email, contact form..."}/>
                {/*<meta name="twitter:image" content={article.path}/>*/}
            </Head>
            <h1 className="text-4xl">Conditions</h1>
            <section className="flex flex-col gap-12 justify-start sm:w-4/5 w-full">
                <Waypoint bottomOffset={"75%"} onEnter={() => onEnterWaypoint(1)}/>
                <Dysfunction selected={selected.dysfunction}/>
                <span className="w-full border-t-[1px] border-neutral-500 border-dashed"/>
                <Waypoint bottomOffset={"75%"} onEnter={() => onEnterWaypoint(2)}/>
                <Incontinence selected={selected.incontinence}/>
                <span className="w-full border-t-[1px] border-neutral-500 border-dashed"/>
                <Waypoint bottomOffset={"75%"} onEnter={() => onEnterWaypoint(3)}/>
                <Lichen selected={selected.lichen}/>
            </section>
        </main>
    );
};

export default Conditions;