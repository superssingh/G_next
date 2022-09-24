import React, { useState } from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../jsx/Navbar"), {
  ssr: false,
});

const Layout = ({ children, posts }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);

  const handleShop = (items) => {
    setShop(items);
  };

  return (
    <React.StrictMode>
      <div className="containerBox flex flex-col min-w-screen min-h-screen ">
        {/* <BlogContext.Provider
          value={{
            blogs: blogs,
            categories: categories,
            setBlogs: handleBlogs,
            setCategories: handleCategory,
          }}
        > */}
        <Navbar />
        <div>{children}</div>
        {/* </BlogContext.Provider> */}
      </div>
    </React.StrictMode>
  );
};

export default Layout;
