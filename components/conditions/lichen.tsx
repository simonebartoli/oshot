import React from 'react';
import {NextPage} from "next";

type Props = {
    selected: boolean
}

const Lichen: NextPage<Props> = ({selected}) => {
    return (
        <article className="flex flex-col sm:gap-6 gap-10 relative">
            <span className="absolute -top-20" id={"lichen-sclerosus"}/> {/*ANCHOR LINK*/}
            <h2 className={`text-2xl transition sm:text-left text-center font-semibold ${selected ? "text-green-600" : "text-neutral-500"}`}>Lichen Sclerosus</h2>
            <div className={`flex md:flex-row flex-col md:gap-16 gap-6 justify-center items-center smx:border-2 ${selected ? "border-green-600" : "border-neutral-500"} sm:p-6 smx:p-10 p-0 smx:py-8 py-2 rounded-lg transition`}>
                <div className="space-y-6 basis-1/3 grow">
                    <h3 className="text-xl">What is it?</h3>
                    <div className="space-y-4">
                        <p className="leading-8">
                            Lichen sclerosus (LIE-kun skluh-ROW-sus) is an uncommon condition that creates patchy, white skin that’s thinner than normal. Lichen sclerosus may affect skin on any part of your body, but most often involves skin of the vulva, foreskin of the penis or skin around the anus.
                        </p>
                        <p className="leading-8">
                            Anyone can get lichen sclerosus, but postmenopausal women are at highest risk. Left untreated, lichen sclerosus may lead to other complications.
                        </p>
                    </div>
                </div>
                <div className="space-y-8 basis-1/3 grow">
                    <div className="space-y-6">
                        <h3 className="text-xl">Do you need treatment?</h3>
                        <p className="leading-8">
                            You may not need treatment because sometimes lichen sclerosus improves on its own. If you do need treatment, your doctor can suggest options to return a more normal appearance to your skin and decrease the tendency for scarring.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl">Oshot, what it does?</h3>
                        <p className="leading-8">
                            The O-Shot is an excellent treatment for this condition as platelet rich plasma from the patient’s own body is injected into the affected areas.
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Lichen;