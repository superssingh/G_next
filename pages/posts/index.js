import React, { useState, useEffect, useContext } from "react";
import { getCategories, getPosts } from "../../services/getData";
import BlogContext from "../../components/contexts/blogContext";
import moment from "moment";
import _ from "lodash";
import { PostCard, PostWidget, Categories } from "../../components";
import * as TagName from "../../components/constants";

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
      <div className="w-full md:grid lg:grid-cols-12 gap-4">
        <div className="grid w-full place-self-start content-center md:col-span-8">
          {blogs.map((p) => (
            <PostCard post={p.node} key={p.node.id} />
          ))}
        </div>
        <div className="grid w-full md:col-span-8 lg:col-span-4 ">
          <div className="grid w-full place-self-start  md:flex lg:grid lg:sticky lg:w-72 top-8 ">
            <PostWidget recentPosts={blogs} />
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
