import React, { useEffect, useState } from "react";

import { Typography, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import SocialIcons from "../components/SocialIcons";

export default function Contact() {
  /* Back to top button */
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const shouldShow = scrollTop > 300; // Scroll Threshold from when the button appears
    setShowBackToTop(shouldShow);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="contact">
        <Typography variant="h6" align="center" gutterBottom color="#1976d2">
          Get in touch
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SocialIcons />
        </div>
      </div>
      {showBackToTop && (
        <IconButton
          color="inherit"
          onClick={handleBackToTop}
          sx={{ position: "fixed", bottom: "16px", right: "16px" }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </>
  );
}
