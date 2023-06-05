import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="/logos/favicon.svg"
          rel="apple-touch-icon"
          sizes="180x180"
          type="image/svg+xml"
        />
        <link
          href="/logos/favicon.svg"
          rel="icon"
          sizes="32x32"
          type="image/svg+xml"
        />
        <link
          href="/logos/favicon.svg"
          rel="icon"
          sizes="16x16"
          type="image/svg+xml"
        />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link href="/favicon/favicon.ico" rel="shortcut icon" />
      </Head>
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
