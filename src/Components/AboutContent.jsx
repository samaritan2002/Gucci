import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import myimage from "../Assets/Images/image12.png";

export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#FCFDAF", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={myimage}
            alt="picture"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900",fontSize:"80px" }}
            >
             GUCCI
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             Discover the iconic Jackie , including the Gucci Jackie with a hook closure, Jackie 1961 and the Gucci Jackie Notte. Free Shipping & Gift Wrapping.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify",fontWeight:"bold" }}
            >
              
              Founder: Louis Vuitton<br/>
Parent organization: LVMH<br/>
CEO: Pietro Beccari (1 Feb 2023–)
Customer service: 1800 103 9988<br/>
Founded: 1854, Paris, France<br/>
Headquarters: Paris, France<br/>
Number of employees: 19,000 (2013)<br/>
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
