import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostWidget = ({ recentposts, categories, slug }) => {
  useEffect(() => {
    if (slug) {
      getRelevantPosts(categories, slug).then((result) =>
        setRelevantPost(result)
      );
    } else {
      console.log(recentposts);
    }
  }, [slug]);

  return (
    <div className=" bg-white bg-opacity-50 shadow-lg drop-shadow-lg rounded-lg p-6 mb-8">
      <h3 className=" text-lg text-gray-800 border-b pb-2">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {recentposts.map((m) => (
        <Link href={`/posts/${m.node.slug}`} key={m.node.id}>
          <div className=" items-center transition-all duration-700 flex bg-white shadow-lg bg-opacity-30 place-content-start rounded-lg  my-2 hover:bg-opacity-70">
            <Image
              src={m.node.featured_image[0].url}
              alt={m.node.title}
              width={70}
              height={70}
              layout="fixed"
              className=" align-middle  justify-self-stretch object-cover rounded-lg"
            ></Image>
            <div className="pl-2 pr-2">
              <div className="text-base text-gray-800 font-semibold">
                {m.node.title}
              </div>
              <div className="text-gray-700 text-sm">
                {moment(m.node.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
