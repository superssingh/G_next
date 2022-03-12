import React, { useState, useEffect } from "react";
import BlogContext from "./contexts/blogContext";
import { Navbar, Footer } from "./";

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
    <div className="containerBox flex flex-col min-w-screen min-h-screen">
      <BlogContext.Provider
        value={{
          blogs: blogs,
          categories: categories,
          setBlogs: handleBlogs,
          setCategories: handleCategory,
        }}
      >
        <Navbar />
        <div>{children}</div>
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
