import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="card hover:bg-white/[.7] ">
        <div className="relative h-56 w-full md:w-48 md:h-48 md:shrink-0 xl:h-56 xl:w-full">
          <Image
            src={post.featured_image[0].url}
            alt={post.title}
            layout="fill"
            priority
            className="object-cover shadow-lg rounded-t-lg md:rounded-l-lg md:rounded-none"
          />
        </div>
        <div className=" h-36 w-full h-30 px-8 py-2">
          <div className="relative z-10 ">
            <div className="absolute left-[-65px] bottom-[-60px] rotate-[-90deg]  text-center align-middle flex uppercase tracking-wide text-xs ">
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
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <div className="pl-1 ">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>
          </div>
          <div className="ml-2">
            <p className="grid mt-2 text-xl font-semibold text-gray-800 uppercase">
              {post.title}
            </p>

            <p className="line-clamp-2 text-l mt-2 mb-2 text-gray-600 ">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
