import React from 'react';
import {NextPage} from "next";
import {AiOutlineCaretDown} from "react-icons/ai";

type Props = {
    element: string,
    sub?: string[],

    toggle?: any,
    setToggle?: any,
    index?: number
}

const MobileNavElements: NextPage<Props> = ({element, sub, toggle, setToggle, index}) => {
    const switchToggle = () => {
        const rem = 16 //rem in px
        const heightAnimation = sub?.length! * (2*rem + 1.5*rem) // line height + padding
        document.documentElement.style.setProperty("--maxHeight", `${heightAnimation}px`)
        if(toggle[index!] === null) {
            const copy = [...toggle]
            copy[index!] = true
            setToggle(copy)
        }
        else {
            const copy = [...toggle]
            copy[index!] = !toggle[index!]
            setToggle(copy)
        }
    }

    return (
        <>
            {sub === undefined ?
                <div className="py-4 w-full text-center hover:bg-gray-300 hover:text-green-600 hover:font-semibold transition duration-300">
                    <span className="uppercase cursor-pointer">{element}</span>
                </div>

                :
                <div className="flex flex-col w-full text-center">
                    <div className="flex flex-row items-center justify-center gap-2 w-full" onClick={switchToggle}>
                        <div className="py-4"><span className="uppercase">{element}</span></div>
                        <AiOutlineCaretDown className={`${toggle[index!] === true ? "animate-rotate": toggle[index!] === false && "animate-rotateOpposite"}`}/>
                    </div>
                    <div className={`${toggle[index!] === true ? "animate-slideInDown" : toggle[index!] === false ? "animate-slideOutUp": "hidden"} overflow-hidden flex-col bg-gray-200`}>
                        {sub.map((subElement, indexJ) =>
                            <div key={indexJ} className="py-4 hover:bg-gray-300 hover:text-green-600 hover:font-semibold transition duration-300">
                                <span className="uppercase cursor-pointer">{subElement}</span>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export default MobileNavElements;