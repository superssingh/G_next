import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/Muli-Light.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/Muli-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          {/* <link
            rel="preload"
            href="/fonts/Nunito-Medium.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>

          <link
            rel="preload"
            href="/fonts/Nunito-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/Nunito-Bold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link> */}
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
