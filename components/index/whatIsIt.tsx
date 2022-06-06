import React from 'react';

const WhatIsIt = () => {
    return (
        <section className="flex flex-col px-8 py-16 items-center bg-gold gap-24 w-full text-neutral-50">
            <div className="space-y-10  md:w-3/4 sm:w-4/5 w-full text-lg tracking-wide">
                <h2 className="text-center leading-[3rem] text-4xl">What is the O Concept and the Oshot?</h2>
                <div className="space-y-8 pl-8 border-l-4 border-purple">
                    <p className="leading-10">
                        The O-Shot ® (or Orgasm Shot ®) is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina. It is a nonsurgical technique that uses the growth factors each woman has in her own body to stimulate vaginal and clitoral rejuvenation to activate the Female Orgasm System. Thus far, almost all women receiving O-Shot ® procedure enjoy an increased sexual response, and for many the improvement is dramatic. The O-Shot ® is also effective in improving and treating conditions such as urinary incontinence.
                    </p>
                    <p className="leading-10">
                        Our studies show that when platelet-rich plasma (PRP) is injected, stem cells multiply and grow new younger tissue. The O-Shot ® procedure works by using PRP to stimulate stem cells to grow healthier vaginal tissue. The whole procedure for processing the blood and injecting the growth factors takes less than 45 minutes- you could even fit an appointment at our Harley Street Clinic into your lunch break!
                    </p>
                </div>
            </div>
            <iframe src="https://www.youtube.com/embed/OXjuNLuoLXM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full sm:w-4/5 md:w-3/5 aspect-video rounded-lg outline-double outline-4 outline-white outline-offset-2 shadow-lg"
            />
            <div className="flex flex-col gap-8 w-full sm:w-2/3 mdx:w-1/2 xls:w-2/5 leading-10 text-center">
                <p className="text-xl">Are you interested and want to contact us? <br/>Please click the button below.</p>
                <a href="" className="hover:bg-white hover:text-black transition p-4 text-center text-2xl bg-purple shadow-md rounded-lg">Contact Us</a>
            </div>
        </section>
    );
};

export default WhatIsIt;