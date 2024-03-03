import { useContext } from "react";
import loginContext from "../store/loginContext";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const BizGuard = ({ children }) => {
  let { login } = useContext(loginContext);
  if ((login && login.role === "Business") || login.role === "Admin") {
    return children;
  } else {
    return <Navigate to={ROUTES.HOME} />;
  }
};
export default BizGuard;
