import React from "react";
import { AppBar, Toolbar, Stack, Button, Typography } from "@mui/material";

import { Link } from "react-scroll";

import resume from "../images/resume.pdf";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" srx={{ flexGrow: 1 }}>
          Stéphane Nguyen
        </Typography>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
          <Button color="inherit">
            <Link to="about" spy={true} smooth={true} duration={500}>
              About
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="experience" spy={true} smooth={true} duration={500}>
              Experience
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="travel" spy={true} smooth={true} duration={500}>
              Travel
            </Link>
          </Button>
          <Button color="inherit">
            <a
              className="button"
              href={resume}
              download="stephane_nguyen_resume.pdf"
            >
              Resume
            </a>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
