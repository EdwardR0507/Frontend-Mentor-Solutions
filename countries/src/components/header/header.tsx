import { useEffect } from "react";

import { useTheme } from "../../context/theme/useTheme";
import { saveThemeInStorage } from "../../utils";
import { MoonIcon, SunIcon } from "../icons";
import styles from "./header.module.css";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    saveThemeInStorage(theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Where in the world?</h1>
      <button
        className={styles.header__button}
        type="button"
        onClick={handleThemeChange}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </header>
  );
};
