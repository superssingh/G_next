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
      <div className="grid align-middle grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 col-span-3 ">
          {recentPosts.map((p) => (
            <PostCard post={p.node} key={p.node.id} />
          ))}
        </div>
        <div className="h-auto w-fit md:col-span-4 col-span-1">
          <div className="w-fit md:sticky relative top-8">
            <div className="mx-2">
              <PostWidget recentposts={recentPosts} />
            </div>
            <div className="mx-2">
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
