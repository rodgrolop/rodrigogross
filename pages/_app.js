import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";
import { ThemeProvider } from "@material-ui/core/styles";
// Context
import { DrawerContextProvider } from "../src/context";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Layout from "../components/layout";

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
            <AnimateSharedLayout>
              <motion.div
                key={router.route}
                initial="pageInitial"
                animate="pageAnimate"
                variants={{
                  pageInitial: {
                    opacity: 0,
                  },
                  pageAnimate: {
                    opacity: 1,
                  },
                }}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimateSharedLayout>
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
