import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MainContextPage } from "./contexts/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContextPage>
      <App />
    </MainContextPage>
  </StrictMode>
);
