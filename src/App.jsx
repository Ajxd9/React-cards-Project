import { CssBaseline } from "@mui/material";
import LayoutPage from "./layouts/LayoutPage";
import Router from "./routes/Router";

function App() {
  return (
    <div className="container">
      <CssBaseline />
      <LayoutPage>
        <Router />
      </LayoutPage>
    </div>
  );
}

export default App;
