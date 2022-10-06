import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostWidget = ({ posts, category, id }) => {
  const [similarPosts, setSimilarPosts] = useState([]);
  const [similar, setSimilar] = useState(false);

  useEffect(() => {
    if (posts) {
      setData();
    }
  }, [posts]);

  async function setData() {
    if (!category && !id) {
      setSimilarPosts(posts);
      setSimilar = false;
    } else {
      const relevant = await posts.filter((p) => {
        return p.node?.categories[0]?.name === category && p.node.id != id;
      });

      if (relevant.length) {
        setSimilarPosts(relevant);
        setSimilar(true);
      } else {
        const otherPosts = await posts.filter((p) => {
          return p.node.id != id;
        });
        setSimilarPosts(otherPosts);
        setSimilar(false);
      }
    }
  }

  return (
    <div className="w-fit showSlow widget relative transition-all duration-700 place-content-start shadow-lg drop-shadow-md  rounded-lg p-6 m-2  ">
      <h3 className=" text-md text-gray-800 border-b border-slate-500/[.50] pb-2 ">
        {similar ? "Relevant Posts" : "Recent Posts"}
      </h3>
      <div className="w-full  md:grid md:grid-cols-2 lg:block top-0 ">
        {similarPosts &&
          similarPosts.map((m) => {
            return (
              <Link href={`/posts/${m.node.slug}`} key={m.node.id}>
                <div className=" w-full md:w-72 flex m-2  place-items-center  transition-all duration-700 bg-white/20 shadow-md shadow-black/[.3]  rounded-lg hover:shadow-black/[.50] hover:shadow-lg hover:bg-white/[.45] ">
                  <Image
                    src={m.node.featured_image[0].url}
                    alt={m.node.title}
                    width={72}
                    height={72}
                    layout="fixed"
                    className="align-middle justify-self-stretch object-cover rounded-l-lg"
                  ></Image>
                  <div className="w-fit px-2 ">
                    <div className="text-gray-700 text-md font-semibold">
                      {m.node.title}
                    </div>
                    <div className="text-gray-800 text-xs ">
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
