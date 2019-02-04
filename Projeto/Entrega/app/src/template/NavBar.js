import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Button, Toolbar} from "@material-ui/core";
import logo from "../images/logo_sm.png";

const NavBar = (props) => {

  const home = (props) => <Link to="/" {...props}>Home</Link>;
  const browse = (props) => <Link to="/browse" {...props}>Games</Link>
  const calendar = (props) => <Link to="/calendar" {...props}>Calendário</Link>
  const blog = (props) => <Link to="/blog" {...props}>Blog</Link>

  const logotop = <img alt={'VGC3000 - Video Games Community'} src={logo} className={'logo'}/>
  return (
    <AppBar position="sticky">
      <Toolbar>
        {logotop}
        <Button component={home} color="inherit">Home</Button>
        <Button component={browse} color="inherit">Games</Button>
        {/*<Button component={calendar} color="inherit">Calendário</Button>
        <Button component={blog} color="inherit">Blog</Button>*/}
      </Toolbar>
    </AppBar>

  );
}

export default NavBar;