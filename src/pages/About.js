import React from "react";
import { Typography } from "@mui/material";

export default function AboutMe() {
  return (
    <>
      <div id="about">
        <Typography variant="h6" align="center" gutterBottom color="#1976d2">
          Get to know me
        </Typography>

        <Typography variant="body1" paragraph color="common.white">
          Hello, nice to meet you! I'm Stéphane and I'm 21 years old. I come
          from a math background, but I made a deliberate decision to switch my
          major to Computer Science. I made this choice because I realized that
          I have a strong affinity for programming, building applications,
          problem-solving, and learning about the principles involved in
          software engineering.
        </Typography>

        <Typography variant="body1" paragraph color="common.white">
          Currently, I am working as a full stack developer at SAP, where I
          contribute to the development of internal web applications. Being part
          of a cross-engineering team, I provide support and collaborate with
          other teams to create and enhance tools for improved efficiency.I am
          proficient in languages such as Python, Java, JavaScript.
        </Typography>

        <Typography variant="body1" paragraph color="common.white">
          I find great satisfaction in utilizing my experience to make a
          meaningful impact and positively influence as many people as possible.
          Working alongside talented and driven colleagues is an environment in
          which I thrive. If you would like to connect for a discussion, please
          feel free to reach out to me.
        </Typography>
      </div>
    </>
  );
}
