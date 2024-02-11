import React from 'react'

import { Container, Paper, Grid, Divider } from '@mui/material';
import ContactForm from './ui/ContactForm';
import AboutUs from './ui/AboutUs';
const AboutPage = () => {
  return (
    <Container
        maxWidth="100%"
        height="100vh"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <Paper elevation={3} style={{ flex: 1, overflow: 'auto' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <AboutUs />
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Paper>
      </Container>

  );
};

export default AboutPage;
