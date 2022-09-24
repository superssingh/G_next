import React, { useEffect, useContext, useState } from "react";
import { getPosts } from "../../services/getBlogData";
import ExamplePagination from "../../components/jsx/tailwindExamples/Pagination";
import moment from "moment";
import _ from "lodash";
import { PostCard, PostWidget } from "../../components";

const Home = ({ posts }) => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    if (posts) {
      latestPosts();
    }
  }, []);

  async function latestPosts() {
    const recent = await _.orderBy(
      posts,
      (a) => moment(a.node.createdAt).format("YYYYMMDD"),
      "desc"
    );
    setRecentPosts(recent);
  }

  return (
    <div>
      <div className="grid  relative w-full lg:grid-cols-12 gap-4 px-2">
        <div className="grid w-full place-content-center  justify-center place-self-start content-center md:w-full md:col-span-8 ">
          <div className="grid w-full  justify-center place-self-start content-center md:grid md:w-full md:col-span-8 xl:grid-cols-3 2xl:grid-cols-3">
            {recentPosts.map((p) => (
              <PostCard post={p.node} key={p.node.id} />
            ))}
          </div>
          <div className="grid  w-full sm:m-2 place-content-center  ">
            <ExamplePagination />
          </div>
        </div>

        {posts && (
          <div className="grid w-full md:col-span-8 lg:col-span-4 ">
            <div className=" place-content-center md:flex lg:grid lg:sticky lg:place-content-start">
              <PostWidget posts={recentPosts} />
              {/* <Categories categories={TagName.categories} /> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  // const categories = (await getCategories()) || [];
  return { props: { posts }, revalidate: 36000 };
}
