import React, { useState, useEffect, useContext } from "react";
import { getPosts, getCategories } from "../services/getData";
import { PostCard, PostWidget, Categories } from "../components";
import BlogContext from "../components/contexts/blogContext";
import * as TagName from "../components/constants";
import moment from "moment";
import _ from "lodash";

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
        <div className="grid w-full place-self-start content-center md:col-span-8  ">
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

// // ISR- Intcremental Statice  pages- best for blog and ecommerce.
// export async function getStaticProps({ params }) {
//   return {
//     props: {
//       posts: await getPost(params.id),
//     },
//     revalidate: 60,
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((p) => ({
//     params: { id: p.node.id },
//   }));

//   // We'll pre-render only these paths at build time.
//   // { fallback: blocking } will server-render pages
//   // on-demand if the path doesn't exist.
//   return { paths, fallback: "blocking" };
// }

export default Home;

// static build page generator
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const categories = (await getCategories()) || [];
  return { props: { posts, categories } };
}
