import React from 'react';
// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
// import { SessionContextProvider } from '@supabase/auth-helpers-react';
import '../styles/globals.css';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import Layout from './Layout';
import { Poppins } from '@next/font/google';
const customFont = Poppins({ weight: '400', subsets: 'latin-ext' });

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  // const [supabase] = useState(() => createBrowserSupabaseClient());
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
      {/* <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      > */}
      <Layout>
        <div className="flex min-h-screen w-full flex-col">
          <div className=" mb-10  flex-grow  ">
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </div>
        </div>
      </Layout>
      {/* </SessionContextProvider> */}
    </div>
  );
}

export default MyApp;
