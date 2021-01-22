import React, { useContext } from "react";

// Context
import { DrawerContext } from "../../../../src/context";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const MenuButton = () => {
  const { dispatch, state } = useContext(DrawerContext);

  const openDrawer = () => {
    dispatch({ type: "openDrawer" });
  };

  const closeDrawer = () => {
    dispatch({ type: "closeDrawer" });
  };

  return (
    <IconButton
      color="inherit"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={openDrawer}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
