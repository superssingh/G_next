import React, { useState } from "react";
import { useRouter } from "next/router";
import { getPosts, getPostDetail } from "../../services/getData";
import { HeadTag, PostDetail, PostWidget, Categories } from "../../components";

const Blog = ({ post }) => {
  const [similarPost, setSimilarPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  console.log(post);

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
                {/* <PostWidget recentposts={post} category={""} slug={""} /> */}
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
  const data = await getPostDetail(params.slug);
  return {
    props: {
      post: data,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));

  return { paths, fallback: "blocking" };
}
