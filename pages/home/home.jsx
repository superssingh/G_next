import React, { useState, useEffect } from "react";
import moment from "moment";
import _ from "lodash";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostCard, PostWidget, Categories } from "../../components";

const Home = ({ posts }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    if (posts) {
      const recent = await _.orderBy(
        posts.edges,
        (a) => moment(a.node.createdAt).format("YYYYMMDD"),
        "desc"
      );
      setRecentPosts(recent);
    }
  }, [posts]);

  return (
    <div>
      <ToastContainer />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 col-span-1 ">
          {recentPosts.map((p) => (
            <PostCard post={p.node} key={p.node.id} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget recentposts={recentPosts} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
