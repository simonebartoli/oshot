import React from 'react';
import {NextPage} from "next";
import Link from "next/link";

type Props = {
    menu: string[]
    links: string[]
}

const SubNav: NextPage<Props> = ({menu, links}) => {
    return (
        <div className="group-hover:flex overflow-hidden origin-top group-hover:animate-marginDown hidden flex-col bg-gray-50 drop-shadow-lg border-l-4 border-l-green-400 top-16 absolute w-max h-fit">
            {menu.map((element, index) =>
                <Link key={index} href={links[index]}>
                    <a className="cursor-pointer capitalize py-2.5 pl-2 pr-8 hover:bg-gray-200">{element}</a>
                </Link>
            )}
        </div>
    );
};

export default SubNav;