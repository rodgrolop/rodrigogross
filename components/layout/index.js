import React, { Fragment } from "react";
import Header from "./header";
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Container maxWidth="lg">{children}</Container>
  </Fragment>
);

export default Layout;
