import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Drawer,
  ListItemIcon,
} from "@mui/material";
import { useState, Fragment, useContext } from "react";
import loginContext from "../../../store/loginContext";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FeedIcon from "@mui/icons-material/Feed";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/ROUTES";
import { toast } from "react-toastify";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const LeftDrawerComponent = ({ isOpen, onCloseDrawer }) => {
  let navigate = useNavigate();
  let { login, setLogin } = useContext(loginContext);
  const handleSignUp = () => {
    navigate(ROUTES.SIGNUP);
  };
  const handleLogOutOrIn = () => {
    if (login) {
      setLogin(false);
      localStorage.clear();
      toast.success("🦄 LoggedOut Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(ROUTES.LOGIN);
    } else {
      navigate(ROUTES.LOGIN);
    }
  };
  const handleHome = () => {
    navigate(ROUTES.HOME);
  };
  const handleAboutUs = () => {
    navigate(ROUTES.ABOUT);
  };
  const handleProfile = () => {
    navigate(ROUTES.PROFILE);
  };
  const handleFav = () => {
    navigate(ROUTES.FAVCARDS);
  };
  const handleMyCards = () => {
    navigate(ROUTES.MYCARDS);
  };
  const handleAdminDash = () => {
    navigate(ROUTES.ADMIN_DASH);
  };
  const list = () => (
    <Box
      sx={{ width: { auto: 250 } }}
      role="presentation"
      onClick={onCloseDrawer}
      onKeyDown={onCloseDrawer}
    >
      {login && (
        <ListItem key="LogOut" disablePadding>
          <ListItemButton onClick={handleLogOutOrIn}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="LogOut" />
          </ListItemButton>
        </ListItem>
      )}
      {!login && (
        <ListItem key="Sign In" disablePadding>
          <ListItemButton onClick={handleLogOutOrIn}>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Sign In" />
          </ListItemButton>
        </ListItem>
      )}
      {!login && (
        <ListItem key="Sign up" disablePadding>
          <ListItemButton onClick={handleSignUp}>
            <ListItemIcon>
              <PersonAddAltIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItemButton>
        </ListItem>
      )}
      <Divider />
      <ListItem key="Home" disablePadding>
        <ListItemButton onClick={handleHome}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem key="About Us" disablePadding>
        <ListItemButton onClick={handleAboutUs}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItemButton>
      </ListItem>
      <Divider />
      {login && (
        <ListItem key="Profile" disablePadding>
          <ListItemButton onClick={handleProfile}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      )}
      <Divider />
      <List>
        {login && (
          <ListItem key="Fav Cards" disablePadding>
            <ListItemButton onClick={handleFav}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Fav Cards" />
            </ListItemButton>
          </ListItem>
        )}
        {login && (login.role === "Business" || login.role === "Admin") && (
          <ListItem key="My Cards" disablePadding>
            <ListItemButton onClick={handleMyCards}>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="My Cards" />
            </ListItemButton>
          </ListItem>
        )}
        {login && login.role === "Admin" && (
          <ListItem key="CRM" disablePadding>
            <ListItemButton onClick={handleAdminDash}>
              <ListItemIcon>
                <ArchiveIcon />
              </ListItemIcon>
              <ListItemText primary="SandBox" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );
  return (
    <Drawer anchor="left" open={isOpen} onClose={onCloseDrawer}>
      {list()}
    </Drawer>
  );
};

export default LeftDrawerComponent;
