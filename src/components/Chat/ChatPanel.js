import React, { useState, useEffect, useRef } from "react";
import Picker from "emoji-picker-react";
import axios from "../../axios";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetMessagesChat,
  handleGetUsersOnline,
  handleMessageToChat,
  startVideoCall,
} from "../../actions/chat";
import { ChatMessage } from "./ChatMessage";
import OutsideCLick from "../../hooks/OutsideClick";

export const ChatPanel = () => {
  const dispatch = useDispatch();

  const { chatSelected, chatMessages } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chatSelected);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setMessages(chatMessages);
    handleScrollBotton();
  }, [chatMessages]);

  const handleAddMessage = (newMessage) => {
    // messages.push(newMessage)
    dispatch(handleMessageToChat(newMessage));
  };
  const handleViewEmojis = () => {
    setEmojiPicker(!emojiPicker);
  };

  const writeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleScrollBotton = () => {
    document.getElementById("chatMessagesContainer").scrollTop += 10000;
  };

  const sendMessage = async () => {
    const formData = new FormData();

    if (image) {
      formData.append("type", 2);
      formData.append("file", image);
    } else {
      if (!message) {
        return;
      }
      formData.append("type", 1);
    }

    formData.append("message", message);
    formData.append("receiver_id", chatSelected.user.id);
    formData.append("user_id", user.id);

    const options = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    let res = await axios.post(
      `${process.env.REACT_APP_API_URL}/send-message`,
      formData,
      options
    );
    const { data } = res.data;
    handleAddMessage(data);
    setMessage("");
    setImage(null);
    handleScrollBotton();
    console.log("response", res);
  };

  const sendMessagePresKey = async (e) => {
    if (e.key === "Enter") {
      const formData = new FormData();

      if (image) {
        formData.append("type", 2);
        formData.append("file", image);
      } else {
        if (!message) {
          return;
        }
        formData.append("type", 1);
      }

      formData.append("message", message);
      formData.append("receiver_id", chatSelected.user.id);
      formData.append("user_id", user.id);

      const options = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/send-message`,
        formData,
        options
      );
      const { data } = res.data;
      handleAddMessage(data);
      setMessage("");
      setImage(null);
      handleScrollBotton();
      console.log("response", res);
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    let getMessage = message;
    getMessage = getMessage + emojiObject.emoji;
    setMessage(getMessage);
    console.log("emojiObject", emojiObject.emoji);
    // setChosenEmoji(emojiObject);
  };

  const wrapperRef = useRef(null);
  OutsideCLick(wrapperRef, setEmojiPicker);

  const handleStartVideoCall = () => {
    dispatch(startVideoCall());
    const message = {
      sender_id: user.id,
      message: "Video llamada iniciada 📞",
      type: 1,
    };
    handleAddMessage(message);
  };

  const handleImageUpload = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  return (
    <div className="chatPage__mainChat">
      <div className="chatPage__headerChat">
        <div className="chatPage__infoContact">
          <div
            className="chatPage__contactAvatar"
            style={{
              backgroundImage: `url(${
                chatSelected.user.avatar
                  ? `${process.env.REACT_APP_BASE}/uploads/customers/${chatSelected.user.id}/${chatSelected.user.avatar}`
                  : "../../../assets/images/avatar_edit.png"
              })`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <span></span>
          </div>
          <p>
            {chatSelected.user.name} {chatSelected.user.apellido}
          </p>
        </div>
        <div className="chatPage__headerIcons">
          {/* <img
              className="mr-2"
              src="../../../static/IMAGENES/Icon/SVG/llamada.-icon.svg"
            /> */}
          <img
            onClick={handleStartVideoCall}
            src="../../../static/IMAGENES/Icon/SVG/videollamada-icon-black.svg"
          />
        </div>
      </div>
      <div className="chatPage__chatMessages" id="chatMessagesContainer">
        {chatMessages &&
          chatMessages.map((e) => <ChatMessage data={e} key={e.id} />)}
      </div>
      <div className="chatMessages__sendContainer">
        <div className="chatSendContainer__icons">
          <img
            src="../../../static/IMAGENES/Icon/SVG/emoticones-icon.svg"
            onClick={handleViewEmojis}
          />
          <label htmlFor="chatFile" style={{ display: "contents" }}>
            <img src="../../../static/IMAGENES/Icon/SVG/agregar-icon.svg" />
            <input
              type="file"
              name="file"
              className="d-none"
              id="chatFile"
              onChange={(e) => handleImageUpload(e)}
            />
          </label>
          {emojiPicker && (
            <div className="chat__emojiPicker" ref={wrapperRef}>
              <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                groupNames={{ smileys_people: "PEOPLE" }}
                disableSearchBar={true}
                native={true}
                pickerStyle={{ height: "280px" }}
              />
            </div>
          )}
        </div>
        <div className="chatSendContainer__input">
          {!image ? (
            <input
              text="Escribir mensaje"
              onChange={writeMessage}
              value={message}
              placeholder="Escribir mensaje ..."
              onKeyUp={sendMessagePresKey}
            />
          ) : (
            <div className="chatSendContainer__inputWithFile">
              <p>Archivo Cargado</p>
              <button
                onClick={() => setImage(null)}
                className="chat__buttonClearFile"
              >
                x
              </button>
            </div>
          )}
        </div>
        <div className="chatSendContainer__btn">
          <button onClick={() => sendMessage()}>
            <span className="d-none d-md-block">Enviar</span>
            <img src="../../../static/IMAGENES/Icon/SVG/enviar-icon.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};
