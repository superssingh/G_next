import React, { useState, useEffect, useContext } from "react";
import * as TagName from "../components/js/constants";
import styles from "../components/js/styles";
import { coding, heroImg } from "../components/assets";
import Image from "next/image";

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

      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative transition-all duration-500 p-8 hover:bg-opacity-50 showFromTop ">
        <div className="relative flex md:justify-center items-center ">
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <span className=" text-4xl text-white">
              Hi, Welcome to Gogixer...
            </span>
            <Image
              src={heroImg}
              alt="coding"
              width={600}
              height={400}
              className={`absolute rounded-xl z-[2]`}
            />

            <Image
              src={coding}
              width={600}
              height={400}
              className={`absolute rounded-xl z-[2]`}
            />

            {/* <coding /> */}

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink_gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white_gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue_gradient" />

            {/* gradient end */}
          </div>
        </div>
      </div>
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
