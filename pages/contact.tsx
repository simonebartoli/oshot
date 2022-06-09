import React from 'react';
import {BsTelephoneInbound} from "react-icons/bs";
import {MdOutlineAlternateEmail} from "react-icons/md";
import ContactForm from "../components/contact/contact_form";
import Head from "next/head";

const Contact = () => {
    return (
        <main id={"main"} className="flex flex-col gap-12 p-8 items-center pb-16">
            <Head>
                <title>Contact Us - Oshot UK</title>
                <meta name="description" content={"In this page you will find all the way in which you can contact us. Phone, email, contact form..."}/>
                <meta name="keywords" content="phone, email, contact, oshot, treatment, passion, orgasm"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content={"Contact Us - Oshot UK"}/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/contact"/>
                <meta property="og:description" content={"In this page you will find all the way in which you can contact us. Phone, email, contact form..."}/>
                <meta property="og:type" content="website"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@DrSWclinics"/>
                <meta name="twitter:title" content={"Contact Us - Oshot UK"}/>
                <meta name="twitter:description" content={"In this page you will find all the way in which you can contact us. Phone, email, contact form..."}/>
                {/*<meta name="twitter:image" content={article.path}/>*/}
            </Head>

            <h1 className="text-4xl">Contact Us</h1>
            <section className="flex flex-col gap-16 w-full">
                <article className="flex flex-col gap-10 items-center">
                    <p className="text-center">For any type of problem, complaint, information or appointment you can use the systems below to contact us</p>
                    <div className="flex flex-row justify-center lg:gap-16 gap-8 flex-wrap">
                        <div className="flex flex-row gap-4 items-center">
                            <BsTelephoneInbound className="text-xl"/>
                            <a className="text-xl hover-underline-animation hover:text-gold transition" href="tel:+4402074675340">+44-0207-467-5340</a>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <BsTelephoneInbound className="text-xl"/>
                            <a className="text-xl hover-underline-animation hover:text-gold transition" href="tel:+4402074675340">+44-0777-667-7769</a>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <MdOutlineAlternateEmail className="text-xl"/>
                            <a className="text-xl hover-underline-animation hover:text-gold transition" href={"mailto: info@drswclinics.com"}>info@drswclinics.com</a>
                        </div>
                    </div>
                </article>
                <span className={"border-t-[1px] border-neutral-500 border-dashed"}/>
                <section className="flex lg:flex-row flex-col lg:gap-24 gap-12">
                    <article className="flex flex-col gap-8 basis-1/3 grow">
                        <div className="flex flex-col items-center gap-4">
                            <span className="block">The Dr SW Clinic is located at: </span>
                            <a target="_blank" rel="noreferrer" className="text-lg text-center hover-underline-animation hover:text-gold transition" href="https://www.google.com/maps/place/Dr+SW+Plastic+Surgery+London/@51.519817,-0.147625,17z/data=!4m5!3m4!1s0x0:0x8943ef774b03be2a!8m2!3d51.519817!4d-0.147625?hl=en">“77 Harley Street, London W1G 9QD”</a>
                        </div>
                        <iframe
                            className="min-h-[400px] lg:min-h-fit h-full rounded-b-lg border-2 border-t-4 border-black border-t-gold shadow-xl"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6399998739244!2d-0.14981368445942772!3d51.5198203176163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad3e4ac69b5%3A0x8943ef774b03be2a!2sDr%20SW%20Plastic%20Surgery%20London!5e0!3m2!1sen!2suk!4v1653065049443!5m2!1sen!2suk"
                            allowFullScreen={true} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </article>
                    <article className="basis-1/3 grow">
                        <ContactForm/>
                    </article>
                </section>
            </section>
        </main>
    );
};

export default Contact;