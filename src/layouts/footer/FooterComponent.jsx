import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useNavigate, Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ROUTES from "../../routes/ROUTES";
import { useContext, useState } from "react";
import LoginContext from "../../store/loginContext";

const FooterComponent = () => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState(null);

  const alwaysIcons = [
    { value: ROUTES.ABOUT, icon: <InfoIcon />, label: "About" },
  ];
  const loggedInIcons = [
    { value: ROUTES.FAV_CARDS, icon: <FavoriteIcon />, label: "Favorites" },
  ];
  const loggedInBizAndAdminIcons = [
    { value: ROUTES.MY_CARDS, icon: <AccountBoxIcon />, label: "My Cards" },
  ];

  const handleNavigationChange = (event, newValue) => {
    setSelectedValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper
      elevation={20}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, mt: 1, alignItems: "center" }}
    >
      <BottomNavigation showLabels value={selectedValue} onChange={handleNavigationChange}>
        {alwaysIcons.map((item, index) => (
          <BottomNavigationAction
            key={"nav" + index}
            label={item.label}
            icon={item.icon}
            component={Link}
            to={item.value}
          />
        ))}
        {loggedIn.user &&
          loggedInIcons.map((item, index) => (
            <BottomNavigationAction
              key={"nav" + index}
              label={item.label}
              icon={item.icon}
              component={Link}
              to={item.value}
            />
          ))}
        {loggedIn.user &&
          loggedIn.role === "Business" &&
          loggedInBizAndAdminIcons.map((item, index) => (
            <BottomNavigationAction
              key={"nav" + index}
              label={item.label}
              icon={item.icon}
              component={Link}
              to={item.value}
            />
          ))}
      </BottomNavigation>
    </Paper>
  );
};

export default FooterComponent;
