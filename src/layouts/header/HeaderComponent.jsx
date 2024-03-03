import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Switch, Avatar } from "@mui/material";
import Links from "./ui/Links";
import FilterComponent from "./ui/FilterComponent";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../store/loginContext";
import { useState,useContext } from "react";
import ROUTES from "../../routes/ROUTES";
import {toast} from "react-toastify";
import LeftDrawerComponent from "./ui/LeftDrawerComponent";
import Hidden from "@mui/material/Hidden";
const HeaderComponent = ({ isDarkTheme, onThemeChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { setLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    navigate(ROUTES.PROFILE);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleOpenDrawerClick = () => {
    setIsOpen(true);
  };
  const handleCloseDrawerClick = () => {
    setIsOpen(false);
  };
  const handleThemeChange = (event) => {
    onThemeChange(event.target.checked);
  };

  const handleNavigateToProfile = () => {
    navigate(ROUTES.USER_PROFILE);
    handleMenuClose();
  };

  const handleNavigateToEditProfile = () => {
    navigate(ROUTES.EDIT_USER);
    handleMenuClose();
  };
  const handleLogout = () => {
    setLogin({ user:null, role:""});
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
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Navigate to the login route
    navigate(ROUTES.LOGIN);

    // Close the menu
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleNavigateToProfile}>Profile</MenuItem>
      <MenuItem onClick={handleNavigateToEditProfile}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static">
        <Toolbar>
        <Hidden mdUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleOpenDrawerClick}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Hidden>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography>

          <Links />
          <FilterComponent />
          <Box
            sx={{
              my: 2,
              p: 1,
            }}
          >
            <Typography sx={{ display: { xs: "none", md: "inline" } }}>
              {isDarkTheme ? "Dark" : "Light"} Mode
            </Typography>
            <Switch checked={isDarkTheme} onChange={handleThemeChange} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {setLogin.user ? (
  <Box sx={{ display: { xs: "none", md: "flex" } }}>
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      {/* Assuming user contains an image URL */}
      <Avatar alt="User Avatar" src={setLogin.user.url} />
    </IconButton>
  </Box>
):<></>}

        </Toolbar>
        {renderMenu}
      </AppBar>

      
      <Hidden >
        <LeftDrawerComponent
          isOpen={isOpen}
          onCloseDrawer={handleCloseDrawerClick}
        />
      </Hidden>
    </Box>
  );
};

export default HeaderComponent;
