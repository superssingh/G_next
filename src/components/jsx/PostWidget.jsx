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
      setSimilar(false);
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
    <div className="grid w-full showSlow widget transition-all duration-700 place-content-center shadow-lg drop-shadow-md  rounded-lg p-6 m-2  ">
      <h3 className=" text-md text-gray-800 border-b border-slate-500/[.50] pb-2 ">
        {similar ? "Relevant Posts" : "Recent Posts"}
      </h3>
      <div className="grid w-full place-content-start md:grid-cols-2 lg:block top-0 ">
        {similarPosts &&
          similarPosts.map((m) => {
            return (
              <Link href={`/posts/${m.node.slug}`} key={m.node.id}>
                <div className="flex  m-2 transition-all duration-700 bg-white/20 shadow-md shadow-black/[.3]  rounded-lg hover:shadow-black/[.50] hover:shadow-lg hover:bg-white/[.45] ">
                  <Image
                    src={m.node.featured_image[0].url}
                    alt={m.node.title}
                    width={72}
                    height={72}
                    className="align-middle justify-self-stretch object-cover rounded-l-lg"
                  ></Image>
                  <div className="w-full p-4">
                    <div className="w-full text-gray-700 text-md md:text-sm font-semibold line-clamp-1 md:line-clamp-2 ">
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
