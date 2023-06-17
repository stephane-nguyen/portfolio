import React from "react";

import SocialIcons from "../components/SocialIcons";

import { Typography } from "@mui/material";

export default function Contact() {
  return (
    <>
      <div id="contact">
        <Typography variant="h6" align="center" gutterBottom>
          Get in touch
        </Typography>
        <SocialIcons />
      </div>
    </>
  );
}
