import React from "react";

import { Button } from "@mui/material";
import { Link } from "react-scroll";

export const NavButton = ({ scrollTo, navSection }) => (
  <Button
    color="inherit"
    sx={{
      "&:hover": {
        backgroundColor: "#b0c4de",
      },
    }}
  >
    <Link to={scrollTo} spy={true} smooth={true} duration={500}>
      {navSection}
    </Link>
  </Button>
);
