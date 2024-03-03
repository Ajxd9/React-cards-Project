import { useContext,useEffect,useState } from "react";
import  axios from "axios";
import { jwtDecode } from "jwt-decode";
import LoginContext from "../store/loginContext";

const useAutoLogin = () => {
  const { login,setLogin } = useContext(LoginContext);
  const [finishAutoLogin, setFinishAutoLogin] = useState(false);
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setFinishAutoLogin(true);
      return;
    }
    let userData = jwtDecode(token);
    if (!userData || !userData._id) {
      setFinishAutoLogin(true);
      return;
    }
    const checkUserById = async () => {
      try {
        const res = await axios.get(`/users/` + userData._id);
        if (res.status === 200) {
          setLogin({
            user: userData,
            role: userData.isAdmin
              ? "Admin"
              : userData.isBusiness
              ? "Business"
              : !userData.isAdmin && !userData.isBusiness ? "Normal" : "",
          });
          setFinishAutoLogin(true);
        }
      } catch (error) {
      } finally {
        setFinishAutoLogin(true);
      }
    };
    checkUserById();
  }, [token, setLogin]);

  return finishAutoLogin;
};

export default useAutoLogin;