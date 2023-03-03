import HomePage from "./component/HomePage";
import Navbar from "./component/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "./component/ThemeToggler";
function App() {
  const { theme } = useContext(themeContext);
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ minHeight: "100vh" }}>
        <Navbar />
        <HomePage />
      </Paper>
    </ThemeProvider>
  );
}
export default App;
