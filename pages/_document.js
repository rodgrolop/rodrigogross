import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "../src/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="application-name" content="Rodrigo Gross Lopez Website" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Rodrigo Gross Lopez Website"
          />
          <meta
            name="description"
            content="My personal website, will be used as a development lab"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
          />
          <meta
            name="msapplication-TileColor"
            content={theme.palette.primary.main}
          />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={theme.palette.primary.main} />

          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icons/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-chrome-192x192.png"
          />
          <link rel="manifest" href="manifest.json" />
          <link rel="shortcut icon" href="/icons/android-chrome-192x192.png" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://www.rodrigogross.me" />
          <meta name="twitter:title" content="Rodrigo Gross Lopez Website" />
          <meta
            name="twitter:description"
            content="My personal website, will be used as a development lab"
          />
          <meta
            name="twitter:image"
            content="https://www.rodrigogross.me/icons/android-chrome-192x192.png"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Rodrigo Gross Lopez Website" />
          <meta
            property="og:description"
            content="My personal website, will be used as a development lab"
          />
          <meta property="og:site_name" content="Rodrigo Gross Lopez Website" />
          <meta property="og:url" content="https://www.rodrigogross.me" />
          <meta
            property="og:image"
            content="https://www.rodrigogross.me/icons/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
