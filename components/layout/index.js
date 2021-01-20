import React, { Fragment } from "react";
import Header from "./header";
import Drawer from "./drawer";
import Footer from "./footer";
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Drawer />
    <Container maxWidth="lg">{children}</Container>
    <Footer />
  </Fragment>
);

export default Layout;
