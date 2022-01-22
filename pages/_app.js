import { Layout } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component className="container" {...pageProps} />
    </Layout>
  );
}

export default MyApp;
