import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuButton from "./menu_button";
import Image from "next/image";

import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";

const useStyles = makeStyles(styles);

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Image
          src="/assets/common/logo.png"
          alt="Caffeine Logo"
          width={64}
          height={64}
        />
        <MenuButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
