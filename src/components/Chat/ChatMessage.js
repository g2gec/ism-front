import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ChatMessage = ({ data }) => {
  const { user } = useSelector((state) => state.auth);
  const { chatSelected } = useSelector((state) => state.chat);

  const [avatar, setAvatar] = useState(null);

  const handleViewAvatar = () => {
    if (parseInt(data.sender_id) === user.id) {
      user.avatar !== ""
        ? setAvatar(
            `${process.env.REACT_APP_BASE}/uploads/customers/${user.id}/${user.avatar}`
          )
        : setAvatar("../../../assets/images/avatar_edit.png");
    } else {
      chatSelected.user.avatar !== ""
        ? setAvatar(
            `${process.env.REACT_APP_BASE}/uploads/customers/${chatSelected.user.id}/${chatSelected.user.avatar}`
          )
        : setAvatar("../../../assets/images/avatar_edit.png");
    }
  };

  useEffect(() => {
    handleViewAvatar();
  }, []);

  const handleDowndloadFile = () => {
    window.open(
      `${process.env.REACT_APP_BASE}/uploads/chat/files/${data.message}`,
      "Download"
    );
  };

  return (
    <div
      className={
        parseInt(data.sender_id) === user.id
          ? "chatMessages__card chatMessages__send"
          : "chatMessages__card"
      }
    >
      <div
        className="chatMessages__cardAvatar"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {parseInt(data.type) === 1 && (
        <div className="chatMessages__cardText">
          <p>{data.message}</p>
        </div>
      )}
      {parseInt(data.type) === 2 && (
        <div className="chatMessages__cardFile" onClick={handleDowndloadFile}>
          <button>
            Descargar archivo <i class="ml-3 fas fa-file-download"></i>
          </button>
        </div>
      )}
    </div>
  );
};
