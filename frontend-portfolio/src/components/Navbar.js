import React from "react";
import { AppBar, Toolbar, Stack, Button, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" srx={{ flexGrow: 1 }}>
          Stéphane Nguyen
        </Typography>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
          <Button color="inherit">About</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">Travel</Button>
          <Button color="inherit">Resume</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
