import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import Markdown from "markdown-to-jsx";

const PostDetail = ({ post }) => {
  return (
    <div className="grid relative place-content-center  ">
      <div className="relative h-72 w-full overflow-hidden shadow-lg md:shrink-0 ">
        <Image
          src={post.featured_image[0].url}
          alt={post.title}
          layout="fill"
          priority
          className="object-cover shadow-lg rounded-t-lg"
        />
      </div>
      <div className=" bg-white bg-opacity-50 shadow-lg shadow-gray-700/[.35] drop-shadow-md border-b-2 border-white/[.45] rounded-b-lg p-4 mb-4">
        <div className="PostDetail">
          <div className="text-gray-700 text-4xl font-semibold p-4 mb-4 ">
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
              <div className="pl-1">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>

            <div className=" text-lg text-gray-600">
              {post.content.map((c, id) => (
                <div className="my-6" key={id}>
                  <Markdown>{c.html}</Markdown>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Link href={`/posts`}>
        <div id="backButton" className=" top-0 w-fit h-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#000000"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
      </Link>
      <Link href="#">
        <div id="LikeButton" className="top-10 right-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="#ff19f7"
            viewBox="0 0 24 24"
            stroke="#ab185a"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default PostDetail;
