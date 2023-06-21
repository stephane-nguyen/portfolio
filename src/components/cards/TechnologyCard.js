import React from "react";

export const TechnologyCard = ({ technology }) => {
  const cardStyle = {
    backgroundColor: "#333333",
    color: "#FFFFFF",
    marginBottom: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={cardStyle}>
      <span>{technology}</span>
    </div>
  );
};
