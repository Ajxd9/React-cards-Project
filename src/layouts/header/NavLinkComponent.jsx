import React from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const NavLinkComp = ({ to, children }) => {
  const location = useLocation();

  const isActive = () => {
    // Check if the current location pathname starts with the 'to' prop
    return location.pathname.startsWith(to);
  };

  return (
    <RouterNavLink
      to={to}
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
      activeStyle={{
        color: "text.headerActive",
        fontWeight: "bold",
      }}
      isActive={isActive}
    >
      <Box
        sx={{
          p: 2,
          borderRadius: "4px",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "background.paper",
          },
        }}
      >
        <Typography color="text.headerColor" variant="h6">
          {children}
        </Typography>
      </Box>
    </RouterNavLink>
  );
};

export default NavLinkComp;
