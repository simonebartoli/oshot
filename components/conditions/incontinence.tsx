import React from 'react';
import {NextPage} from "next";

type Props = {
    selected: boolean
}

const Incontinence: NextPage<Props> = ({selected}) => {
    return (
        <article className="flex flex-col sm:gap-6 gap-10 relative">
            <span className="absolute -top-20" id={"incontinence"}/> {/*ANCHOR LINK*/}
            <h2 className={`text-2xl transition font-semibold ${selected ? "text-gold" : "text-neutral-500"} sm:text-left text-center`}>Incontinence</h2>
            <div className={`flex md:flex-row flex-col md:gap-16 gap-6 justify-center items-center smx:border-2 ${selected ? "border-gold" : "border-neutral-500"} sm:p-6 smx:p-10 p-0 smx:py-8 py-2 rounded-lg transition`}>
                <div className="space-y-6 basis-1/3 grow">
                    <h3 className="text-xl">What is it?</h3>
                    <div className="space-y-4">
                        <p className="leading-8">
                            Stress incontinence happens when physical movement or activity - such as coughing, sneezing, running or heavy lifting - puts pressure (stress) on your bladder. Stress incontinence is not related to psychological stress.
                        </p>
                        <p className="leading-8">
                            Stress incontinence differs from urge incontinence, which is the unintentional loss of urine caused by the bladder muscle contracting, usually associated with a sense of urgency. Stress incontinence is much more common in women than men.
                        </p>
                    </div>
                </div>
                <div className="space-y-8 basis-1/3 grow">
                    <div className="space-y-6">
                        <h3 className="text-xl">What could you feel?</h3>
                        <p className="leading-8">
                            If you have stress incontinence, you may feel embarrassed, isolate yourself, or limit your work and social life, especially exercise and leisure activities. With treatment, you’ll likely be able to manage stress incontinence and improve your overall well being.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl">Oshot Results</h3>
                        <p className="leading-8">
                            The O-Shot® procedure has an 85% success rate is treating Urinary Stress Incontinence!
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Incontinence;