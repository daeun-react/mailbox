import React from "react";
import { FiMail, FiTrash2 } from "react-icons/fi";
import classNames from "classnames";

function MailBar({ data, section, onSectionChange }) {
  const notReadMailCount = data.filter(
    (item) => item.section === "inbox" && item.read === "false"
  ).length;

  const notReadTrashCount = data.filter(
    (item) => item.section === "trash" && item.read === "false"
  ).length;

  return (
    <aside className="sidebar">
      <ul className="sidebar_container">
        <li onClick={() => onSectionChange("inbox")}>
          <button
            type="button"
            className={classNames({ active: section === "inbox" })}
          >
            <span>
              <FiMail />
              <span> 받은 메일함 </span>
            </span>
            <span className="count">{notReadMailCount}</span>
          </button>
        </li>

        <li onClick={() => onSectionChange("trash")}>
          <button
            type="button"
            className={classNames({ active: section === "trash" })}
          >
            <span>
              <FiTrash2 />
              <span> 지운 메일함 </span>
            </span>
            <span className="count">{notReadTrashCount}</span>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default MailBar;
