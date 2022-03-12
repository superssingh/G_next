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
      <div className="description">
        <span className="hidden">
          <em>
            <b>Gogixer </b>
          </em>
          is an online learning platform for web developers and entrepreneurs to
          learn web development skills.
        </span>
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
  return { props: { posts, categories, revalidate: 36000 } };
}
