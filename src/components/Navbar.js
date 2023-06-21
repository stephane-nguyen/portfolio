import React from "react";
import { AppBar, Toolbar, Stack, Button, Typography, Box } from "@mui/material";
import resume from "../images/resume.pdf";
import { NavButton } from "./NavButton";
import "../App.css";

export default function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stéphane Nguyen
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction="row" spacing={2}>
            <NavButton scrollTo={"about"} navSection={"About"} />
            <NavButton scrollTo={"experiences"} navSection={"Experiences"} />
            <NavButton scrollTo={"contact"} navSection={"Contact"} />
            <NavButton scrollTo={"projects"} navSection={"Projects"} />
          </Stack>
        </Box>
        <Button color="inherit">
          <a
            className="button"
            href={resume}
            download="stephane_nguyen_resume.pdf"
          >
            Resume
          </a>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
