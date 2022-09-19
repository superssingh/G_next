import React, { useState, useEffect, useContext } from "react";
import { Course } from "../components";

import HeroPage from "../components/jsx/HeroPage";
import Services from "../components/jsx/Services";
import SocialProof from "../components/jsx/SocialProof";

const Home = () => {
  return (
    <section className="">
      <div className="description">
        <span className="hidden">
          <em>
            <b>Gogixer </b>
          </em>
          is an online learning platform for web developers and entrepreneurs to
          learn web development skills.
        </span>
      </div>

      <HeroPage />
      <Services />
      <Course label={true} />
      <SocialProof />
    </section>
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
