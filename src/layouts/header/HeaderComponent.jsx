import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Switch, Avatar } from "@mui/material";
import Links from "./ui/Links";
import FilterComponent from "./ui/FilterComponent";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../store/loginContext";
import { useContext } from "react";
import ROUTES from "../../routes/ROUTES";

const HeaderComponent = ({ isDarkTheme, onThemeChange }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
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
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Remove token from sessionStorage
    sessionStorage.removeItem("token");

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
              {login.user ? (
                <Avatar alt="User Avatar" src={login.user.url} />
              ) : (
                <ArrowDropDownIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMenu}
    </Box>
  );
};

export default HeaderComponent;
