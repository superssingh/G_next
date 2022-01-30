import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import HTML_Parser from "html-react-parser";
import Markdown from "markdown-to-jsx";

const PostDetail = ({ post }) => {
  const content = post.content;
  console.log(post);
  return (
    <div className="grid absolute place-content-center text-lg ">
      <div className="relative h-72 w-full overflow-hidden shadow-lg md:shrink-0 ">
        <Image
          src={post.featured_image[0].url}
          alt={post.title}
          layout="fill"
          priority
          className="object-cover shadow-lg rounded-t-lg"
        />
      </div>
      <div className=" bg-white bg-opacity-50 shadow-lg shadow-gray-700/[.35] drop-shadow-md border-b-2 border-white/[.45] rounded-b-lg p-6 mb-6">
        <div className="PostDetail">
          <div className="text-violet-900 text-center uppercase text-3xl font-bold mx-6 mb-6">
            {post.title}
          </div>
          <div class="relative text-justify px-8 pb-2">
            <div class=" text-center align-middle flex uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-6  ">
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
              <div className="pl-1">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </div>
            </div>

            {/* <p className="border-b border-gray-500/[.50] mt-2 mb-4"></p> */}

            <div className="text-justify text-md text-gray-700">
              {post.content.map((c) => {
                {
                  return (
                    <div className="my-8" key={c.key}>
                      <Markdown>{c.html}</Markdown>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <Link href={`/posts`}>
        <div id="backLeaf" className="top-0 w-fit h-fit">
          {`Back`}
        </div>
      </Link>
      <Link href={`/share`}>
        <div id="shareButton" className="top- right-5   w-fit h-fit">
          <svg
            fill="#000000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M 16.707031 2.2929688 L 15.292969 3.7070312 L 17.585938 6 L 17 6 C 10.936593 6 6 10.936593 6 17 L 6 18 L 8 18 L 8 17 C 8 12.017407 12.017407 8 17 8 L 17.585938 8 L 15.292969 10.292969 L 16.707031 11.707031 L 21.414062 7 L 16.707031 2.2929688 z M 2 8 L 2 9 L 2 19 C 2 20.64497 3.3550302 22 5 22 L 19 22 C 20.64497 22 22 20.64497 22 19 L 22 18 L 22 17 L 20 17 L 20 18 L 20 19 C 20 19.56503 19.56503 20 19 20 L 5 20 C 4.4349698 20 4 19.56503 4 19 L 4 9 L 4 8 L 2 8 z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default PostDetail;
