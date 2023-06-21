import React from "react";

import Contact from "../pages/Contact";

import { Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <footer>
            <Contact />
            <Typography variant="body1" align="center">
              Designed and built by Stéphane Nguyen
            </Typography>
          </footer>
        </Grid>
      </Grid>
    </>
  );
}
