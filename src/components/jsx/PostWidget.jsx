import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostWidget = ({ posts, category, id }) => {
  const [similarPosts, setSimilarPosts] = useState([]);
  const [similar, setSimilar] = useState(false);

  useEffect(async () => {
    if (posts) {
      if (!category && !id) {
        setSimilarPosts(posts);
        setSimilar = false;
      } else {
        const relevant = await posts.filter((p) => {
          return p.node.categories[0].name === category && p.node.id != id;
        });

        if (relevant.length) {
          setSimilarPosts(relevant);
          setSimilar(true);
          return;
        } else {
          const otherPosts = await posts.filter((p) => {
            return p.node.id != id;
          });
          setSimilarPosts(otherPosts);
          setSimilar(false);
          return;
        }
      }
    }
  }, [posts]);

  return (
    <div className="showSlow widget relative transition-all duration-700 w-auto  place-self-start shadow-lg drop-shadow-md  rounded-lg p-6 mb-4 md:mx-2 ">
      <h3 className=" text-md text-gray-800 border-b border-slate-500/[.50] pb-2">
        {similar ? "Relevant Posts" : "Recent Posts"}
      </h3>
      <div className="w-full sm:flex lg:grid   ">
        {similarPosts &&
          similarPosts.map((m) => {
            return (
              <Link href={`/posts/${m.node.slug}`} key={m.node.id}>
                <div className=" w-full sm:w-72 flex m-2 items-center transition-all duration-700 bg-white/20 shadow-md shadow-black/[.3]  place-content-start rounded-lg  my-2 hover:shadow-black/[.50] hover:shadow-lg hover:bg-white/[.45] ">
                  <Image
                    src={m.node.featured_image[0].url}
                    alt={m.node.title}
                    width={72}
                    height={72}
                    layout="fixed"
                    className="align-middle justify-self-stretch object-cover rounded-l-lg"
                  ></Image>
                  <div className="w-fit pl-2 pr-2">
                    <div className="text-gray-800 text-md font-semibold">
                      {m.node.title}
                    </div>
                    <div className="text-gray-700 text-xs ">
                      {moment(m.node.createdAt).format("MMM DD, YYYY")}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PostWidget;
