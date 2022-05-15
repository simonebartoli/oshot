import React from 'react';
import {NextPage} from "next";
import SubNav from "./subnav";
import Link from "next/link";

type Props = {
    element: string,
    links: string[] | string,
    sub?: string[]
}

const DesktopNavElements: NextPage<Props> = ({element, links, sub}) => {
    return (
        <>
            {   sub === undefined ?
                    <div>
                        <Link href={links as string}>
                            <a className="uppercase cursor-pointer py-6 hover:text-green-600 transition duration-300">{element}</a>
                        </Link>
                    </div>
                :
                    <div className="relative flex flex-col group">
                        <span className="uppercase py-6 group-hover:text-green-600 transition duration-300">{element}</span>
                        <SubNav menu={sub} links={links as string[]}/>
                    </div>
            }
        </>
    );
};

export default DesktopNavElements;