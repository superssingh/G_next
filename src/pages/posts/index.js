import React, { useEffect, useContext, useState } from "react"
import { getPosts } from "../../services/getBlogData"
import { useQuery, dehydrate, QueryClient } from '@tanstack/react-query';
import moment from 'moment';
import _ from 'lodash';
import {
  PostCard,
  PostWidget,
  Paginate,
  Pagination,
  NotFound,
  Loading,
} from '../../components';



const Posts = () => {
  const { data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    // initialData: posts,
  });
  const [recentPosts, setRecentPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  getLatestPosts();

  async function getLatestPosts() {
    if (data) {
      try {
        const recent = await _.orderBy(
          data,
          (a) => moment(a.node.createdAt).format('YYYYMMDD'),
          'desc'
        );
        await setRecentPosts(recent);
        await handlePageChange(currentPage);
      } catch (error) {
        console.log('Error: ', error.message);
      }
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
      {(recentPosts.length >= 1 && (
        <div className="relative  grid w-full gap-4 lg:grid-cols-12 ">
          <div className="grid w-full  max-w-5xl md:col-span-8">
            <div className="grid w-full content-center justify-center place-self-start px-2 md:grid md:w-full lg:grid-cols-2  2xl:grid-cols-3 ">
              {filteredPosts.map((p) => (
                <PostCard post={p.node} key={p.node.id} />
              ))}
            </div>
            <div className="bottom-0 grid place-content-center  ">
              <div className="place-content-center  text-white">
                <Pagination
                  itemCount={recentPosts.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>

          <div className="relative grid w-full place-content-center  p-2 md:col-span-8 lg:col-span-4 lg:place-content-start ">
            <div className="lg:w-78 relative w-fit lg:sticky lg:place-content-start ">
              <PostWidget posts={recentPosts} />
            </div>
          </div>
        </div>
      )) || <Loading />}
    </div>
  );
};
export default Posts;

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return { props: { posts }, revalidate: 90000 };
// }
