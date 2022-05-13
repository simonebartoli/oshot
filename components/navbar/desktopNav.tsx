import React from 'react';
import SubNav from "./subnav";

const DesktopNav = () => {
    return (
        <div className="xls:flex hidden justify-between items-center gap-8 px-4 xl:text-base xls:text-sm">
            <div className="relative flex flex-col group">
                <span className="uppercase py-6 group-hover:text-green-600 transition duration-300">about</span>
                <SubNav menu={["about me", "testimonials"]}/>
            </div>
            <div className="relative flex flex-col group">
                <span className="uppercase py-6 group-hover:text-green-600 transition duration-300">conditions</span>
                <SubNav menu={["sexual dysfunction", "incontinence", "lichen-sclerosus"]}/>
            </div>
            <div>
                <span className="uppercase py-6 hover:text-green-600 transition duration-300">female orgasm system</span>
            </div>
            <div>
                <span className="uppercase py-6 hover:text-green-600 transition duration-300">videos</span>
            </div>
            <div>
                <span className="uppercase py-6 hover:text-green-600 transition duration-300">faqs</span>
            </div>
            <div>
                <span className="uppercase py-6 hover:text-green-600 transition duration-300">press</span>
            </div>
            <div>
                <span className="uppercase py-6 hover:text-green-600 transition duration-300">training</span>
            </div>
            <div>
                <span className="uppercase py-6 hover:text-green-600 transition duration-300">contact us</span>
            </div>
        </div>
    );
};

export default DesktopNav;