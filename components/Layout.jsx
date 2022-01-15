import React from "react";
import Head from "next/head";
import { Navbar } from "./";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Gogixer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container place mt-24 mb-8 px-6">{children}</div>
    </div>
  );
};

export default Layout;
