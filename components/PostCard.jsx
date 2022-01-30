import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <div className="card ">
      <div className="relative h-56 w-full shadow-lg md:w-56 md:shrink-0 ">
        <Image
          src={post.featured_image[0].url}
          alt={post.title}
          layout="fill"
          priority
          className="object-cover shadow-lg rounded-t-lg md:rounded-l-lg md:rounded-none"
        />
      </div>
      <div className="h-52 w-full text-justify px-8 py-2">
        <div className="text-center align-middle flex uppercase tracking-wide text-sm text-indigo-500 font-semibold">
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
        <Link href={`/posts/${post.slug}`}>
          <p className="grid mt-2 text-xl font-semibold text-blue">
            {post.title}
          </p>
        </Link>
        <p className="line-clamp-3 mt-2 text-slate-500 ">{post.description}</p>
      </div>

      <div className="absolute bottom-0 right-0 p-2 ">
        <Link href={`/posts/${post.slug}`}>
          <div className="leafButton">Read</div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
