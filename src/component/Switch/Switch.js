import React, { useContext } from "react";
import classNames from "classnames";
import { ThemeContext } from "context/ColorContext";
import { THEME } from "utils/constants";
import "component/Switch/Switch.scss";

function Switch() {
  const { state, dispatch } = useContext(ThemeContext);

  const changeMode = () => {
    state.theme === THEME.LIGHT_MODE
      ? dispatch({ type: THEME.DARK_MODE })
      : dispatch({ type: THEME.LIGHT_MODE });
  };

  return (
    <button
      type="button"
      className={classNames("btn_darkmode", {
        btn_light: state.theme === THEME.LIGHT_MODE,
      })}
      onClick={changeMode}>
      BUTTON
    </button>
  );
}

export default Switch;
