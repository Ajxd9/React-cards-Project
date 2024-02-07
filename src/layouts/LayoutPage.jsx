
import React from 'react'
import FooterComponent from './footer/FooterComponent'
import Navbar from '../components/Navbar/Navbar'
import HeaderComponent from '../layouts/header/HeaderComponent'
import MainComponent from './main/MainComponent'
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import tmc from "twin-moon-color";

const LayoutPage = ({children}) => {
    //const current_theme=localStorage.getItem('current_theme');
  
   // const [theme, setTheme] = useState(current_theme?current_theme:'light');
   // useEffect(()=>{ localStorage.setItem('current_theme',theme);},[theme]);
   
      const [isDarkTheme, setDarkTheme] = useState(false);
    
      const themes = tmc({
        "text.headerColor": "!gray",
        "text.headerActive": "*white",
        favActive: "*#FB0000",
      });
    
      const darkMode = createTheme(themes.dark);
      const lightMode = createTheme(themes.light);
    
      const handleThemeChange = (checked) => {
        setDarkTheme(checked);
      };
    
      return (
        <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
          <CssBaseline />
          <HeaderComponent
            isDarkTheme={isDarkTheme}
            onThemeChange={handleThemeChange}
          />
          <MainComponent>{children}</MainComponent>
          <FooterComponent />
        </ThemeProvider>
      );
    };

export default LayoutPage;
