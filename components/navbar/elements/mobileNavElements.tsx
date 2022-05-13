import React from 'react';
import {NextPage} from "next";
import {AiOutlineCaretDown} from "react-icons/ai";

type Props = {
    element: string,
    sub?: string[]
}

const MobileNavElements: NextPage<Props> = ({element, sub}) => {
    return (
        <>
            {sub === undefined ?
                <div className="py-4 w-full text-center hover:bg-gray-300 hover:text-green-600 hover:font-semibold transition duration-300">
                    <span className="uppercase">{element}</span>
                </div>

                :
                <div className="flex flex-col w-full text-center">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <div className="py-4"><span className="uppercase">{element}</span></div>
                        <AiOutlineCaretDown/>
                    </div>
                    <div className="flex flex-col bg-gray-200">
                        {sub.map((subElement, indexJ) =>
                            <div key={indexJ} className="py-4 hover:bg-gray-300 hover:text-green-600 hover:font-semibold transition duration-300">
                                <span className="uppercase">{subElement}</span>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export default MobileNavElements;