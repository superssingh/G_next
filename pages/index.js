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
        posts,
        (a) => moment(a.node.createdAt).format("YYYYMMDD"),
        "desc"
      );
      setRecentPosts(recent);
    }
  }, [posts]);

  return (
    <div>
      <div className="w-full md:grid lg:grid-cols-12 gap-4">
        <div className="grid w-full place-self-start content-center md:col-span-8  ">
          {recentPosts.map((p) => (
            <PostCard post={p.node} key={p.node.id} />
          ))}
        </div>
        <div className="w-84 place-items-center place-content-center w-full md:col-span-4 ">
          <div className="grid w-84 md:flex place-self-center lg:grid lg:sticky relative top-8">
            <div className="w-full mx-1 md:w-72 ">
              <PostWidget recentposts={recentPosts} />
            </div>
            <div className="w-full mx-1 md:w-72">
              <Categories categories={categories} />
            </div>
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
  return { props: { posts } };
}
