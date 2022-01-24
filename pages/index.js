import React, { useState, useEffect } from "react";
import { getPosts } from "../services/getPosts";
import moment from "moment";
import _ from "lodash";
import { PostCard, PostWidget, Categories } from "../components";
const Home = ({ posts }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const categories = [
    { name: "Programming", image: "", id: "1" },
    { name: "Productivity", image: "", id: "2" },
    { name: "Technology", image: "", id: "3" },
    { name: "Top / Best", image: "", id: "4" },
  ];

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
      <div className=" grid-cols-1 md:grid content-center lg:grid-cols-12 gap-4">
        <div className="grid place-self-center justify-items-center place-items-center content-center md:col-span-8 col-span-8 ">
          {recentPosts.map((p) => (
            <PostCard post={p.node} key={p.node.id} />
          ))}
        </div>
        <div className="w-84 place-items-center place-content-center w-full md:col-span-4 ">
          <div className="flex w-84 md:flex place-self-center lg:grid lg:sticky relative top-8">
            <div className="w-full mx-1 md:w-72 ">
              <PostWidget recentposts={recentPosts} />
            </div>
            <div className="w-fit mx-1 md:w-72">
              <Categories categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return { props: { posts } };
}
