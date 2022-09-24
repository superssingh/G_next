import React, { useEffect, useContext, useState } from "react";
import { getPosts } from "../../services/getBlogData";
import ExamplePagination from "../../components/jsx/tailwindExamples/Pagination";
import moment from "moment";
import _ from "lodash";
import { PostCard, PostWidget } from "../../components";
import PaginationBar from "../../components/jsx/Pagination";
import { Paginate } from "../../components/js/paginate";

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

  const handlePageChange = async (pageNumber) => {
    const filteredList = await Paginate(
      recentPosts,
      pageNumber,
      recentPosts.length
    );
    setRecentPosts(filteredList);
  };

  return (
    <div>
      <div className="grid  relative w-full lg:grid-cols-12 gap-4 ">
        <div className="grid w-full  md:col-span-8 max-w-5xl">
          <div className="grid w-full  justify-center place-self-start content-center md:grid md:w-full lg:flex ">
            {recentPosts.map((p) => (
              <PostCard post={p.node} key={p.node.id} />
            ))}
          </div>
          <div className="grid place-content-center bottom-0  ">
            <div className="text-white  place-content-center">
              <PaginationBar
                itemCount={recentPosts.length}
                pageSize={6}
                currentPage={1}
                onPageChange={handlePageChange}
              />
            </div>
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
