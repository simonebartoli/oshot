import React from 'react';
import {NextPage} from "next";
import SubNav from "./subnav";

type Props = {
    element: string,
    sub?: string[]
}

const DesktopNavElements: NextPage<Props> = ({element, sub}) => {
    return (
        <>
            {   sub === undefined ?
                    <div>
                        <span className="uppercase py-6 hover:text-green-600 transition duration-300">{element}</span>
                    </div>
                :
                    <div className="relative flex flex-col group">
                        <span className="uppercase py-6 group-hover:text-green-600 transition duration-300">{element}</span>
                        <SubNav menu={sub}/>
                    </div>
            }
        </>
    );
};

export default DesktopNavElements;