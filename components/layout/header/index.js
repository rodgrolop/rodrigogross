import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuButton from "./menu_button";

import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <MenuButton />
        <img
          src="/assets/svg/Caffeine_logo.svg"
          alt="Caffeine Logo"
          width="64"
          height="64"
          className={classes.logo}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
