import React, { useState, useEffect, useContext } from "react";
import * as TagName from "../components/constants";

const Home = () => {
  return (
    <div>
      <div className="description">
        <span className="hidden">
          <em>
            <b>Gogixer </b>
          </em>
          is an online learning platform for web developers and entrepreneurs to
          learn web development skills.
        </span>
      </div>

      <div className="hero-section transition-all duration-500 bg-black bg-opacity-10 p-8 hover:bg-opacity-50">
        <div className="underLine">
          <span className=" text-4xl text-white">Welcome to Gogixer...</span>
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
