import { createContext } from "react";
import { ThemeContextType } from "../features/types";

const defaultValue: ThemeContextType = {
  currentTheme: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  changeCurrentTheme: (newTheme: "light" | "dark") => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultValue);

export default ThemeContext;
