import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={10}>
      <Toolbar>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
