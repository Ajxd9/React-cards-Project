import { CssBaseline } from "@mui/material";
import LayoutPage from "./layouts/LayoutPage";
import Router from "./routes/Router";
import LoginContext from "./store/loginContext";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import CardDataContext from "./store/CardDataContext";
import userContext from "./store/userContext";

function App() {
  const [login, setLogin] = useState(false);
  const [dataFromServer, setDataFromServer] = useState([]);
  const [copyCards, setCopyCards] = useState([]);
  const [user, SetUser] = useState([]);
  return (
    <CardDataContext.Provider
      value={{ dataFromServer, setDataFromServer, copyCards, setCopyCards }}
    >
      <userContext.Provider value={{ user, SetUser }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <CssBaseline />
          <ToastContainer />
          <LayoutPage>
            <Router />
          </LayoutPage>
        </LoginContext.Provider>
      </userContext.Provider>
    </CardDataContext.Provider>
  );
}

export default App;
