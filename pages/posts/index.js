import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  if (error) return <p>{"Error: " + error}</p>;

  return (
    <div>
      <ToastContainer />
      <div className="posts"></div>
    </div>
  );
};

export default Posts;
