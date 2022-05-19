import React from 'react';
import styles from '../styles/about.module.css'
import Image from "next/image";
import photo from "../public/media/photos/about-me.jpg"
import Head from "next/head";

const About = () => {
    return (
        <main id={"main"} className="flex flex-col items-center justify-center gap-14 p-8 pb-16">
            <Head>
                <title>About Dr. Sherif Wakil - Oshot UK</title>
                <meta name="description" content="Who is Dr. Sherif Wakil? Dr Sherif Wakil is the founder and medical director of DrSW Clinics and Royale Skin with more than two decades of experience "/>
                <meta name="keywords" content="Sherif, Wakil, dr, doctor, oshot, pshot, o-shot, p-shot, Vampire, Face, Lift, Royale, Academy, Aesthetic, Medicine, Charles, Runles, American, Cosmetic, Association"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="About Dr. Sherif Wakil"/>
                <meta property="og:site_name" content="Oshot UK - Improve Vaginal Stimulation"/>
                <meta property="og:url" content="oshot.uk/about"/>
                <meta property="og:description" content="Who is Dr. Sherif Wakil? Dr Sherif Wakil is the founder and medical director of DrSW Clinics and Royale Skin with more than two decades of experience."/>
                <meta property="og:type" content="books.author"/>
                <meta property="og:image" content="https://oshot.uk/wp-content/uploads/2015/02/compli-drswclinics-about.jpg"/>
            </Head>
            <h1 className="text-4xl">Dr. Sherif Wakil, MBBCh BA FICS</h1>
            <article className="flex sm:flex-row flex-col sm:gap-8 gap-12">
                <figure className="flex justify-center items-center basis-1/3">
                    <div className={styles.about}>
                        <Image
                               src={photo}
                               alt="Photo of Dr. Sherif Wakil"
                               layout={"intrinsic"}
                               quality={100}
                               placeholder={"blur"}
                               priority
                        />
                    </div>
                </figure>
                <section className="basis-2/3">
                    <p className="leading-8">
                        Dr Sherif Wakil is the founder and medical director of
                        <span className={styles.span}> DrSW Clinics </span> and
                        <span className={styles.span}> Royale Skin</span>. He has more than
                        <span className={styles.span}> two decades of experience</span> and has worked in a number of
                        leading hospitals in the UK and Middle East,
                        including The Royal London Hospital NHS Trust and is now based on London’s Harley Street.
                    </p><br/>
                    <p className="leading-8">
                        Dr Wakil, a cosmetic doctor who introduced a number of new techniques to the UK including the
                        <span className={styles.span}> P-Shot and O-Shot</span>,
                        <span className={styles.span}> Vampire Face-Lift</span>,
                        <span className={styles.span}> Vampire Brest lift </span>
                        as well as being
                        <span className={styles.span}> the only doctor in Europe to offer these treatments</span>,
                        he is also the only trainer for these treatments in Europe after spending significant amount of time with the inventor
                        Dr Charles Runles in the USA receiving intensive training and injecting many patients at Dr Runles clinic.
                        He was also
                        <span className={styles.span}> the first to introduce Non-Surgical Blepharoplasty, Needle Shaping </span>
                        and He is an ambassador
                        for the concept of “soft-surgery” and is a master trainer for this approach in the UK.
                        He is also
                        <span className={styles.span}> the founder of the Royale Academy Of Aesthetic Medicine</span>,
                        which trains other doctors in a broad brand
                        of non-surgical techniques.
                    </p><br/>
                    <p className="leading-8">
                        Dr Wakil has
                        <span className={styles.span}> performed more than 17,000 procedures </span>
                        and has trained many other doctors in techniques such
                        as thread lifting and PRP.
                    </p><br/>
                    <p className="leading-8">
                        Dr Wakil has lectured at conferences and meetings around the world and is a fellow of the International College
                        of Surgeons as well as
                        <span className={styles.span}> an active member of </span>
                        several professional bodies including the
                        <span className={styles.span}> General Medical Council, American Cosmetic Cellular Medicine Association, British College of Aesthetic Medicine</span>.
                    </p>
                </section>
            </article>
        </main>
    );
};

export default About;