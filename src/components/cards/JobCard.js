import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./JobCard.css";

export const JobCard = ({ logo, title, date, location, description }) => {
  const cardStyle = {
    backgroundColor: "#333333",
    marginBottom: "10px",
    marginLeft: "20px",
    color: "#FFFFFF",
  };

  const mediaStyle = {
    width: "auto",
    maxHeight: "50px",
  };

  return (
    <Card style={cardStyle}>
      <CardMedia component="img" style={mediaStyle} image={logo} alt="Logo" />
      <CardContent>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="inherit">
          {date}
        </Typography>
        <Typography variant="subtitle2" color="inherit">
          {location}
        </Typography>
        <Typography variant="body2" color="inherit">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
