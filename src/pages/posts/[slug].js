import React, { useState } from 'react';
import { getPosts, getPostDetail } from '../../services/getBlogData';
import {
  HeadTag,
  PostDetail,
  PostWidget,
  Loading,
  Comment,
} from '../../components'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '../../lib/supabaseClient'

const getComments = async (slug) => {
  return await supabase.from('blogs-comment').select()
}

const Post = () => {
  const router = useRouter()
  const { slug } = router.query

  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  const post = useQuery({
    queryKey: ['posts', slug],
    queryFn: () => getPostDetail(slug),
  })

  const comments = useQuery({
    queryKey: ['comments', slug],
    queryFn: () => getComments(slug),
  })

  // const getPost = async () => {
  // return postsQuery?.data.find(({ node: { slug } }) => slug == id)
  // }
  // getPost()

  return (
    <div className=" showSlow">
      {(post?.data && (
        <>
          <HeadTag post={post} />

          <div className="grid ">
            <div className="relative grid w-full place-content-center gap-x-6 gap-y-4 pb-4 md:px-4 lg:grid-cols-12 ">
              <div className=" grid max-w-4xl content-center place-self-center md:col-span-8 ">
                <PostDetail post={post.data} />
                <Comment />
              </div>
              <div className="grid w-full md:col-span-8 lg:col-span-4 lg:place-content-start place-items-center">
                <div className="place-content-center md:flex lg:sticky lg:grid lg:place-content-start">
                  {postsQuery?.data && (
                    <PostWidget
                      posts={postsQuery.data}
                      id={post.data.id}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )) || <Loading />}
    </div>
  )
}

export default Post

// Fetch data at build time
// export async function getStaticProps({ params }) {
//   const post = (await getPostDetail(params.slug)) || [];
//   const posts = (await getPosts()) || [];
//   // const categories = (await getCategories()) || [];
//   return {
//     props: {
//       post,
//       posts,
//     },
//     revalidate: 90000,
//   };
// }

// export async function getStaticPaths() {
//   const posts = await getPosts();

//   return { paths, fallback: 'blocking' };
// }
