import type { NextPage } from 'next'
import Navbar from "../components/navbar/navbar";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
        <Head>
            <title>Oshot UK - Improve Vaginal Stimulation</title>
            <meta name="description" content="The O-Shot (or Orgasm Shot) is a new procedure developed to solve your sexual problems, increase your pleasure, and rejuvenate your vagina."/>
            <meta name="keywords" content="vagina, stimulation, orgasm, urine, female, passion, surgery, operation, professional, cheap"/>
            <meta name="robots" content="index, follow"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="English"/>
            <meta name="author" content="Sherif Wakil"/>
        </Head>
        <Navbar/>
        <main className="flex flex-col align-middle justify-center w-full min-h-2/3 text-4xl">
            <h2>This is the content</h2>
        </main>

    </div>
  )
}

export default Home
