import React from "react";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export const JobCard = ({ logo, title, date, location, description }) => (
  <Card
    sx={{
      backgroundColor: "#E3F2FD",
      marginBottom: "10px",
      marginLeft: "20px",
    }}
  >
    <CardMedia
      component="img"
      style={{ width: "auto", maxHeight: "50px" }}
      image={logo}
      alt="Logo"
    />
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1">{date}</Typography>
      <Typography variant="subtitle2">{location}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);
