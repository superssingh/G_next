import React, { useEffect, useContext, useState } from "react";
import { getPosts } from "../../services/getBlogData";
import moment from "moment";
import _ from "lodash";
import {
  BlogContext,
  PostCard,
  PostWidget,
  Categories,
} from "../../components";

const Home = ({ posts }) => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(async () => {
    if (posts) {
      const recent = await _.orderBy(
        posts,
        (a) => moment(a.node.createdAt).format("YYYYMMDD"),
        "desc"
      );
      setRecentPosts(recent);
    }
  }, [posts]);

  return (
    <div>
      <div className="grid relative w-full lg:grid-cols-12 gap-4 px-2">
        <div className="grid w-full place-self-start content-center md:w-full md:col-span-8 xl:grid-cols-2 2xl:grid-cols-3">
          {posts.map((p) => (
            <PostCard post={p.node} key={p.node.id} />
          ))}
        </div>
        {posts && (
          <div className="grid w-full md:col-span-8 lg:col-span-4 ">
            <div className=" place-content-center md:flex lg:grid lg:sticky lg:place-content-start">
              <PostWidget posts={recentPosts} />
              {/* <Categories categories={TagName.categories} /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  // const categories = (await getCategories()) || [];
  return { props: { posts }, revalidate: 36000 };
}
