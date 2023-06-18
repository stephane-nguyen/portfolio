import React from "react";

import { Card } from "@mui/material";

export const TechnologyCard = ({ backgroundColor, technology }) => (
  <Card
    sx={{
      backgroundColor: backgroundColor,
      marginBottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {technology}
  </Card>
);
