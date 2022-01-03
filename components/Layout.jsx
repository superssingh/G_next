import React from "react";
import Head from "next/head";
import { Navbar } from "./";

const Layout = ({ children }) => {
  return (
    <div className="base-container">
      <Head>
        <title>Gogixer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-10 mb-8"> {children} </div>
    </div>
  );
};

export default Layout;
