
import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import HeaderComponent from '../layouts/header/HeaderComponent';
import MainComponent from './main/MainComponent';
import {useState } from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import tmc from "twin-moon-color";
import useAutoLogin from '../hooks/useAutoLogin'
import CardDataProvider from '../store/CardDataProvider';
import FooterComponent from './footer/FooterComponent';
import 'ldrs/bouncy';
import { Typography } from '@mui/material';


const LayoutPage = ({children,isLoading}) => {
      const AutoLogin = useAutoLogin();
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
          <CardDataProvider>
          <HeaderComponent
            isDarkTheme={isDarkTheme}
            onThemeChange={handleThemeChange}
          />
          <MainComponent>{AutoLogin ? (
             children) : (
            <Typography>Loading...</Typography> )}</MainComponent>
          <FooterComponent />
          </CardDataProvider>
        </ThemeProvider>
      );
    };

export default LayoutPage;
