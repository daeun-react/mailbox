import classNames from "classnames";
import React, { useContext } from "react";
import { ThemeContext } from "context/ColorContext";
import { MailItem } from "component/MailBox/Section";
import { THEME } from "utils/constants";

function MailList({ data, section }) {
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={classNames("mail_list", {
        theme_dark: state.theme === THEME.DARK_MODE,
      })}>
      {data
        .filter((item) => item.section === section)
        .map((mail) => (
          <MailItem key={mail.id} {...mail} />
        ))}
    </div>
  );
}

export default MailList;
