import React, { useContext } from "react";
import classNames from "classnames";
import { FiTrash2 } from "react-icons/fi";
import { ThemeContext } from "context/ColorContext";
import { THEME } from "utils/constants";

function MailView({ selectedItem, onGotoTrash }) {
  const { id, title, from, time, msg, section } = selectedItem;
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        "mail_view",
        { theme_light: state.theme === THEME.LIGHT_MODE },
        { theme_dark: state.theme === THEME.DARK_MODE }
      )}>
      <div className={`mail_view_header`}>
        <h3 className="mail_view_title">{title}</h3>
        {section !== "trash" && <FiTrash2 className="btn_delete" onClick={() => onGotoTrash(id)} />}
        <div className="mail_sub">
          <div className="mail_view_from">{from}</div>
          <div className="mail_view_time">{time}</div>
        </div>
      </div>
      <div className="mail_view_msg">{msg}</div>
    </div>
  );
}

export default MailView;
