import React from 'react';
import {NextPage} from "next";

type Props = {
    title: string,
    author: string,
    message: string
}

const Article: NextPage<Props> = ({title, author, message}) => {
    return (
        <article className="flex grow shadow-xl flex-col basis-1/3 gap-4 p-6 border-2 border-black rounded-b-lg border-t-4 border-t-green-500 bg-neutral-100">
            <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <span className="italic text-sm">{author}</span>
            </div>
            <p className="leading-8">
                {message}
            </p>
        </article>
    );
};

export default Article;