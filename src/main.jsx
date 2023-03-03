import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeTogglerProvider, { themeContext } from "./component/ThemeToggler";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeTogglerProvider>
      <App />
    </ThemeTogglerProvider>
  </React.StrictMode>
);
