import React, {useEffect, useRef} from 'react';
import {NextPage} from "next";
import {useResizer} from "../contexts/resizer-context";

type Props = {
    url: string
    allowFullScreen?: boolean
    className?: string
    resize?: boolean
    title?: string
}

const Iframe: NextPage<Props> = ({className, url, allowFullScreen= true, resize = true, title= "Youtube Video"}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const {widthPage} = useResizer()

    useEffect(() => {
        if(resize && iframeRef.current !== null){
            const width = iframeRef.current.clientWidth
            const ratio = 16/9

            iframeRef.current.style.height = `${width/ratio}px`
        }
    }, [resize, widthPage])

    return (
        <iframe src={url} ref={iframeRef}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={allowFullScreen}
                className={className}
                title={title}
        />
    );
};

export default Iframe;