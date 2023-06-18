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
        <Typography variant="h6" align="center" gutterBottom>
          Get in touch
        </Typography>
        <SocialIcons />
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
