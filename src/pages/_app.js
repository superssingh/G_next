import "../styles/globals.css"
import Head from "next/head"
import Layout from "./Layout"
import { Footer } from "../components/"
import { Poppins, Lato } from "@next/font/google"

const customFont = Poppins({ weight: "400", subsets: "latin-ext" })
function MyApp({ Component, pageProps }) {
  return (
    <div className={customFont.className}>
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Gogixer</title>
          <meta
            name="description"
            content="An online learning platform for web developers and entrepreneurs."
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/images/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <div className="w-full flex flex-col min-h-screen">
          <div className=" flex-grow  mb-10  ">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </Layout>
    </div>
  )
}

export default MyApp
