import React from 'react';
import Image from "next/image";
import DoctorImage from "../../public/media/photos/doctor.jpg"
import styles from "../../styles/home.module.css"

const Doctor = () => {
    return (
        <section className="flex flex-col items-center md:p-12 p-8 lg:pb-16 gap-16">
            <h2 className="leading-[3rem] text-center">What does the Oshot doctor do?</h2>
            <article className="flex lg:flex-row flex-col gap-12 items-center">
                <div className={styles.doctor}>
                    <Image src={DoctorImage} alt={"Doctor Photo"} placeholder={"blur"}/>
                </div>
                <div className="space-y-4 basis-1/2">
                    <p className="text-base leading-8">
                        First, the doctor or nurse will apply a numbing cream to the vagina and the arm. In the same way as a blood test, blood is drawn from the arm. We then use our special method and a centrifuge to isolate the platelet rich plasma, leaving a sample that is full of growth factors.
                    </p>
                    <p className="text-base leading-8">
                        A very thin needle is then used to inject the growth factors into a few specific, targeted places in the patient’s vagina. As these areas have already been numbed with anesthetic cream, little or no pain is felt. In some cases, the effect is immediate, but it can take up to 3-4 weeks.<br/>
                        Only physicians who have been trained and certified to perform the O-Shot ® can perform the procedure in our Harley Street Clinic.
                    </p>
                    <p className="text-base leading-8">
                        With results being so quick, women can enjoy the effects of the O-Shot ™ almost immediately, as the growth factors begin to rejuvenate the vagina and enhance the sexual response.
                    </p>
                </div>
            </article>
        </section>
    );
};

export default Doctor;