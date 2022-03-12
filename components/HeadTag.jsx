import React from "react";
import Head from "next/head";

const HeadTag = ({ post }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{post.title}</title>
      <meta name="description" content={post.description} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/gogixer.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#111111"></meta>
    </Head>
  );
};

export default HeadTag;
