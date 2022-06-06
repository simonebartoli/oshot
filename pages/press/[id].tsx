import React from 'react';
import styles from "../../styles/press.articles.module.css"
import Image from "next/image";

import {useRouter} from "next/router";
import Custom404 from "../404";
import Loader from "../../components/loader";
import getArticle from "../api/press/article";
import getArticles from "../api/press";
import {ArticleDataType, ArticleListType} from "../../data/types";
import {NextPage} from "next";
import Head from "next/head";

type Props = {
    articleData: ArticleDataType[]
    article: ArticleListType
}


const PressArticle: NextPage<Props> = ({articleData, article}) => {
    const router = useRouter()
    if (router.isFallback) {return <Loader/>}
    if(article == null) return <Custom404/>

    return (
        <main id={"main"} className="flex flex-col p-8">
            <Head>
                <title>{article.title} - Oshot UK</title>
                <meta name="description" content={`In this page you will find information about "${article.title}".`}/>
                <meta name="keywords" content="press, articles, oshot, treatment, newspapers, information, review, paper, academic, pleasure, professional"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Sherif Wakil"/>

                <meta property="og:title" content={`Press - ${article.title}`}/>
                <meta property="og:site_name" content="Oshot UK"/>
                <meta property="og:url" content="oshot.uk/press"/>
                <meta property="og:description" content={`In this page you will find information about "${article.title}".`}/>
                <meta property="og:type" content="article"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@DrSWclinics"/>
                <meta name="twitter:title" content={`${article.title} - Oshot UK`}/>
                <meta name="twitter:description" content={`In this page you will find information about ${article.title}`}/>
                {/*<meta name="twitter:image" content={article.path}/>*/}
            </Head>
            <section className="flex md:flex-row flex-col justify-evenly items-start md:gap-14 gap-6">
                <article className={"order-2 md:order-1 basis-2/3 sm:p-4 py-4"}>
                    {
                        articleData.map((element: any, index: number) => {
                            switch (element.type) {
                                case "header":
                                    return <h2 key={index} className="py-4 uppercase text-xl font-semibold">{element.message}</h2>
                                case "paragraph":
                                    return <p key={index} className="py-4 leading-8 text-justify">{element.message}</p>
                                case "citation":
                                    return(
                                        <div key={index} className="text-center py-8">
                                            <span className="italic text-lg capitalize text-gold">{element.message}</span>
                                        </div>
                                    )
                                case "reference":
                                    return (
                                        <div key={index} className="text-right py-4">
                                            <span className="text-sm">{element.message}</span>
                                        </div>
                                    )
                            }
                        })
                    }
                </article>
                <aside className="order-1 md:order-2 md:sticky md:top-[10%] flex flex-col basis-1/3 gap-8 py-4 border-2 border-black border-t-4 rounded-b-lg border-t-gold items-center bg-neutral-50">
                    <h1 className={"text-2xl text-center"}>{article.title}</h1>
                    <div className="flex flex-col lg:flex-row md:flex-col smx:flex-row md:justify-between justify-evenly  w-4/5 gap-8 items-center">
                        <div className={styles.article}>
                            <Image src={article.path} alt={`Image - ${article.title}`} className={styles.image} layout={"fill"}/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span>Author: {article.author}</span>
                            <span>Date Published: {article.date}</span>
                        </div>
                    </div>
                    <p className="w-4/5">{article.brief}</p>
                </aside>
            </section>
        </main>
    );
};

export const getStaticProps = (context: any) => {
    const id = context.params.id
    const articles: ArticleListType[] = getArticles()

    const articleData: ArticleDataType[] = getArticle(id)
    let article: ArticleListType | undefined | null = articles.find((element) => element.id == id)
    article = article === undefined ? null : article

    return {
        props: {
            article: article,
            articleData: articleData
        },
        revalidate: 600
    }

}

export const getStaticPaths = () => {
    return {
        paths: [
            {
                params: {id: "1"}
            }
        ],
        fallback: true
    }
}


export default PressArticle;