import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import headerStyles from "./header.module.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
    this.handlerDrawerToggle = this.handlerDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handlerDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.headerColorChange);
  }
  headerColorChange() {
    const {changeColorOnScroll} = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove();
      document.body
        .getElementsByTagName("header")[0]
        .classList.add();
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add();
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove();
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    return (
      <AppBar className={headerStyles.header}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            onClose={this.handlerDrawerToggle}
          >
          </Drawer>
        </Hidden>
      </AppBar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,

}

Header.defaultProps = {
  siteTitle: `Vasylb`,
}

export default Header;
