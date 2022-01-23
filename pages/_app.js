import { Layout } from "../components";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component className="container" {...pageProps} />
    </Layout>
  );
}

export default MyApp;
