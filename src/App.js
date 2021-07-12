import React, { useContext, useEffect } from "react";
import MailBox from "./component/MailBox/MailBox";
import Switch from "./component/Switch/Switch";
import "./App.scss";
import { ThemeContext } from "./context/ColorContext";

function App() {
  const { dispatch } = useContext(ThemeContext);

  useEffect(() => {
    let theme = localStorage.getItem("theme");

    // 사용자 OS 테마적용
    if (!theme) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      theme = matches ? "dark" : "light";
      localStorage.setItem("theme", theme);
    }
    theme === "dark" && dispatch({ type: "DARK_MODE" });
    theme === "light" && dispatch({ type: "LIGHT_MODE" });
  }, [dispatch]);

  return (
    <div className="main">
      <Switch />
      <div className="mail_wrapper">
        <MailBox />
      </div>
    </div>
  );
}

export default App;
