import React from "react";
import Image from "next/image";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => (
  <AppBar position="fixed">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Image
        src="/assets/svg/Caffeine_logo.svg"
        alt="Caffeine Logo"
        width="64"
        height="64"
      />
    </Toolbar>
  </AppBar>
);

export default Header;
