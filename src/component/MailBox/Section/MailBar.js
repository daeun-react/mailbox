import React from "react";
import classNames from "classnames";
import { FiMail, FiTrash2 } from "react-icons/fi";
import { STATUS } from "utils/constants";

function MailBar({ data, section, onSectionChange }) {
  const notReadMailCount = data.filter(
    (item) => item.section === STATUS.MAIL && item.read === "false"
  ).length;

  const notReadTrashCount = data.filter((item) => item.section === STATUS.TRASH).length;

  return (
    <aside className="sidebar">
      <ul className="sidebar_container">
        <li onClick={() => onSectionChange(STATUS.MAIL)}>
          <button type="button" className={classNames({ active: section === STATUS.MAIL })}>
            <span>
              <FiMail />
              <span> 받은 메일함 </span>
            </span>
            <span className="count">{notReadMailCount}</span>
          </button>
        </li>

        <li onClick={() => onSectionChange(STATUS.TRASH)}>
          <button type="button" className={classNames({ active: section === STATUS.TRASH })}>
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
