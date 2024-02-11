// AboutUs.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="100%" height="100vh">
      <Typography variant="h4" gutterBottom mt={5}>
        About Us
      </Typography>
      <Typography paragraph>
        Welcome to AJ's Cards, your trusted partner in crafting
        exceptional business visitation cards. At AJ's Cards, we believe
        in the power of first impressions. Our mission is to empower businesses
        to make lasting connections through high-quality, customized visitation
        cards that reflect professionalism, creativity, and attention to detail.
      </Typography>
      <Typography paragraph>
        With unrivaled quality, customization expertise, fast and reliable
        service, and a commitment to sustainability, AJ's Cards is here
        to elevate your professional image and make every business encounter a
        memorable experience.
      </Typography>
      <Typography paragraph>
        Join us on the journey of transforming ordinary moments into
        extraordinary connections. Thank you for choosing AJ's Cards.
      </Typography>
    </Container>
  );
};

export default AboutUs;
