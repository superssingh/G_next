import React, { useState, useEffect } from "react";
import BlogContext from "./contexts/blogContext";
import { Navbar } from "./";

const Layout = ({ children, posts }) => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleBlogs = (blogs) => {
    setBlogs(blogs);
  };

  const handleCategory = (categories) => {
    setCategories(categories);
  };

  return (
    <div className="container">
      <BlogContext.Provider
        value={{
          blogs: blogs,
          categories: categories,
          setBlogs: handleBlogs,
          setCategories: handleCategory,
        }}
      >
        <Navbar />
        <div className="container place mt-24 mb-8 px-6">{children}</div>
      </BlogContext.Provider>
    </div>
  );
};

export default Layout;

// static build page generator
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return { props: { posts } };
}
