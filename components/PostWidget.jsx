import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostWidget = ({ recentPosts, slug }) => {
  const [relevantPost, setRelevantPost] = useState([]);

  useEffect(async () => {
    setRelevantPost(recentPosts);
  }, [recentPosts]);

  return (
    <div className="relative place-self-center bg-white bg-opacity-50 shadow-lg drop-shadow-md border-y-2 border-slate-100/[.45] rounded-lg p-6 mb-6">
      <h3 className=" text-md text-gray-800 border-b border-slate-50/[.50] pb-2">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relevantPost &&
        relevantPost.map((m) => (
          <Link href={`/posts/${m.node.slug}`} key={m.node.id}>
            <div className="items-center transition-all duration-700 flex bg-white shadow-lg shadow-black/[.30] bg-opacity-30 place-content-start rounded-lg  my-2 hover:bg-opacity-70">
              <Image
                src={m.node.featured_image[0].url}
                alt={m.node.title}
                width={70}
                height={70}
                layout="fixed"
                className="align-middle  justify-self-stretch object-cover rounded-lg"
              ></Image>
              <div className="w-fit pl-2 pr-2">
                <div className="text-gray-800 text-md font-semibold">
                  {m.node.title}
                </div>
                <div className="text-gray-700 text-xs">
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
