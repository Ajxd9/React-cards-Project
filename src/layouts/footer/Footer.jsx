import { IconButton } from '@mui/material';
import { NavLink } from "react-router-dom";
import React from 'react';

const Footer = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <IconButton 
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </IconButton>
    </NavLink>
  );
};

export default Footer;
