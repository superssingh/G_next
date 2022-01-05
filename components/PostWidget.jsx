import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { result } from "lodash";

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
    <div className=" bg-white bg-opacity-60 shadow-xl rounded-lg p-6 mb-8">
      <h3 className=" text-lg text-gray-800 border-b pb-2">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {recentposts.map((m) => (
        <Link href={`/posts/${m.node.slug}`}>
          <div className="transition-all duration-700 flex bg-teal-50 shadow-lg bg-opacity-30 place-content-start items-center rounded-lg  my-2 hover:bg-opacity-80">
            <img
              src={m.node.featured_image[0].url}
              alt={m.node.title}
              className="object-cover h-20 w-20 rounded-lg"
            ></img>
            <div className="pl-2 pr-2">
              <div className="text-base text-gray-800 font-semibold">
                {m.node.title}
              </div>
              <div className="text-gray-600 text-sm">
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
