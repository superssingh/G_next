import "../styles/globals.css";
import { Layout } from "../components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer />
      <Component className="container" {...pageProps} />
    </Layout>
  );
}

export default MyApp;
