import React, {useEffect, useState} from 'react';
import {AiOutlineBars} from "react-icons/ai";
import {NextPage} from "next";
import MobileNavElements from "./elements/mobileNavElements";

type Props = {
    height: number
    elements: string[]
    subElements: (string[] | undefined)[]
}
// RSC
const MobileNav: NextPage<Props> = ({height, elements, subElements}) => {
    const [toggle, setToggle]: any = useState(null)
    const [entitiesToggle, setEntitiesToggle] = useState([null, null])
    let entitiesIndex = -1

    useEffect(() => {
        if(height>0){
            document.getElementById("nav-mobile")!.style.top = `${height}px`
        }
    }, [height])
    const switchToggle = () => {
        const rem = 16 //rem in px
        const heightAnimation = elements.length * (2*rem + 1.5*rem) // line height + padding
        document.documentElement.style.setProperty("--maxHeight", `${heightAnimation}px`)
        if(toggle === null) setToggle(true)
        else setToggle(!toggle)
        setEntitiesToggle([null, null])
    }

    return (
        <div className="xls:hidden flex flex-col">
            <AiOutlineBars className="text-2xl hover:text-green-600 transition duration-300" onClick={switchToggle}/>
            <div id={"nav-mobile"} className={`
            absolute left-0 flex-col justify-center overflow-hidden 
            items-center w-full drop-shadow-md bg-gray-100 ${toggle === true ? "flex animate-slideInDown": toggle === false ? "animate-slideOutUp" : "hidden"}`}>
                {elements.map((element, index) => {
                    entitiesIndex += 1
                    return(
                        <MobileNavElements
                            key={index} element={element} sub={subElements[index]}
                            toggle={subElements[index] !== undefined ? entitiesToggle : undefined}
                            setToggle={subElements[index] !== undefined ? setEntitiesToggle : undefined}
                            index={subElements[index] !== undefined ? entitiesIndex : undefined}
                        />
                    )
                })}
            </div>
        </div>
    );
};
export default MobileNav;