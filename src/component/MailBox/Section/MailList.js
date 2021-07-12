import classNames from "classnames";
import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ColorContext";
import MailItem from "./MailItem";

function MailList({ data, section }) {
  const { state } = useContext(ThemeContext);

  return (
    <div
      className={classNames("mail_list", {
        theme_dark: state.theme === "dark",
      })}
    >
      {data
        .filter((item) => item.section === section)
        .map((mail) => (
          <MailItem key={mail.id} {...mail} />
        ))}
    </div>
  );
}

export default MailList;
