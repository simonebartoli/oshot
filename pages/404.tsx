import React from 'react';
import Link from "next/link";


const Custom404 = () => {
    return (
        <main id={"main"} className="p-8 text-center flex flex-col justify-center items-center gap-8">
            <h1 className="text-6xl text-red-700">404</h1>
            <span className="text-xl">
                We are sorry, but the page you&apos;re looking for
                does not exist.
            </span>
            <Link href="/">
                <a className="xls:w-1/4 p-4 border-2 border-black rounded-lg w-1/2 hover:bg-stone-300 drop-shadow-xl transition duration-200">Home</a>
            </Link>
        </main>
    );
};

export default Custom404;