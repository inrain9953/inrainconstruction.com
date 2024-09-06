import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <noscript>
          <link href="./styles/aos-noscript.css" rel="stylesheet" />
        </noscript>
        <script async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16650006765">
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
