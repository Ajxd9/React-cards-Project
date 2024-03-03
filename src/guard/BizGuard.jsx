import { useContext } from "react";
import loginContext from "../store/loginContext";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const BizGuard = ({ children }) => {
  let { login } = useContext(loginContext);
 
  if ((login && login.role==="Business")) {
    return children;
  } else {
    console.log("From BizGuard"+login.role);
    return <Navigate to={ROUTES.HOME} />;
  }
};
export default BizGuard;