import Home from "../pages/home/home";
import { getPosts } from "../services";

export default function Index({ posts }) {
  return (
    <div>
      <Home posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return { props: { posts } };
}
