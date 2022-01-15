import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <div className="relative shadow-lg pb-60 mb-0 md:flex md:shrink-0 ">
        <Image
          src={post.featured_image[0].url}
          alt={post.title}
          layout="fill"
          priority
          className="object-cover shadow-lg rounded-t-lg md:rounded-l-lg md:rounded-none"
        />
      </div>
      <div className="px-6">
        <div className="flex h-fit w-fit text-sm pt-2">
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
          <div>{moment(post.createdAt).format("MMM DD, YYYY")}</div>
        </div>

        <Link href={`/posts/${post.slug}`}>
          <h1 className=" text-center transition duration-500 p-2 mt-2 mb-1 cursor-pointer hover:text-green-600 text-2xl font-semibold">
            {post.title}
          </h1>
        </Link>

        <div>
          <p className="line-clamp-3 text-md text-justify leading-5 tracking-tighter text-gray-600 px-2 mb-2">
            {post.excerpt}
          </p>
        </div>
        <div className="flex relative place-content-center my-3">
          <Link href={`/posts/${post.slug}`}>
            <div className="leafButton">Read</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
