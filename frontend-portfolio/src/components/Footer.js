import React from "react";
import { Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <footer>
          <Typography variant="body1" align="center">
            Designed and built by Stéphane Nguyen
          </Typography>
        </footer>
      </Grid>
    </Grid>
  );
}
