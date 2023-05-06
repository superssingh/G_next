import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import moment from 'moment'

type PostCardProps = {
  posts: any[]
}

const PostCard: React.FC<PostCardProps> = ({ posts }) => {
  return (
    <>
      {posts.map(({ node: post }) => (
        <Link
          href={`/posts/${post.slug}`}
          key={post.id}
          passHref
          legacyBehavior
        >
          <div className="card bg-blue-200 hover:bg-green-200 ">
            <div className=" relative overflow-hidden h-52 w-full sm:w-52 sm:h-44 sm:shrink-0  lg:h-52 lg:w-full">
              <Image
                src={post.featured_image[0].url}
                alt={post.title}
                priority={true}
                layout="fill"
                className="shadow-lg rounded-t-lg md:rounded-l-lg md:rounded-none"
              />
            </div>
            <div className="relative h-32 lg:h-36 w-full px-8 py-3 ">
              <div className="relative z-2 ">
                <div className="flex absolute left-[-65px] bottom-[-60px]  rotate-[-90deg] text-center  uppercase tracking-wide text-xs ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#464545"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line
                      x1="16"
                      y1="2"
                      x2="16"
                      y2="6"
                    ></line>
                    <line
                      x1="8"
                      y1="2"
                      x2="8"
                      y2="6"
                    ></line>
                    <line
                      x1="3"
                      y1="10"
                      x2="21"
                      y2="10"
                    ></line>
                  </svg>
                  <div className="pl-1 ">
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                  </div>
                </div>
              </div>
              <div className="grid relative pl-2 ">
                <div className="grid mt-[-5px] md:m-0 text-lg font-bold text-gray-800 uppercase py-2 line-clamp-2 leading-6">
                  {post.title}
                </div>

                <div className="text-sm sm:text-base mb-2 text-gray-600 line-clamp-2 sm:line-clamp-3 lg:line-clamp-2">
                  {post.description}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default PostCard
