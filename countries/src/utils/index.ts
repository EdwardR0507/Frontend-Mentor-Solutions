import { Theme } from "../context/theme/theme-context";

export const getThemeFromStorage = () => {
  const theme = window.localStorage.getItem("theme") as Theme;
  return theme;
};

export const saveThemeInStorage = (theme: Theme) => {
  window.localStorage.setItem("theme", theme);
};
