import React from 'react';
import { Box, Typography } from '@mui/material';
import cake from '../Images/Cake-image.jpg'
import "../styles/About.css";

const About = () => {
  return (

    <Box
      sx={{
        my: 4,
        textAlign: "center",
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4 ": {
            fontSize: "1.5rem",
          },
        },
      }}
    >
      <Typography variant='h4'> Welcome To My Cake Shop </Typography>
      <div className='cake'>
        <div>
          <img src={cake} alt='cake' />
        </div>
        <div >
          <p>
            At Cake Shop, we take pride in crafting exquisite and mouthwatering treats that are not just desserts but edible works of art. Our passion for baking is infused into every recipe, ensuring that each cake is a masterpiece of flavor and creativity.
            Make your celebrations extraordinary with our custom cake services. Whether it's a birthday, wedding, or any special occasion, we'll work closely with you to create a cake that reflects your style and taste. Our goal is to turn your sweet dreams into edible reality.
          </p>
          <p>
            We at The Cake Shop specialize in Desserts & Cakes. we believe in "Quality in our Edge", from selecting the ingredients around India to the final exqusite creation that "Bring you smiles for Sure"
            Our cakes & Desserts receive a lot of compliments and are complimented by wide range of exclusive desserts.Our theme based Creative Cakes, Cake pop , Cup Cakes and Desserts for Parities, make you Party Unique and Inevitable. We spend more time in understanding customers expectation,
            So we Perfectly Personalize to the Needs
          </p>
          <p>
            The Cake Shop is a Cake Studio specializing in Wedding cakes, Custom Cakes, and Dessert Bars. We also offer a variety of bite sized treats. Everything is made from scratch in house and with locally sourced ingredients when possible.
            The Cake Shop is not a retail bakery. We are by appointment only. This way we can give each of our clients and their order the care and attention they deserve. We love working with our clients to make their dessert dreams come true!
          </p>
        </div>
      </div>
    </Box>
  );
};

export default About;
