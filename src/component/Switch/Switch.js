import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "context/ColorContext";
import "component/Switch/Switch.scss";

function Switch() {
  const { state, dispatch } = useContext(ThemeContext);

  const changeMode = () => {
    state.theme === "light" ? dispatch({ type: "DARK_MODE" }) : dispatch({ type: "LIGNT_MODE" });
  };

  return (
    <button
      type="button"
      className={classNames("btn_darkmode", {
        btn_light: state.theme === "light",
      })}
      onClick={changeMode}>
      BUTTON
    </button>
  );
}

export default Switch;
