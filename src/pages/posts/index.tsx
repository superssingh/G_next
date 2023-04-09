'use client'
import React, { useState, useEffect } from 'react'
import { getPosts } from '../../components/js/services/getBlogData'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import _ from 'lodash'
import {
  Loading,
  PostCard,
  PostWidget,
  Pagination,
  Paginate,
} from '../../components'

const Posts = () => {
  const [recentPosts, setRecentPosts] = useState<any[]>([])
  const [filteredPosts, setFilteredPosts] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageSize = 6

  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    onError: (err) => {
      return err
    },
  })

  // useEffect(() => {
  //   if (isLoading == false && data.length >= 0) {
  //     getLatestPosts(data)
  //   }
  // }, [isLoading, data])

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }

  if (error) {
    const errorMessage = (error as Error & { message: string }).message
    return <div>Error: {errorMessage}</div>
  }

  if (!isLoading && data.length > 0) {
    getLatestPosts(data)
  }

  async function getLatestPosts(data: any) {
    const recent = await _.orderBy(
      data,
      (p) => moment(p.node.createdAt).format('YYYYMMDD'),
      'desc'
    )
    await setRecentPosts(recent)
    await handlePageChange(currentPage)
  }

  const handlePageChange = async (pageNumber: number) => {
    if (currentPage !== pageNumber) {
      setCurrentPage(pageNumber)
    }

    const filtered = await Paginate(recentPosts, pageNumber, pageSize)
    setFilteredPosts(filtered)
  }

  return (
    <>
      <div>
        {recentPosts.length > 0 && (
          <div className="relative sm:grid w-full place-content-center gap-4 lg:grid-cols-12">
            <div className="grid w-full max-w-5xl md:col-span-8 px-2">
              <div className="w-full content-center justify-center place-self-start md:grid md:w-full lg:grid-cols-2 2xl:grid-cols-3">
                {filteredPosts.map(({ node }: any) => (
                  <PostCard
                    post={node}
                    key={node.id}
                  />
                ))}
              </div>
              <div className="bottom-0 grid place-content-center">
                <div className="place-content-center text-white">
                  <Pagination
                    itemCount={recentPosts.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
            <div className="relative w-full grid place-content-center p-2 md:col-span-8 lg:col-span-4 lg:place-content-start">
              <div className="w-fit grid lg:w-78 lg:sticky lg:place-content-start">
                <PostWidget posts={recentPosts} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Posts
