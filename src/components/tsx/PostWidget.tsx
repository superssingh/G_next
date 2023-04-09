import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

type PostWidgetProps = {
  posts: any[]
  id?: string
}

const PostWidget: React.FC<PostWidgetProps> = ({ posts, id }) => {
  const [similarPosts, setSimilarPosts] = useState<any[]>([])
  const [similar, setSimilar] = useState(false)

  useEffect(() => {
    findSimilarData()
  }, [posts])

  async function findSimilarData() {
    if (posts.length <= 0) {
      return <h1>0 Posts found.</h1>
    }

    const relevant = await posts.filter((p) => {
      return p.node.id != id
    })

    if (relevant.length >= 1) {
      setSimilarPosts(relevant)
      setSimilar(true)
      return
    } else {
      setSimilarPosts(posts)
      setSimilar(false)
      return
    }
  }

  return (
    <>
      <div className="relative grid w-full showSlow widget transition-all duration-700 place-content-center shadow-lg drop-shadow-md  rounded-lg p-4">
        <h3 className="text-md text-gray-800 border-b border-slate-500/[.50] pb-2">
          {similar ? 'Relevant Posts' : 'Recent Posts'}
        </h3>
        <div className="w-full md:grid md:grid-cols-2 lg:block top-0  my-2">
          {similarPosts.map(({ node: post }) => (
            <Link
              href={`/posts/${post.slug}`}
              key={post.id}
              passHref
            >
              <div className="flex md:block w-full p-2 place-content-start">
                <div className="flex w-full transition-all duration-700 bg-white/20 shadow-md shadow-black/[.3]  rounded-lg hover:shadow-black/[.50] hover:shadow-lg hover:bg-white/[.45]">
                  <div className="grid overflow-hidden">
                    <Image
                      src={post.featured_image[0].url}
                      alt={post.title}
                      width={80}
                      height={80}
                      loading="lazy"
                      className="rounded-l-lg"
                    />
                  </div>
                  <div className="w-full h-full p-2 grid place-content-start">
                    <div className="w-full text-gray-700 text-sm font-semibold line-clamp-2">
                      {post.title}
                    </div>
                    <div className="text-gray-800 text-xs">
                      {moment(post.createdAt).format('MMM DD, YYYY')}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default PostWidget
