import React from "react";

//material ui components
import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
const Navbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="secondary"
            aria-label="Menu"
            component={Link} to="/"
          >
            <MenuIcon /> 
          </IconButton>
          <Typography
            variant="display2"
            color="inherit"
            className={classes.grow}
          >
            Welcome to ßookSpace
          </Typography>
          <IconButton component={Link} to="/characters" color="secondary">
            <HomeIcon >Login</HomeIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withStyles(styles)(Navbar);
