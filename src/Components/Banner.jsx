import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import myimage from "../Assets/Images/image13.png";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#E3E7A0",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",

      }}
      
    >

      <Grid container alignItems="center" spacing={2}>
      <img
            src={myimage}
            alt="picture"
            style={{ width: "20%",borderRadius: "10px" }}
          />
        {/* Left Content */}
        <Grid item xs={12} md={6}> 
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              
             EXPLORE THE FASHION OF BAGS

            </Typography>
            <Typography
             
              sx={{
                textTransform: "uppercase",
                color: { xs: "center", sm: "#212121" },
                fontWeight: "bold",
                pb: 3,
              }}
            >
             
            
            
         
            <ShoppingBagIcon/>
            <ShoppingBagIcon/>
            <ShoppingBagIcon/>
            <ShoppingBagIcon/>
            <br/>
            Buying a branded bag means investing in quality materials, craftsmanship, and a recognizable design that can elevate your style, serve as a status symbol, potentially hold its value over time, and reflect your personal taste through a trusted brand reputation; <br/>
            Perfect for an evening out, it features a new mini silhouette and details like the Gucci lettering chain.
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
