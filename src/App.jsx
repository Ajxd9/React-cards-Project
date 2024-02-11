import { CssBaseline } from "@mui/material";
import LayoutPage from "./layouts/LayoutPage";
import Router from "./routes/Router";
import LoginContext from "./store/loginContext";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [login ,setLogin] = useState({
    user: null,
    role: "",
  })
  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <CssBaseline />
      <ToastContainer />
      <LayoutPage>
        <Router />
      </LayoutPage>
    </LoginContext.Provider>
  );
}

export default App;
