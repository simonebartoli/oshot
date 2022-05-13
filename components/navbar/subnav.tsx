import React from 'react';
import {NextPage} from "next";

type Props = {
    menu: string[]
}

const SubNav: NextPage<Props> = ({menu}) => {
    return (
        <div className="group-hover:flex overflow-hidden origin-top group-hover:animate-slideDown hidden flex-col bg-gray-50 drop-shadow-lg border-l-4 border-l-green-400 top-16 absolute w-max h-fit">
            {menu.map((element, index) =>
                <span key={index} className="cursor-pointer capitalize py-2.5 pl-2 pr-8 hover:bg-gray-200">{element}</span>
            )}
        </div>
    );
};

export default SubNav;