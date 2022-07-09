import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getCategories, getPosts } from "../../services/getBlogData";
import moment from "moment";
import _ from "lodash";
import {
  BlogContext,
  PostCard,
  PostWidget,
  Categories,
} from "../../components";

const Category = () => {
  const { blogs, categories, setBlogs, setCategories } =
    useContext(BlogContext);
  const [postsByCategory, setPostsByCategory] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(async () => {
    if (blogs) {
      const byCategory = await blogs.filter((b) => {
        return b.node.categories[0].name.includes(id);
      });
      if (byCategory.length > 1) {
        const recent = await _.orderBy(
          byCategory,
          (a) => moment(a.node.createdAt).format("YYYYMMDD"),
          "desc"
        );
        setPostsByCategory(recent);
      } else {
        setPostsByCategory(byCategory);
      }
      console.log(postsByCategory);
    } else {
      console.log("Not data found. Return to home page");
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>{id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="grid relative w-full lg:grid-cols-12 gap-4 px-4">
        <div className="grid w-full place-self-start content-center md:w-full md:col-span-8 xl:grid-cols-2 2xl:grid-cols-3">
          <div className="px-2 ">Category: {id}</div>
          {postsByCategory.map((p) => (
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

export default Category;
