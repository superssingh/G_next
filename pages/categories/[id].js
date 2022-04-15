import Head from "next/head";
import { useRouter } from "next/router";
import { getCategories, getPosts } from "../../services/getData";
import BlogContext from "../../components/contexts/blogContext";
import moment from "moment";
import _ from "lodash";
import { PostCard, PostWidget, Categories } from "../../components";
import * as TagName from "../../components/constants";

const Category = () => {
  // const { blogs, categories, setBlogs, setCategories } =
  //   useContext(BlogContext);
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
