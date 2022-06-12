import React, {useRef} from 'react';
import Image from "next/image";
import DoctorImage from "../../public/media/photos/index/doctor.jpg"
import {BsCalendarWeek} from "react-icons/bs";
import {RiCalendarTodoFill, RiNumber1} from "react-icons/ri";
import {AiOutlineTrophy} from "react-icons/ai";
import {FaRegHospital} from "react-icons/fa";
import Link from "next/link";

const WhoAreWe = () => {
    const imageRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)


    return (
        <section className="w-full flex flex-col p-8 py-16 items-center justify-center bg-gold text-white gap-20">
            <div className="space-y-10">
                <h2 className="text-4xl text-center">Who are we?</h2>
                <p className="md:text-2xl text-xl text-center leading-10">
                    Dr Sherif Wakil is the founder and medical director of Dr SW Clinics and Royale Skin. <br/>
                    He is the only doctor certified to do this treatment as well as being the only trainer for these treatments in Europe.
                </p>
            </div>
            <div className="flex lg:flex-row flex-col items-center lg:justify-evenly gap-16 w-full">
                <div className="flex flex-col items-center justify-center basis-1/4 smxl:w-3/4 md:w-1/2">
                    <div ref={imageRef} className="bg-white p-6 rounded-lg shadow-lg">
                        <Image src={DoctorImage} placeholder={"blur"} alt="Dr Sherif Wakil Image"/>
                    </div>
                </div>
                <div ref={sectionRef} className="flex flex-col items-start justify-between gap-16 p-6 rounded-lg basis-1/2">
                    <div className="flex flex-row items-center justify-center gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] p-8 bg-purple rounded-full z-0"/>
                            <RiCalendarTodoFill className="relative z-10 text-white"/>
                        </div>
                        <span className="sm:text-2xl text-xl text-white">More than 17000 Operations</span>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] p-8 bg-purple rounded-full z-0"/>
                            <BsCalendarWeek className="relative z-10 text-white"/>
                        </div>
                        <span className="sm:text-2xl text-xl text-white">2 Decades of Experience</span>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] p-8 bg-purple rounded-full z-0"/>
                            <RiNumber1 className="relative z-10 text-white"/>
                        </div>
                        <span className="sm:text-2xl text-xl text-white">Only doctor in Europe to offer these treatments</span>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] p-8 bg-purple rounded-full z-0"/>
                            <FaRegHospital className="relative z-10 text-white"/>
                        </div>
                        <span className="sm:text-2xl text-xl text-white">Founder of the Royale Academy Of Aesthetic Medicine</span>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-10">
                        <div className="relative">
                            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-black shadow-md border-[1px] p-8 bg-purple rounded-full z-0"/>
                            <AiOutlineTrophy className="relative z-10 text-white"/>
                        </div>
                        <span className="sm:text-2xl text-xl text-white">Award Winner for Several Years</span>
                    </div>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center w-full lg:w-3/4 xls:w-1/2 gap-8">
                <Link href="/about">
                    <a href={"/about"} className="bg-purple hover:bg-white hover:text-black transition text-lg p-4 sm:basis-1/3 sm:grow w-full grow text-center shadow-lg rounded-lg">Read More About Me</a>
                </Link>
                <Link href={"/awards"}>
                    <a href={"/awards"} className="bg-white hover:bg-purple hover:text-white transition text-black text-lg p-4 sm:basis-1/3 sm:grow w-full grow text-center shadow-lg rounded-lg">Look My Awards</a>
                </Link>
            </div>
        </section>
    );
};

export default WhoAreWe;