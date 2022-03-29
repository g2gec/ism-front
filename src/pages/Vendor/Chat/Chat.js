import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  handleGetChat,
  handleGetUsersOnline,
  handleGetVideoCall,
  handleMessageToChat,
  handleModalVideoCall,
} from "../../../actions/chat";
import { ChatContacts } from "../../../components/Chat/ChatContacts";
import { ChatPanel } from "../../../components/Chat/ChatPanel";
import io from "socket.io-client";
import { handleNotification } from "../../../helpers/notifications";

export const Chat = ({ socket }) => {
  console.log("componet chat");
  const dispatch = useDispatch();

  const { users, chatSelected } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const [viewPanel, setViewPanel] = useState("ADMINISTRADOR");
  const [typeUser, setTypeUser] = useState([]);

  useEffect(() => {
    if (user) {
      // dispatch(getUsers());
      let ip_address = "http://67.205.142.89";
      let socket_port = "9000";
      let newSocket = io(`${ip_address}:${socket_port}`);

      newSocket.on("updateUserStatus", (data) => {
        let onlineUsers = [];

        data.forEach((key, val) => {
          if (val !== null && val !== 0) {
            const users = {
              key: key,
              value: val,
            };
            onlineUsers.push(users);
          }
        });

        dispatch(handleGetUsersOnline(onlineUsers));
      });

      // setSocket(newSocket);

      return () => newSocket.close();
    }
  }, [user]);

  const handleAddMessage = (newMessage) => {
    new Audio("../../assets/sounds/sound_chat.mp3").play();
    dispatch(handleMessageToChat(newMessage));
    let name = `${newMessage.sender_name} ${newMessage.sender_surname}`;
    let message = newMessage.message;
    let image = null;
    if (newMessage.sender_avatar) {
      image = `${process.env.REACT_APP_BASE}/uploads/customers/${newMessage.sender_id}/${newMessage.sender_avatar}`;
    } else {
      image = "../../../assets/images/avatar_edit.png";
    }
    handleNotification(name, message, image);
  };

  const selectedTypeUser = (view = "ADMINISTRADOR") => {
    console.log("selectedTypeUser users", users);
    if (users.length > 0) {
      const typeUser = users.filter((e) => {
        return e.tier === view;
      });
      setTypeUser(typeUser);
      console.log("typeUser", typeUser);
    }
  };

  const selectedTypeUserClient = (view = "ADMINISTRADOR") => {
    console.log("users", users);
    if (users.length > 0) {
      const typeUser = users.filter((e) => {
        return parseInt(e.customer?.seller_id) === parseInt(user?.seller_id);
      });
      setTypeUser(typeUser);
      console.log("typeUser", typeUser);
    }
    setViewPanel("ASOCIADO");
  };

  const handlerView = (view) => {
    setViewPanel(view);
    selectedTypeUser(view);
  };

  useEffect(() => {
    if (users) {
      selectedTypeUser("ADMINISTRADOR");
    }
  }, [users]);

  return (
    <div>
      <div className="vendor__mainTitle">
        <h3>Chat</h3>
      </div>
      <div className="vendor__mainPanel">
        {/* DESKOPT */}
        <div className="vendor__panelHeader mb-3 d-none d-md-block">
          <button
            className={
              viewPanel === "ADMINISTRADOR" && "vendor__btnHeaderActive"
            }
            onClick={() => handlerView("ADMINISTRADOR")}
          >
            Administradores
          </button>
          <button
            className={viewPanel === "ASOCIADO" && "vendor__btnHeaderActive"}
            onClick={() => selectedTypeUserClient()}
          >
            Clientes
          </button>
        </div>

        {/* MOVIL */}
        <div className="admin__panelHeader mb-3 d-md-none">
          {!chatSelected ? (
            <>
              <button
                className={
                  viewPanel === "ADMINISTRADOR" && "vendor__btnHeaderActive"
                }
                onClick={() => handlerView("ADMINISTRADOR")}
              >
                Administradores
              </button>
              <button
                className={
                  viewPanel === "ASOCIADO" && "vendor__btnHeaderActive"
                }
                onClick={() => handlerView("ASOCIADO")}
              >
                Clientes
              </button>
            </>
          ) : (
            <button
              style={{
                background: "#fff",
              }}
              onClick={() => dispatch(handleGetChat(null))}
            >
              Atras
            </button>
          )}
        </div>
        <div className="row pb-4 px-3">
          <div className="col-md-3 d-none d-md-block">
            <ChatContacts users={typeUser} />
          </div>
          <div className="col-md-9 d-none d-md-block">
            {chatSelected && <ChatPanel />}
          </div>
          <div className="col-md-9 d-md-none">
            {chatSelected ? <ChatPanel /> : <ChatContacts users={typeUser} />}
          </div>
        </div>
      </div>
    </div>
  );
};
