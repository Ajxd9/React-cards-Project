// PrivateLinks.js
import Links from "../Links";
import { useContext } from "react";
import LoginContext from "../store/loginContext";

const PrivateLinks = () => {
  const { login, isBuisness, isAdmin } = useContext(LoginContext);
  const loggedIn = login !== null;

  if (loggedIn) {
    return <Links isBuisness={isBuisness} isAdmin={isAdmin} />;
  }

  return <Links />;
};

export default PrivateLinks;