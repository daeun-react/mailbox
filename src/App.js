import React, { useContext, useEffect } from "react";
import { ThemeContext } from "context/ColorContext";
import MailBox from "component/MailBox/MailBox";
import Switch from "component/Switch/Switch";
import { THEME } from "utils/constants";
import "App.scss";

function App() {
  const { dispatch } = useContext(ThemeContext);

  useEffect(() => {
    let theme = localStorage.getItem("theme");

    // 사용자 OS 테마적용
    if (!theme) {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      theme = matches ? THEME.DARK_MODE : THEME.LIGHT_MODE;
      localStorage.setItem("theme", theme);
    }
    theme === THEME.DARK_MODE && dispatch({ type: THEME.DARK_MODE });
    theme === THEME.LIGHT_MODE && dispatch({ type: THEME.LIGHT_MODE });
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
