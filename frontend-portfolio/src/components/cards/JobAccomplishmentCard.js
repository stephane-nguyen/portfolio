import React from "react";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export const JobAccomplishmentCard = ({ backgroundColor, text }) => (
  <Card sx={{ backgroundColor: backgroundColor, marginBottom: "10px" }}>
    <CardMedia style={{ width: "auto", maxHeight: "50px" }} />
    <CardContent>
      <Typography variant="body1">{text}</Typography>
    </CardContent>
  </Card>
);
