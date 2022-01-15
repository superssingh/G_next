import Head from "next/head";
import { useRouter } from "next/router";

const Category = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>{id}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Category: {id}</p>
    </div>
  );
};

export default Category;
