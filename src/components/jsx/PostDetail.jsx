import React from "react"
import Image from "next/legacy/image"
import moment from "moment"
import Markdown from 'markdown-to-jsx';
import { AuthorInfo, Back } from '../index';

const PostDetail = ({ post }) => {
  return (
    <div className="sm:w-fit md:max-w-4xl grid relative place-content-center showSlow">
      <div className="relative h-72 w-full  overflow-hidden shadow-lg md:shrink-0 ">
        <Image
          src={post.featured_image[0]?.url}
          alt={post.title}
          priority
          layout="fill"
          className="shadow-lg rounded-t-lg"
        />
      </div>
      <div className="grid relative w-auto md:w-full bg-white/[.5] shadow-lg shadow-gray-700/[.35] drop-shadow-md border-b-2 border-white/[.45] md:rounded-b-lg md:p-4 mb-4">
        <div className="grid relative bg-white px-2 md:m-4 md:px-6 md:mt-[-5rem] rounded-sm md:rounded-md ">
          <div className=" bg-white m-2 md:mb-4 md:mx-2 mt-[-2rem] uppercase shadow-md rounded-md text-gray-800 text-xl md:text-2xl font-semibold p-4 mb-4  ">
            {post.title}
          </div>
          <div className="relative px-2 md:px-4 pb-2">
            <div className="flex text-center align-middle uppercase tracking-wide text-sm font-semibold mb-2  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
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
              <div className="pl-1 text-gray-400">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </div>
            </div>
            <div className="relative">
              {post.content.map((c, id) => (
                <div
                  className="PostContent relative my-6 text-[14px] md:text-base text-gray-600"
                  key={id}
                >
                  <Markdown>{c.html}</Markdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Back path="/posts" />
      {post.author && <AuthorInfo author={post.author} />}
      {/*       
      {post.author && (
        <Suspense fallback={`Loading...`}>
          <DynamicAuthorInfo author={post.author} />
        </Suspense>
      )} */}
    </div>
  );
};

export default PostDetail
