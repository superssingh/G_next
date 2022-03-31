import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import BlogContext from "../../components/contexts/blogContext";
import {
  getPosts,
  getPostDetail,
  getCategories,
  getPostsByCategory,
} from "../../services/getData";
import { HeadTag, PostDetail, PostWidget, Categories } from "../../components";
import moment from "moment";

const Blog = ({ post }) => {
  const { blogs, categories, setBlogs, setCategories } =
    useContext(BlogContext);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(async () => {
    if (blogs && categories) {
      const recent = await _.orderBy(
        blogs,
        (a) => moment(a.node.createdAt).format("YYYYMMDD"),
        "desc"
      );
      setBlogs(recent);
      setCategories(categories);
      console.log(blogs);
    }
    try {
      if (!blogs) {
        const posts = await getPosts();
        const categoryList = await getCategories();
        setBlogs(posts);
        setCategories(categoryList);
      }
    } catch (er) {
      console.log(er);
    }
  }, []);

  function revalidate() {
    fetch();
  }

  return (
    <div className="">
      <HeadTag post={post} />

      <div className="">
        <div className="grid relative w-full px-4 pb-4 lg:grid-cols-12 gap-x-6 gap-y-4 place-content-center ">
          <div className="grid max-w-3xl place-self-center content-center md:col-span-8">
            <PostDetail post={post} />
          </div>
          <div className="grid w-full md:col-span-8 lg:col-span-4">
            <div className="place-content-center md:flex lg:grid lg:sticky lg:place-content-start">
              {blogs && (
                <PostWidget
                  recentPosts={blogs}
                  category={post.categories[0].name}
                  id={post.id}
                />
              )}
              {categories && <Categories categories={categories} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const post = (await getPostDetail(params.slug)) || [];
  // const categories = (await getCategories()) || [];
  // const posts = (await getPosts()) || [];
  return {
    props: {
      post,
      // categories,
      // posts,
    },
    revalidate: 36000,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));

  return { paths, fallback: "blocking" };
}
