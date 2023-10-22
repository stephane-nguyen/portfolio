import React from "react";
import { Typography, Grid } from "@mui/material";

import sapLogo from "../images/sap_logo.png";
import thales_logo from "../images/thales_logo.png";

import { JobCard } from "../components/cards/JobCard";
import { JobAccomplishmentCard } from "../components/cards/JobAccomplishmentCard";
import { TechnologyCard } from "../components/cards/TechnologyCard";

export default function WorkExperience() {
  return (
    <>
      <div id="experiences">
        <Typography variant="h6" align="center" color="#1976d2">
          Work Experiences
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <JobCard
                logo={sapLogo}
                title="Full Stack Developer Apprentice"
                date="March 2022 - September 2024"
                location="Levallois-Perret, France"
                description="Worked on internal tools to improve productivity and reduce manual processes of the users"
              />
            </Grid>
            <Grid item xs={4}>
              <JobAccomplishmentCard text="Designed, implemented, unit tested, documented and deployed internal web applications to production using
                SAPUI5, Node.js/Express, MongoDB, RESTful APIs and private cloud VMs."
              />
            </Grid>
            <Grid item xs={1}>
              <TechnologyCard technology="Javascript" />
              <TechnologyCard technology="SAPUI5" />
              <TechnologyCard technology="Node.js" />
              <TechnologyCard technology="MongoDB" />
              <TechnologyCard technology="Unit Testing" />
            </Grid>

            <Grid item xs={4}>
              <JobCard
                logo={sapLogo}
                title="Cloud Software Tester and Automation Intern"
                date="June 2023 - September 2023"
                location="Palo Alto, CA, USA"
                description="Worked on API performance testing and automation"
              />
            </Grid>
            <Grid item xs={4}>
              <JobAccomplishmentCard text="Automated daily test analysis by creating Python scripts for statistical processing. 
              Integrated them into the hotfix pipeline, enabling daily emails.
                Created unit and integration tests in Python.
                Leveraged JMeter to create test scenarios for evaluating API performance in
                critical interactive use cases. 
                Developed a Jenkins pipeline for automated test result reporting and to catch build issues." />
            </Grid>
            <Grid item xs={1}>
              <TechnologyCard technology="Python" />
              <TechnologyCard technology="Jenkins" />
              <TechnologyCard technology="JMeter" />
              <TechnologyCard technology="Testing" />
            </Grid>
            <Grid item xs={4}>
              <JobCard
                logo={thales_logo}
                title="Applied mathematics Engineer Apprentice"
                date="September 2021 - November 2021"
                location="Gennevilliers, France"
              />
            </Grid>
            <Grid item xs={4}>
              <JobAccomplishmentCard text="Provided a bibliographic study on a scheduling problem" />
            </Grid>
            <Grid item xs={1}>
              <TechnologyCard technology="Math research" />
              <TechnologyCard technology="Bibliographic study" />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
