import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import {
  getPosts,
  getPostDetail,
  getCategories,
  getPostsByCategory,
} from "../../services/getBlogData";
import {
  BlogContext,
  HeadTag,
  PostDetail,
  PostWidget,
  Categories,
} from "../../components";
import moment from "moment";

const Blog = ({ post, categories, posts }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="showSlow">
      <HeadTag post={post} />

      <div className="">
        <div className="grid relative w-full px-4 pb-4 lg:grid-cols-12 gap-x-6 gap-y-4 place-content-center ">
          <div className="grid max-w-3xl place-self-center content-center md:col-span-8">
            <PostDetail post={post} />
          </div>
          <div className="grid w-full md:col-span-8 lg:col-span-4">
            <div className="place-content-center md:flex lg:grid lg:sticky lg:place-content-start">
              {posts && (
                <PostWidget
                  recentPosts={posts}
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
  const categories = (await getCategories()) || [];
  const posts = (await getPosts()) || [];
  return {
    props: {
      post,
      categories,
      posts,
    },
    revalidate: 60000,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));

  return { paths, fallback: "blocking" };
}
