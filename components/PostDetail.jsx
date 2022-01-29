import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostDetail = ({ post }) => {
  return (
    <div className="grid h-fit w-full">
      <div className="relative h-86 w-full shadow-lg md:w-56 md:shrink-0 ">
        <Image
          src={post.featured_image[0].url}
          alt={post.title}
          layout="fill"
          priority
          className="object-cover shadow-lg rounded-t-lg md:rounded-l-lg md:rounded-none"
        />
      </div>
      <div class="h-52 w-full text-justify px-8 py-2">
        <div class=" text-center align-middle flex uppercase tracking-wide text-sm text-indigo-500 font-semibold">
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
          <div className="pl-1 ">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </div>
        </div>

        <div className="text-center uppercase text-3xl font-bold my-6">
          {post.title}
        </div>
        <div className="text-justify text-md text-gray-800">
          {post.description}
        </div>
      </div>

      <div class="absolute bottom-0 right-0 p-2 ">
        <Link href={`/posts/${post.slug}`}>
          <div className="leafButton">Read</div>
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
