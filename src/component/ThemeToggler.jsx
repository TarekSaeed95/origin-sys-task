import { createContext, useState } from "react";
import { createTheme } from "@mui/material/styles";
export const themeContext = createContext();
function ThemeTogglerProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <themeContext.Provider value={{ theme,setDarkMode,darkMode }}>{children}</themeContext.Provider>
  );
}
export default ThemeTogglerProvider;
