import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerWrapper}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs></Grid>
          <Grid item xs></Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
