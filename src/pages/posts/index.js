import React, { useState, useEffect, useContext } from "react";
import { getCategories, getPosts } from "../../services/getBlogData";
import moment from "moment";
import _ from "lodash";
import {
  TagName,
  BlogContext,
  PostCard,
  PostWidget,
  Categories,
} from "../../components";

const Home = ({ posts, categories }) => {
  const { blogs, setBlogs, setCategories } = useContext(BlogContext);
  useEffect(async () => {
    if (posts) {
      const recent = await _.orderBy(
        posts,
        (a) => moment(a.node.createdAt).format("YYYYMMDD"),
        "desc"
      );
      setBlogs(recent);
      setCategories(categories);
    }
  }, []);

  return (
    <div>
      <div className="grid relative w-full lg:grid-cols-12 gap-4 px-4">
        <div className="grid w-full place-self-start content-center md:w-full md:col-span-8 xl:grid-cols-2 2xl:grid-cols-3">
          {blogs.map((p) => (
            <PostCard post={p.node} key={p.node.id} />
          ))}
        </div>
        <div className="grid w-full md:col-span-8 lg:col-span-4 ">
          <div className=" place-content-center md:flex lg:grid lg:sticky lg:place-content-start">
            {blogs && <PostWidget recentPosts={blogs} />}
            <Categories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const categories = (await getCategories()) || [];
  return { props: { posts, categories }, revalidate: 36000 };
}
