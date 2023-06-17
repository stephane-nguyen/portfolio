import React from "react";
import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

export default function WorkExperience() {
  return (
    <>
      <div id="experience">
        <Typography variant="h6" align="center" gutterBottom>
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
            <Grid item xs={8}>
              <Card>
                <CardMedia
                  component="img"
                  style={{
                    width: "auto",
                    maxHeight: "200px",
                  }}
                  image="../images/sap_logo.png"
                  alt="SAP"
                />
                <CardContent>
                  <Typography variant="h6">SAP</Typography>
                  <Typography variant="subtitle1">
                    Full Stack Developer Apprentice
                  </Typography>
                  <Typography variant="body2">
                    March 2022 - September 2024
                  </Typography>
                  <Typography variant="body2">
                    Levallois-Perret, France
                  </Typography>
                  <Typography variant="body2">Description 1</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={8}>
              <Card>
                <CardMedia
                  component="img"
                  height="100"
                  image="../images/sap_logo.png"
                  alt="SAP"
                />
                <CardContent>
                  <Typography variant="h6">SAP</Typography>
                  <Typography variant="subtitle1">
                    Cloud Software Tester and Automation Intern
                  </Typography>
                  <Typography variant="body2">
                    June 2023 - September 2023
                  </Typography>
                  <Typography variant="body2">Palo Alto, CA, USA</Typography>
                  <Typography variant="body2">Description 1</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card>
                <CardMedia
                  component="img"
                  height="100"
                  image="/path/to/thales_logo.png"
                  alt="THALES"
                />
                <CardContent>
                  <Typography variant="h6">THALES</Typography>
                  <Typography variant="subtitle1">
                    Applied mathematics Engineer Apprentice
                  </Typography>
                  <Typography variant="body2">
                    September 2021 - November 2021{" "}
                  </Typography>
                  <Typography variant="body2">Gennevilliers, France</Typography>
                  <Typography variant="body2">Description 2</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
