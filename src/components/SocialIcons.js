import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../App.css";

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <a
        href="https://github.com/stephane-nguyen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} className="social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/step-nguyen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} className="social-icon" />
      </a>
      <a href="mailto:stepdh01@gmail.com">
        <FaEnvelope size={24} className="social-icon" />
      </a>
    </div>
  );
}
