import React from 'react';
import IndexArticle from "../../components/press";
import Head from "next/head";
import {getArticles, getArticlesInt} from "../api/press";
import {NextPage} from "next";
import {ArticleListType} from "../../data/types";
import {DateTime} from "luxon";

type Props = {
    press: ArticleListType[]
}


const Index: NextPage<Props> = (props) => {
    return (
        <main id={"main"} className="flex flex-col items-center p-8 gap-12 mb-8">
            <Head>
                <title>Press - Oshot UK</title>
                <meta name="description" content="In this page you can find all the article and papers where Oshot UK (by Dr SW Clinic) has been mentioned."/>
                <meta name="keywords" content="press, articles, oshot, treatment, newspapers, information, review, paper, academic, pleasure, professional"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content="Press"/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/press"/>
                <meta property="og:description" content="In this page you can find all the article and papers where Oshot UK (by Dr SW Clinic) has been mentioned."/>
                <meta property="og:type" content="article"/>
            </Head>
            <h1 className="text-4xl">Press</h1>
            <section id={"press"} className="w-full flex flex-row items-start justify-start relative mt-8">
                <aside className="md:block hidden w-[20%] h-full absolute right-0">
                    <span className="border-l-black border-l absolute left-0 xls:left-[25%] h-full "></span>
                </aside>
                <div className="flex flex-col gap-24 lg:gap-36 w-full md:w-[80%]">
                    {
                        props.press.map(({title, brief, author, date, id, path, nation, reading}, index) =>
                        <IndexArticle key={index}
                                      id={id}
                                      title={title}
                                      author={author}
                                      brief={brief}
                                      date={date}
                                      path={path}
                                      nation={nation}
                                      reading={reading}
                        />
                    )}
                </div>
            </section>
        </main>
    );
};

export const getStaticProps = () => {
    const press: ArticleListType[] = getArticles()
    const pressInt: ArticleListType[] = getArticlesInt()

    const pressFinal = [
        ...press,
        ...pressInt
    ]

    pressFinal.sort((a, b) => {
        const dateA = DateTime.fromFormat(a.date, "MMMM, yyyy")
        const dateB = DateTime.fromFormat(b.date, "MMMM, yyyy")
        if(dateA>dateB) return -1
        else return 1
    })

    return {
        props: {
            press: pressFinal
        }, revalidate: 3600
    }
}

export default Index;