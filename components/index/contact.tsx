import React from 'react';
import Link from "next/link";

const Contact = () => {
    return (
        <section className="flex flex-col gap-12 mg:p-12 p-8 py-16 items-center bg-neutral-100 w-full">
            <h2>Contact Us</h2>
            <div className="flex flex-col items-center gap-8 text-center">
                <p className="text-lg leading-8">
                    Are you interested and want to contact us? Please click the button below.
                </p>
                <Link href={"/contact"}>
                    <a href={"/contact"} className={"mt-4 hover:bg-gold transition w-3/4 text-center block px-8 py-4 shadow-lg text-lg bg-purple text-white rounded-lg"}>
                        Contact Us
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default Contact;