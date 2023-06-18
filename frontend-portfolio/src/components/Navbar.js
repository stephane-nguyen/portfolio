import React from "react";
import { AppBar, Toolbar, Stack, Button, Typography } from "@mui/material";

import resume from "../images/resume.pdf";

import { NavButton } from "./NavButton";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stéphane Nguyen
        </Typography>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
          <NavButton scrollTo={"about"} navSection={"About"} />
          <NavButton scrollTo={"experiences"} navSection={"Experiences"} />
          <NavButton scrollTo={"contact"} navSection={"Contact"} />
          <NavButton scrollTo={"projects"} navSection={"Projects"} />

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
