import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-scroll";
import "../App.css";

export const NavButton = ({ scrollTo, navSection }) => (
  <Button className="navbar-button">
    <Link to={scrollTo} spy={true} smooth={true} duration={500}>
      {navSection}
    </Link>
  </Button>
);
