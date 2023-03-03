import { FaLaptop } from "react-icons/fa";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "./ThemeToggler";
function Navbar() {
  const { darkMode, setDarkMode, theme } = useContext(themeContext);
  return (
    <nav className="navbar p-3 shadow-2xl mb-16">
      <div className="text-sky-600  font-bold flex p-4 justify-center text-2xl items-center gap-3 m-auto">
        <FaLaptop className="text-4xl " />
        Origin system
      </div>
      <div>
        <div className="flex gap-2 items-center font-bold absolute top-[25px] right-[20px] md:right-[50px] ">
          <p
            className={`${
              theme.palette.mode === "dark" ? "text-white" : ""
            } capitalize hidden md:block`}
          >{`${theme.palette.mode} Mode`}</p>
          <IconButton
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon className="text-yellow-300" />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
