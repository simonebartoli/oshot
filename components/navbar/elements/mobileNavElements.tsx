import React from 'react';
import {NextPage} from "next";
import {AiOutlineCaretDown} from "react-icons/ai";
import Link from "next/link";

type Props = {
    element: string,
    links: string | string[]
    sub?: string[],

    toggle?: any,
    setToggle?: any,
    setNavToggle: any
    index?: number
}

const MobileNavElements: NextPage<Props> = ({element, links, sub, toggle, setToggle, setNavToggle, index}) => {
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

    const switchNavToggle = () => {
        setNavToggle(false)
    }

    return (
        <>
            {sub === undefined ?
                <div className="w-full text-center hover:bg-gray-300 hover:text-green-600 hover:font-semibold transition duration-300">
                    <Link href={links as string}>
                        <a className="inline-block py-4 w-full uppercase cursor-pointer"
                           onClick={switchNavToggle}>{element}</a>
                    </Link>
                </div>

                :
                <div className="flex flex-col w-full text-center">
                    <div className="flex flex-row items-center justify-center gap-2 w-full" onClick={switchToggle}>
                        <div className="py-4"><span className="uppercase">{element}</span></div>
                        <AiOutlineCaretDown className={`${toggle[index!] === true ? "animate-rotate": toggle[index!] === false && "animate-rotateOpposite"}`}/>
                    </div>
                    <div id={`${element}-nav`} className={`${toggle[index!] === true ? "animate-slideInDown" : toggle[index!] === false ? "animate-slideOutUp": "hidden"} overflow-hidden flex-col bg-gray-200`}>
                        {sub.map((subElement, indexJ) =>
                            <div key={indexJ} className="hover:bg-gray-300 hover:text-green-600 hover:font-semibold transition duration-300">
                                <Link href={links[indexJ]}>
                                    <a className="inline-block w-full py-4 uppercase cursor-pointer"
                                       onClick={switchNavToggle}>{subElement}</a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export default MobileNavElements;