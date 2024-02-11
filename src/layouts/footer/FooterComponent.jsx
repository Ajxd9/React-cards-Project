import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Footer from "./Footer";
import ROUTES from "../../routes/ROUTES";
import { useContext } from "react";
import LoginContext from "../../store/loginContext";

const FooterComponent = () => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;

  const alwaysIcons = [
    { to: ROUTES.ABOUT, children: <InfoIcon />, label: "About" },
  ];
  const loggedInIcons = [
    { to: ROUTES.FAV_CARDS, children: <FavoriteIcon />, label: "Favorites" },
  ];
  const loggedInBizAndAdminIcons = [
    { to: ROUTES.MY_CARDS, children: <AccountBoxIcon />, label: "My Cards" },
  ];
  return (
    <Paper
      elevation={20} 
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, mt: 1 , alignItems:"center" }}
    >
      <BottomNavigation showLabels>
        {alwaysIcons.map((item, index) => (
          <Footer to={item.to} key={"nav" + index}>
            <BottomNavigationAction icon={item.children} />
          </Footer>
        ))}
        {loggedIn.user &&
          loggedInIcons.map((item, index) => (
            <Footer to={item.to} key={"nav" + index}>
              <BottomNavigationAction icon={item.children} />
            </Footer>
          ))}
        {loggedIn.user &&
          loggedIn.role === "Business" &&
          loggedInBizAndAdminIcons.map((item, index) => (
            <Footer to={item.to} key={"nav" + index}>
              <BottomNavigationAction icon={item.children} />
            </Footer>
          ))}
      </BottomNavigation>
    </Paper>
  );
};
export default FooterComponent;