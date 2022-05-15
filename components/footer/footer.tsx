import React from 'react';
import {NextPage} from "next";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {BsGeoAltFill, BsTelephoneInbound} from "react-icons/bs";

const Footer: NextPage<{heightRef: any}> = ({heightRef}) => {
    return (
        <footer ref={heightRef} className="flex justify-center p-4 w-full bg-stone-900 min-h-max text-stone-200">
            <div className="flex md:flex-row flex-col justify-evenly xls:w-11/12">
                <div className="flex flex-col p-4 justify-between basis-2/5 md:gap-0 gap-4">
                    <span className="text-2xl uppercase">oshot uk</span>
                    <div className="flex flex-col gap-4">
                        <div>
                            <span>More Info on: drswclinics.com</span>
                            <span> | </span>
                            <span className="hover:text-green-500 transition duration-200">Privacy</span>
                        </div>
                        <span>Treatment Provided By Dr SW Clinics | All Right Reserved &reg;</span>
                    </div>
                </div>
                <div className="flex flex-col p-4 gap-4 basis-3/5">
                    <span className="text-xl">Contact Us:</span>
                    <div className="flex md:flex-row flex-col md:items-center justify-between gap-12 md:gap-0">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-4 w-fit items-center cursor-pointer hover:text-green-500 transition duration-200">
                                <MdOutlineAlternateEmail/>
                                <span>email@domain.com</span>
                            </div>
                            <div className="flex flex-row gap-4 w-fit items-center cursor-pointer hover:text-green-500 transition duration-200">
                                <BsGeoAltFill/>
                                <span>77 Harley Street London W1G 8QN </span>
                            </div>
                            <div className="flex flex-row gap-4 w-fit items-center cursor-pointer hover:text-green-500 transition duration-200">
                                <BsTelephoneInbound/>
                                <span>020 3006 8459</span>
                            </div>
                        </div>
                        <div className="text-center basis-3/5">
                            <span className="capitalize font-semibold italic text-xl leading-8">“Love of beauty is taste.<br/> The creation of beauty is art”</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;