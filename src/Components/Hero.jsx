import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../Assets/Images/image15.png";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "120vh",
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundColor:"000000b8",
        flexDirection: "row",
         backgroundImage: `url(${image})`
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
         
        }}
      >
        
        < Typography
          sx={{
            fontWeight: "1000",
            fontSize: { xs: "80px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",textAlign:"left",md: "right",
          }}
          gutterBottom 
        >
 WELCOME TO GUCCI
          
        </Typography>
        {/* <Typography
          gutterBottom
          sx={{ fontWeight: "1000", fontSize: "50px",color: "#000000b8" }}
        >
      
        </Typography> */}
        {/* <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
          Beauty is commonly described as a feature of objects that makes them pleasurable to perceive. Such objects include landscapes, sunsets, humans and works of art. Beauty, art and taste are the main subjects of aesthetics, one of the fields of study within philosophy.
        </Typography> */}
      </Box>
    </Box>
  );
}
