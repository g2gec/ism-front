import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversation } from "../../actions/chat";

export const ChatAvatarUser = ({ data }) => {
  const dispatch = useDispatch();

  const { chatUsersOnline } = useSelector((state) => state.chat);

  const [userOnline, setUserOnline] = useState(false);

  useEffect(() => {
    if (chatUsersOnline) {
      let user = chatUsersOnline.filter((e) => {
        return e.value === data.id;
      });

      if (user.length > 0) {
        if (user[0].key !== 0 && user[0].key !== null) {
          setUserOnline(true);
        }
      }
    }
  }, [chatUsersOnline]);

  const handleGetUser = (data) => {
    dispatch(getConversation(data.id));
  };

  return (
    <li onClick={() => handleGetUser(data)}>
      <div
        className="chatPage__contactAvatar"
        style={{
          backgroundImage: `url(${
            data.avatar
              ? `${process.env.REACT_APP_BASE}/uploads/customers/${data.id}/${data.avatar}`
              : "../../../assets/images/avatar_edit.png"
          })`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span
          className={userOnline ? "chatAvatarOnline" : "chatAvatarAway"}
        ></span>
      </div>
      <p>
        {data.name} {data.apellido}
      </p>
    </li>
  );
};
