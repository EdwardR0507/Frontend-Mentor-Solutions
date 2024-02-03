import { createContext } from "react";

export type Theme = "light" | "dark";

interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext({} as IThemeContext);
