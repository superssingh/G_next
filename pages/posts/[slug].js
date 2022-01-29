import { useRouter } from "next/router";
import { getPosts, getPostDetail } from "../../services/getPosts";
import { PostDetail } from "../../components";

const Blog = ({ post }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(post);

  return (
    <div className="grid relative h-fit w-full place-content-center content-center">
      <div className="w-full bg-white bg-opacity-70 shadow-lg shadow-gray-700/[.35] drop-shadow-md border-y-2 border-white/[.65] rounded-lg p-6 mb-6">
        <PostDetail post={post} />
      </div>
    </div>
  );
};

export default Blog;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetail(params.slug);
  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map(({ node: { slug } }) => ({ params: { slug } }));

  return { paths, fallback: "blocking" };
}
