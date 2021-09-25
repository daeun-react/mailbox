import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, setDelete, setSection } from "reducer/mail";
import { MailBar, MailList, MailView } from "component/MailBox/Section";
import "component/MailBox/MailBox.scss";

function MailBox() {
  const { selectedId, section, items } = useSelector((state) => state.mail);
  const dispatch = useDispatch();
  const onSectionChange = (section) => dispatch(setSection(section));
  const onGotoTrash = (id) => dispatch(setDelete(id));

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  if (!items.data) return null;
  if (items.loading) return <div className="loading">loading...</div>;
  if (items.failure) return <div>error</div>;

  const ItemById = items.data.filter((item) => item.id === selectedId);

  return (
    <>
      <MailBar data={items.data} section={section} onSectionChange={onSectionChange} />
      <div className="mail_container">
        <MailList data={items.data} section={section} />
        {ItemById.length === 0 ? (
          <div className="mail_view">메일이 없습니다.</div>
        ) : (
          <MailView selectedItem={ItemById[0]} onGotoTrash={onGotoTrash} />
        )}
      </div>
    </>
  );
}

export default MailBox;
