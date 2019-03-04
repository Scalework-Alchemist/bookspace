import React from "react";
import { Link } from "react-router-dom";
//material ui components
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton, Typography } from "@material-ui/core";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class Navbar extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <Typography variant="display2" color="inherit" className={classes.grow}>
          Welcome to ßookSpace 
        </Typography>
        <Divider />
        <IconButton component={Link} to="/characters" color="secondary">
          <HomeIcon />
        </IconButton>
        <IconButton
          className={classes.menuButton}
          color="secondary"
          component={Link}
          to="/"
        >
          <MenuIcon />
        </IconButton>
        <Divider />
      </div>
    );

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          color="primary"
          onClick={this.toggleDrawer("top", true)}
        >
          <MenuIcon />
          Navigation
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          />
        </Drawer>
        <Drawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer("top", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("top", false)}
            onKeyDown={this.toggleDrawer("top", false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
