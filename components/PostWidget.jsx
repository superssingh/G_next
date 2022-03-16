import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostWidget = ({ recentPosts, category, id }) => {
  const [similarPosts, setSimilarPosts] = useState([]);
  const [similar, setSimilar] = useState(false);

  useEffect(async () => {
    if (recentPosts) {
      if (category == undefined && id == undefined) {
        setSimilarPosts(recentPosts);
        setSimilar = false;
      } else {
        const relevant = await recentPosts.filter((p) => {
          return p.node.categories[0].name === category && p.node.id != id;
        });

        if (relevant.length >= 1) {
          setSimilarPosts(relevant);
          setSimilar(true);
        } else {
          setSimilarPosts(recentPosts);
          setSimilar(false);
        }
      }
    }
  }, []);

  return (
    <div className="relative w-auto md:w-80 place-self-start bg-white bg-opacity-50 shadow-lg drop-shadow-md border-y-2 border-slate-100/[.45] rounded-lg p-6 mb-6 ">
      <h3 className=" text-md text-gray-800 border-b border-slate-50/[.50] pb-2">
        {similar ? "Relevant Posts" : "Recent Posts"}
      </h3>
      {similarPosts &&
        similarPosts.map((m) => {
          return (
            <Link href={`/posts/${m.node.slug}`} key={m.node.id}>
              <div className="flex items-center transition-all duration-700 bg-white shadow-lg shadow-black/[.30] bg-opacity-30 place-content-start rounded-lg  my-2 hover:bg-opacity-70">
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
          );
        })}
    </div>
  );
};

export default PostWidget;
