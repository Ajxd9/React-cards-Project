import { IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = ({ to, children}) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <IconButton 
          color={isActive ? "text.headerActive" : "text.headerColor"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          {children}
          </IconButton>
      )}
    </NavLink>
  );
};

export default Footer;