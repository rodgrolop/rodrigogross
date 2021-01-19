import React, { Fragment } from "react";
import Header from "./header";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Container maxWidth="lg">{children}</Container>
    <Footer />
  </Fragment>
);

export default Layout;
