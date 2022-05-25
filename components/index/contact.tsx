import React from 'react';
import Link from "next/link";

const Contact = () => {
    return (
        <section className="flex flex-col gap-12 mg:p-12 p-8 py-16 items-center">
            <h2>Contact Us</h2>
            <div className="flex flex-col items-center gap-8">
                <p className="text-lg leading-8">
                    Are you interested and want to contact us? Please click the button below.
                </p>
                <Link href={"/contact"}>
                    <a className={"mt-4 hover:bg-green-500 transition w-3/4 text-center block px-8 py-4 shadow-lg text-lg border-2 border-black bg-green-600 text-white rounded-lg"}>
                        Contact Us
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default Contact;