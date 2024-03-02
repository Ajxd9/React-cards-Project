import {
  alwaysLinks,
  loggedInLinks,
  bizLinks,
  loggedOutLinks,
  adminLinks,
} from "../../myLinks";
import NavLinkComp from "../NavLinkComponent";
import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import LoginContext from "../../../store/loginContext";

const Links = () => {
  const { login } = useContext(LoginContext);
  const { token } = login; // Access the token from the login state if login exists

  useEffect(() => {
    // Code that relies on the token
    console.log("Token in YourOtherComponent:", token);
  }, [token]);

  const loggedIn = login;
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: {
          xs: { xs: "flex", flexDirection: "column" },
          sm: "flex",
          md: "flex",
        },
      }}
    >
      {alwaysLinks.map((item, index) => (
        <NavLinkComp to={item.to} key={"navlink" + index}>
          {item.children}
        </NavLinkComp>
      ))}
      {loggedIn.user &&
        loggedInLinks.map((item, index) => (
          <NavLinkComp to={item.to} key={"navlink1" + index}>
            {item.children}
          </NavLinkComp>
        ))}
      {loggedIn.user &&
        loggedIn.role === "Business" &&
        bizLinks.map((item, index) => (
          <NavLinkComp to={item.to} key={"navlink2" + index}>
            {item.children}
          </NavLinkComp>
        ))}
      {loggedIn.role === "Normal" &&
        loggedIn.isAdmin &&
        adminLinks.map((item, index) => (
          <NavLinkComp to={item.to} key={"navlink3" + index}>
            {item.children}
          </NavLinkComp>
        ))}
      {loggedIn.role === "" &&
        loggedOutLinks.map((item, index) => (
          <NavLinkComp to={item.to} key={"navlink4" + index}>
            {item.children}
          </NavLinkComp>
        ))}
    </Box>
  );
};

export default Links;
