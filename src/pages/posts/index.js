import React, { useState, useEffect } from 'react'
import { getPosts } from '../../services/getBlogData'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import _ from 'lodash'
import {
  PostCard,
  PostWidget,
  Paginate,
  Pagination,
  NotFound,
  Loading,
} from '../../components'

const Posts = () => {
  const [recentPosts, setRecentPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 6
  const posts = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 5,
  })

  async function getLatestPosts() {
    if (posts.status === 'success') {
      const recent = await _.orderBy(
        posts.data,
        (p) => moment(p.node.createdAt).format('YYYYMMDD'),
        'desc'
      )
      await setRecentPosts(recent)
      await handlePageChange(currentPage)
    }
  }

  getLatestPosts()

  const handlePageChange = async (pageNumber) => {
    if (currentPage != pageNumber) {
      setCurrentPage(pageNumber)
    }
    const filtered = await Paginate(recentPosts, pageNumber, pageSize)
    setFilteredPosts(await filtered)
  }

  //getting latestposts.....

  return (
    <div>
      {(recentPosts.length > 0 && (
        <div className="relative sm:grid w-full place-content-center gap-4 lg:grid-cols-12  ">
          <div className="grid w-full max-w-5xl md:col-span-8 px-2">
            <div className="w-full content-center justify-center place-self-start  md:grid md:w-full lg:grid-cols-2  2xl:grid-cols-3 ">
              {filteredPosts.map((p) => (
                <PostCard
                  post={p.node}
                  key={p.node.id}
                />
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

          <div className="relative w-full grid place-content-center p-2 md:col-span-8 lg:col-span-4 lg:place-content-start ">
            <div className="w-fit grid lg:w-78 lg:sticky  lg:place-content-start ">
              <PostWidget posts={recentPosts} />
            </div>
          </div>
        </div>
      )) || <Loading />}
    </div>
  )
}
export default Posts

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return { props: { posts }, revalidate: 90000 };
// }
