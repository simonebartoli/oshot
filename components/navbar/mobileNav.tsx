import React from 'react';
import {AiOutlineBars} from "react-icons/ai";
import {NextPage} from "next";
import MobileNavElements from "./elements/mobileNavElements";

type Props = {
    height: number
}
// RSC
const MobileNav: NextPage<Props> = ({height}) => {
    const navHeight = "top-[" + height + "px]"
    const elements = ["about", "conditions", "female orgasm system", "videos", "faqs", "press", "training", "contact us"]
    const subElements = [
        ["about me", "testimonials"],
        ["sexual dysfunction", "incontinence", "lichen-sclerosus"],
        undefined, undefined, undefined, undefined, undefined, undefined
    ]

    return (
        <div className="xls:hidden flex flex-col">
            <AiOutlineBars className="text-2xl hover:text-green-600 transition duration-300"/>
            <div className={`
                absolute left-0 ${height !== 0 && navHeight} flex flex-col justify-center 
                items-center w-full drop-shadow-md bg-gray-100
            `}>
                {elements.map((element, index) =>
                    <MobileNavElements key={index} element={element} sub={subElements[index]}/>
                )}
            </div>
        </div>
    );
};
export default MobileNav;