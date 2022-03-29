import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatPanel } from "../../../components/Chat/ChatPanel";
import { ChatContacts } from "../../../components/Chat/ChatContacts";
import "./Chat.css";
import { handleGetChat, handleGetUsersOnline } from "../../../actions/chat";
import io from "socket.io-client";

export const Chat = () => {
  const dispatch = useDispatch();

  const { users, chatSelected } = useSelector((state) => state.chat);

  const [typeUser, setTypeUser] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const selectedTypeUser = () => {
    const typeUser = users.filter((e) => {
      return parseInt(e?.seller_id) === parseInt(user.customer?.seller_id);
    });

    console.log("typeUser", typeUser);
    setTypeUser(typeUser);
  };

  useEffect(() => {
    if (users) {
      selectedTypeUser();
    }
  }, [users]);

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

  return (
    <div className="chatPage py-4">
      <div className="container">
        <div className="chatPage__header">
          <h2>Chat</h2>
        </div>
        {/* MOVIL */}
        <div className="admin__panelHeader mb-3 d-md-none">
          {chatSelected && (
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
        <div className="row">
          <div className="col-md-4 d-none d-md-block">
            <ChatContacts users={typeUser} />
          </div>
          <div className="col-md-8 d-none d-md-block">
            {chatSelected && <ChatPanel />}
          </div>
          <div className="col-md-8 d-md-none">
            {chatSelected ? <ChatPanel /> : <ChatContacts users={typeUser} />}
          </div>
        </div>
      </div>
    </div>
  );
};
