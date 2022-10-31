import React, { useEffect, useContext, useState } from "react";
import { getPosts } from "../../services/getBlogData";

import moment from "moment";
import _ from "lodash";
import { PostCard, PostWidget, Paginate, Pagination } from "../../components";

const Home = ({ posts }) => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    if (filteredPosts.length == 0) {
      getLatestPosts();
    }
  }, [filteredPosts]);

  async function getLatestPosts() {
    try {
      if (posts) {
        const recent = await _.orderBy(
          posts,
          (a) => moment(a.node.createdAt).format("YYYYMMDD"),
          "desc"
        );
        setRecentPosts(recent);
        handlePageChange(currentPage);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  const handlePageChange = async (pageNumber) => {
    if (currentPage != pageNumber) {
      setCurrentPage(pageNumber);
    }
    const filtered = await Paginate(recentPosts, pageNumber, pageSize);
    setFilteredPosts(await filtered);
  };

  return (
    <div>
      <div className="grid  relative w-full lg:grid-cols-12 gap-4 ">
        <div className="grid w-full  md:col-span-8 max-w-5xl">
          <div className="grid w-full px-2 justify-center place-self-start content-center md:grid md:w-full lg:grid-cols-2  2xl:grid-cols-3 ">
            {filteredPosts.map((p) => (
              <PostCard post={p.node} key={p.node.id} />
            ))}
          </div>
          <div className="grid place-content-center bottom-0  ">
            <div className="text-white  place-content-center">
              <Pagination
                itemCount={recentPosts.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>

        {posts && (
          <div className="w-full grid p-2 relative  md:col-span-8 lg:col-span-4 place-content-center lg:place-content-start ">
            <div className="w-fit relative lg:sticky lg:place-content-start lg:w-78 ">
              <PostWidget posts={recentPosts} />
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
