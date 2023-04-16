import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ClerkProvider } from '@clerk/nextjs'
import Layout from './layout'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const customFont = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={customFont.className}>
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
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
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
        <link
          rel="manifest"
          href="/images/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="/images/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta
          name="msapplication-TileColor"
          content="#da532c"
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
      </Head>

      <ClerkProvider {...pageProps}>
        <Layout>
          <div className="flex min-h-screen w-full flex-col">
            <div className=" mb-10  flex-grow  ">
              <Component {...pageProps} />;
            </div>
          </div>
        </Layout>
      </ClerkProvider>
    </div>
  )
}

export default MyApp
