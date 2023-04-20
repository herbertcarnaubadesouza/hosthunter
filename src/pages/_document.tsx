import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
            rel="stylesheet"
          ></link>

          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />

          <meta
            name="description"
            content="Transformando sua empresa com soluções de datacenter de alto desempenho. Cresça com a HostHunter, melhor proteção DDoS do mercado nacional"
          />

          <meta
            property="og:title"
            content="Transformando sua empresa com soluções de datacenter de alto desempenho."
          ></meta>

          <meta property="og:image" content="/images/ilustracao3.png" />

          <title>Soluções de Data Center - HOST HUNTER</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
