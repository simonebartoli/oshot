import React from 'react';
import {NextPage} from "next";
import DesktopNavElements from "./elements/desktopNavElements";
type Props = {
    elements: string[]
    subElements: (string[] | undefined) []
    links: (string[] | string) []
}

const DesktopNav: NextPage<Props> = ({elements, subElements, links}) => {

    return (
        <div className="xls:flex hidden justify-between items-center gap-8 px-4 xl:text-base xls:text-sm">
            {
                elements.map((element, index) =>
                    <DesktopNavElements key={index} element={element} sub={subElements[index]} links={links[index]}/>
                )
            }
        </div>
    );
};

export default DesktopNav;