import { useRouter } from "next/router";
import { getPosts, getPostDetail } from "../../services/getPosts";
import { HeadTag, PostDetail } from "../../components";

const Blog = ({ post }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <HeadTag post={post} />
      <PostDetail post={post} />
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
