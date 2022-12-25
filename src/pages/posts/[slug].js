import React from "react"
import { createClient } from "@supabase/supabase-js"
import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { getPosts, getPostDetail } from "../../services/getBlogData"
import {
  HeadTag,
  PostDetail,
  PostWidget,
  Comment,
  AuthorInfo,
} from "../../components"
import moment from "moment"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const Blog = ({ post, posts }) => {
  return (
    <div className=" showSlow">
      <HeadTag post={post} />

      <div className="grid ">
        <div className="grid z-20 p-2 w-full h-full bg-purple-700/80  absolute place-content-center place-items-center">
          <div className="grid z-10 p-4 w-fit bg-black/80 absolute place-content-center place-items-center">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={["google", "github", "twitter"]}
              className="grid w-fit absolute z-10"
            />
          </div>
        </div>
        <div className="grid relative w-full md:px-4 pb-4 lg:grid-cols-12 gap-x-6 gap-y-4 place-content-center ">
          <div className=" grid max-w-4xl place-self-center content-center md:col-span-8">
            <PostDetail post={post} />
            <Comment />
          </div>
          <div className="grid w-full md:col-span-8 lg:col-span-4">
            <div className="place-content-center md:flex lg:grid lg:sticky lg:place-content-start">
              {posts && (
                <PostWidget
                  posts={posts}
                  category={post.categories[0]?.name}
                  id={post.id}
                />
              )}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

// Fetch data at build time
export async function getStaticProps({ params }) {
  const post = (await getPostDetail(params.slug)) || []
  const posts = (await getPosts()) || []
  // const categories = (await getCategories()) || [];
  return {
    props: {
      post,
      posts,
    },
    revalidate: 60000,
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }))

  return { paths, fallback: "blocking" }
}
