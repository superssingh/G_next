import React, { useState } from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetail, getCategories } from "../../services/getData";
import { HeadTag, PostDetail, PostWidget, Categories } from "../../components";

const Blog = ({ post, categories, relatedPosts }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(relatedPosts);

  return (
    <div className="">
      <HeadTag post={post} />
      {/* <div className="relative w-full max-w-3xl "></div> */}

      <div className="">
        <div className="grid relative w-full pb-4 lg:grid-cols-12 gap-6 place-content-center ">
          <div className="grid w-full place-self-center content-center md:col-span-8">
            <PostDetail post={post} />
          </div>
          <div className="w-84 place-items-center place-content-center w-full md:col-span-4 ">
            <div className="grid w-84 md:flex place-self-center lg:grid lg:sticky relative top-8">
              <div className="w-full md:w-72 ">
                <PostWidget
                  recentposts={relatedPosts}
                  category={post.categories[0].name}
                  slug={post.slug}
                />
              </div>
              <div className="w-full md:w-72">
                <Categories categories={categories} />
              </div>
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
  // const relatedPosts = (await getPostsByCategory(params.category)) || [];
  const relatedPosts = [];
  return {
    props: {
      post,
      categories,
      relatedPosts,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));

  return { paths, fallback: "blocking" };
}
