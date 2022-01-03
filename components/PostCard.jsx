import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import calendarIcon from "./assets/cal.png";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className=" bg-slate-100 shadow-lg rounded-lg p-0 lg:p-6 pb-6 mb-8">
      <div className="relative overflow-hidden shadow-lg pb-80 mb-6">
        <img
          src={post.featured_image[0].url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-500 text-center mb-8 cursor-pointer hover:text-cyan-500 text-3xl font-semibold">
        {post.title}
      </h1>
      <div className="grid place-content-center lg: mb-4 w-full">
        <div className="flex items-center transition duration-700  bg-white shadow-lg mb-2 rounded-full hover:bg-teal-200">
          <img
            alt={post.author.name}
            height="35px"
            width="35px"
            className="shadow-xl bg-teal-200 rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline pl-2 pr-2 cursor-pointer">{post.author.name}</p>
        </div>

        <span className="flex  place-self-center place-content-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#03cae1"
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
        </span>
      </div>
      <div className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </div>
      <div className="flex text-center place-content-center ">
        <Link href={`/post/${post.slug}`}>
          <div className="transition duration-700 bg-pink-700 text-white shadow-lg px-4 py-2 rounded-3xl cursor-pointer hover:bg-teal-500">
            Continue Reading
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
