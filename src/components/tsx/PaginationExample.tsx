import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import { useRouter } from 'next/router'

const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await axios.get(`/api/posts?page=${pageParam}`)
  return response.data
}

const Page = () => {
  const router = useRouter()
  const { query } = router

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching,
    isError,
  } = useInfiniteQuery(['posts', query], fetchPosts, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
    keepPreviousData: true,
  })

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'error') {
    return <div>Error loading data</div>
  }

  return (
    <div>
      {data.pages.map((page) =>
        page.posts.map((post) => <div key={post.id}>{post.title}</div>)
      )}

      {isFetchingNextPage ? (
        <div>Loading more...</div>
      ) : (
        hasNextPage && (
          <button
            onClick={fetchNextPage}
            disabled={isFetching || isError}
          >
            Load More
          </button>
        )
      )}
    </div>
  )
}

export default Page
