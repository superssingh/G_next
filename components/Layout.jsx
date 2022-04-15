import React, { ReactDOM, useState, useEffect } from "react";
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
    <React.StrictMode>
      <div className="containerBox flex flex-col min-w-screen min-h-screen ">
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
    </React.StrictMode>
  );
};

export default Layout;
