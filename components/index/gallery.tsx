import React from 'react';
import Link from "next/link";

const Gallery = () => {
    return (
        <section className="flex flex-col items-center justify-center p-8 py-16 bg-white gap-12">
            <h2 className="text-4xl">Our Results</h2>
            <p className="text-lg text-center leading-10">
                We have performed thousands of operations and during time we have collected tons of photos showing our results.<br/>
                Now you can view them in our gallery to actually understand what our treatment could really do to you.
            </p>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-14 w-full">
                <span className="font-semibold text-gold text-center">+15000 Satisfied clients</span>
                <span className="font-semibold text-gold text-center">+100 Photos</span>
            </div>
            <Link href={"/photos"}>
                <a href={"/photos"} className="sm:w-1/2 w-full text-lg p-4 text-white bg-purple rounded-lg shadow-lg text-center hover:bg-gold transition">Look Our Gallery</a>
            </Link>
        </section>
    );
};

export default Gallery;