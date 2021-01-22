import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import FramerMotionContainer from "../components/layout/framer_motion";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Layout from "../components/layout";
// Context
import { DrawerContextProvider } from "../src/context";

/* TODO only execute in development  */
export function reportWebVitals(metric) {
  console.log(metric);
}
/* TODO only execute in development  */

const MyApp = (props) => {
  const { Component, pageProps, router } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Rodrigo Gross Lopez Website</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DrawerContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <FramerMotionContainer route={router.route}>
              <Component {...pageProps} />
            </FramerMotionContainer>
          </Layout>
        </ThemeProvider>
      </DrawerContextProvider>
    </Fragment>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
