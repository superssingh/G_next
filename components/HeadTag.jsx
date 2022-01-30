import React from "react";
import Head from "next/head";

const HeadTag = ({ post }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;
