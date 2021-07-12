import { createContext, useReducer } from "react";

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DARK_MODE":
      localStorage.setItem("theme", "dark");
      return { theme: "dark" };
    case "LIGNT_MODE":
      localStorage.setItem("theme", "light");
      return { theme: "light" };
    default:
      return state;
  }
};

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
