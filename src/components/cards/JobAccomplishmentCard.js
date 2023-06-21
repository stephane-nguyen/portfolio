import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const JobAccomplishmentCard = ({ text }) => {
  const cardStyle = {
    backgroundColor: "#333333",
    color: "#FFFFFF",
    marginBottom: "10px",
    marginLeft: "20px",
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="body1" color="inherit">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
