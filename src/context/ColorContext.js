import { createContext, useReducer } from "react";
import { THEME } from "utils/constants";

const initialState = {
  theme: THEME.LIGHT_MODE,
};

const reducer = (state, action) => {
  switch (action.type) {
    case THEME.DARK_MODE:
      localStorage.setItem("theme", THEME.DARK_MODE);
      return { theme: THEME.DARK_MODE };
    case THEME.LIGHT_MODE:
      localStorage.setItem("theme", THEME.LIGHT_MODE);
      return { theme: THEME.LIGHT_MODE };
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>
  );
};
