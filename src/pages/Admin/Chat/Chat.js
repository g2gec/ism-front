import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatContacts } from "../../../components/Chat/ChatContacts";
import { ChatPanel } from "../../../components/Chat/ChatPanel";
import io from "socket.io-client";
import {
  getUsers,
  handleGetChat,
  handleGetUsersOnline,
  handleGetVideoCall,
  handleMessageToChat,
  handleModalVideoCall,
  handleNotifiesToChat,
} from "../../../actions/chat";
import { handleNotification } from "../../../helpers/notifications";

export const Chat = () => {
  const dispatch = useDispatch();

  const { users, chatSelected } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  const [viewPanel, setViewPanel] = useState("VENDEDOR");
  const [typeUser, setTypeUser] = useState([]);

  useEffect(() => {
    console.log("admin router mounted");
    if (user) {
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

  useEffect(() => {
    if (users) {
      selectedTypeUser("VENDEDOR");
    }
  }, [users]);

  const handlerView = (view) => {
    setViewPanel(view);
    selectedTypeUser(view);
  };

  const selectedTypeUser = (view = "VENDEDOR") => {
    console.log("users", users);
    if (users.length > 0) {
      const typeUser = users.filter((e) => {
        return e.tier === view;
      });
      setTypeUser(typeUser);
      console.log("typeUser", typeUser);
    }
  };

  return (
    <div>
      <div className="admin__mainTitle">
        <h3>Chat</h3>
      </div>
      <div className="admin__mainPanel px-2">
        {/* DESKOPT */}
        <div className="admin__panelHeader mb-3 d-none d-md-block">
          <button
            className={viewPanel === "VENDEDOR" && "admin__btnHeaderActive"}
            onClick={() => handlerView("VENDEDOR")}
          >
            Vendedores
          </button>
          <button
            className={viewPanel === "ASOCIADO" && "admin__btnHeaderActive"}
            onClick={() => handlerView("ASOCIADO")}
          >
            Clientes
          </button>
        </div>

        {/* MOVIL */}
        <div className="admin__panelHeader mb-3 d-md-none">
          {!chatSelected ? (
            <>
              <button
                className={viewPanel === "VENDEDOR" && "admin__btnHeaderActive"}
                onClick={() => handlerView("VENDEDOR")}
              >
                Vendedores
              </button>
              <button
                className={viewPanel === "ASOCIADO" && "admin__btnHeaderActive"}
                onClick={() => handlerView("ASOCIADO")}
              >
                Clientes
              </button>
            </>
          ) : (
            <button onClick={() => dispatch(handleGetChat(null))}>Atras</button>
          )}
        </div>
        <div className="row pb-4">
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
