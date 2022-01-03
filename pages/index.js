import { PostCard, PostWidget, Categories } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 ">
          {posts.map((p) => (
            <PostCard post={p.node} key={p.node.slug} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return { props: { posts } };
}
