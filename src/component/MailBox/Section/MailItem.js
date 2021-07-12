import classNames from "classnames";
import React, { useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext } from "../../../context/ColorContext";
import { setRead } from "../../../reducer/mail";

function MailItem({ id, read, title, from, time }) {
  const dispatch = useDispatch();
  const { selectedId } = useSelector((state) => state.mail);
  const { state } = useContext(ThemeContext);

  const selectedItemRef = useRef(null);

  const scrollToSelected = () =>
    selectedItemRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  useEffect(() => {
    if (id === selectedId) {
      scrollToSelected();
    }
  }, [id, selectedId]);

  return (
    <div
      className={classNames(
        "mail_items",
        { selected: id === selectedId },
        { theme_light: state.theme === "light" },
        { theme_dark: state.theme === "dark" }
      )}
      onClick={() => {
        dispatch(setRead(id));
      }}
      ref={selectedItemRef}
    >
      <div className="mail_items_trunc" data-read={read}></div>
      <div className="mail_items_title trunc">{title}</div>
      <div className="mail_items_sub">
        <span className="mail_items_from trunc">{from}</span>
        <span className="mail_items_time trunc">{time.split(" ")[0]}</span>
      </div>
    </div>
  );
}

export default MailItem;
