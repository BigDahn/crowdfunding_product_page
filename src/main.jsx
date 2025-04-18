import { StrictMode } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MainContextPage } from "./contexts/MainContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextPage>
      <App />
    </MainContextPage>
    {console.log(document.getElementById("root"))}
  </StrictMode>
);
