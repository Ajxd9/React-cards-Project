
import React from 'react'
import FooterComponent from './footer/FooterComponent'
import Navbar from '../components/Navbar/Navbar'
import MainComponent from './main/MainComponent'
import SigninPage from '../pages/LoginPage/SigninPage';
import { useEffect, useState } from 'react';
import HomePage from '../pages/HomePage';

const LayoutPage = ({children}) => {
    const current_theme=localStorage.getItem('current_theme');
  
    const [theme, setTheme] = useState(current_theme?current_theme:'light');
    useEffect(()=>{ localStorage.setItem('current_theme',theme);},[theme]);
  return ( 
    <div>
        <Navbar theme={theme} setTheme={setTheme}/>
        <MainComponent>
            {children}
        </MainComponent>
        <FooterComponent/>
    </div>
  );
};

export default LayoutPage;
