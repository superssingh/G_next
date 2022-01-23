import "../styles/globals.css";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component className="container" {...pageProps} />
    </Layout>
  );
}

export default MyApp;
