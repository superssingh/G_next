import React from "react";
import Head from "next/head";
import { Navbar } from "./";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      <div className="container place mt-24 mb-8 px-6">{children}</div>
    </div>
  );
};

export default Layout;
