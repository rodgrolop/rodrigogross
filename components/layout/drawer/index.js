import React, { useContext } from "react";

// Context
import { DrawerContext } from "../../../src/context";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Typography from "@material-ui/core/Typography";

// Temporary test
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const Drawer = () => {
  const { dispatch, state } = useContext(DrawerContext);
  const classes = useStyles();
  const { open, anchor, variant } = state;

  const openDrawer = () => dispatch({ type: "openDrawer" });

  const closeDrawer = () => dispatch({ type: "closeDrawer" });

  return (
    <SwipeableDrawer
      anchor={anchor}
      variant={variant}
      open={open}
      onOpen={openDrawer}
      onClose={closeDrawer}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={() => closeDrawer()}
        onKeyDown={() => closeDrawer()}
      >
        <Typography variant="h6" color="inherit">
          Hang on, there will be stuff here soon
        </Typography>
      </div>
    </SwipeableDrawer>
  );
};

export default Drawer;
