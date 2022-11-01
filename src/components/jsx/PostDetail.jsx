import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import { AuthorInfo, Back } from "../index";

// const DynamicAuthorInfo = dynamic(() => import("../jsx/AuthorInfo"), {
//   suspense: true,
// });

const PostDetail = ({ post }) => {
  return (
    <div className="w-full max-w-4xl grid relative place-content-center showSlow">
      <div className="relative h-72 w-full object-cover overflow-hidden shadow-lg md:shrink-0 ">
        <Image
          src={post.featured_image[0].url}
          alt={post.title}
          width={500}
          height={500}
          priority
          className="object-cover w-full h-full shadow-lg rounded-t-lg"
        />
      </div>
      <div className=" bg-white/[.5] shadow-lg shadow-gray-700/[.35] drop-shadow-md border-b-2 border-white/[.45] rounded-b-lg p-4 mb-4">
        <div className="PostDetail">
          <div className="text-gray-700 text-3xl font-semibold p-4 mb-4 ">
            {post.title}
          </div>
          <div className="relative px-4 pb-2">
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div className="pl-1 text-gray-400">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>

            <div className=" text-md text-gray-600">
              {post.content.map((c, id) => (
                <div className="my-6" key={id}>
                  <Markdown children={c.html}></Markdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Back path="posts" />
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

export default PostDetail;
