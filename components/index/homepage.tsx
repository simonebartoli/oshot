import React from 'react';

const Homepage = () => {
    return (
        <section className="relative w-full full-page home-container flex flex-col gap-32 items-center justify-center">
            <div className="absolute  top-0 left-0 bg-cover bg-center bg-no-repeat bg-fixed w-full h-full flex blur-[1px]" style={{backgroundImage: "url('/media/photos/home.jpg')"}}/>
            <div className="z-10 flex flex-col items-center gap-12 p-8">
                <h1 className="stroke-text sm:text-8xl text-6xl font-homeTitle font-bold text-center leading-[5rem]">THE O-SHOT</h1>
                <span className="block leading-8 stroke-text block sm:text-3xl lg:text-4xl text-2xl text-center font-homeTitle">With Blue Pills, Penis Implants, and Hundreds of Supplements to Help Men…</span>
            </div>
            <span className="block leading-[3rem] z-10 p-4 stroke-text block sm:text-4xl lg:text-5xl text-3xl text-center font-bold italic font-homeTitle">“Isn’t it About Time the Girls Have Their Turn?” ™</span>
        </section>
    );
};

export default Homepage;