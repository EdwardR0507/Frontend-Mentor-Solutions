import { useState } from "react";

import { getThemeFromStorage } from "../../utils";
import { Theme, ThemeContext } from "./theme-context";

interface ThemeProps {
  children?: React.ReactNode | undefined;
}

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<Theme>(getThemeFromStorage());

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
