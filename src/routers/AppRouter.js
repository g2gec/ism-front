import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { getUserLogged, login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { LoadingBar } from "../components/UI/LoadingBar/LoadingBar";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

import ScrollToTop from "../hooks/ScrollToTop";
import { AdminRouter } from "./AdminRouter";
import { VendorsRouter } from "./VendorsRouter";

import { ModalVideoCall } from "../components/Chat/ModalVideoCall";
import {
  getUsers,
  handleGetUsersOnline,
  handleGetVideoCall,
  handleMessagesRecived,
  handleMessageToChat,
  handleModalVideoCall,
} from "../actions/chat";
import { handleNotification } from "../helpers/notifications";

export const history = createBrowserHistory();

let prevPath = null;

history.listen((location) => {
  if (location.pathname !== prevPath) {
    prevPath = location.pathname;
  }
});

export const AppRouter = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { dataVideoCall } = useSelector((state) => state.chat);

  useEffect(() => {
    dispatch(getUserLogged());
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (user) {
      let ip_address = "192.168.1.1";
      let socket_port = "9000";
      let newSocket = io(`${ip_address}:${socket_port}`);

      newSocket.on("connect", function (data) {
        newSocket.emit("user_connected", user?.id);
      });

      newSocket.on(
        "private-channel:App\\Events\\PrivateMessageEvent",
        function (message) {
          console.log("new Message", message);
          handleAddMessage(message);
        }
      );

      newSocket.on(
        "private-channel:App\\Events\\PrivateVideoCallEvent",
        function (message) {
          dispatch(handleGetVideoCall(message));
          dispatch(handleModalVideoCall(true));
        }
      );

      return () => newSocket.close();
    }
  }, [user]);

  const handleAddMessage = (newMessage) => {
    new Audio("../../assets/sounds/sound_chat.mp3").play();
    dispatch(handleMessageToChat(newMessage));
    dispatch(handleMessagesRecived(newMessage));
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

  return (
    <>
      <Router history={history}>
        <LoadingBar />
        <div>
          <Navbar />
          <ScrollToTop />
          <Switch>
            {user && <Route path="/admin" component={AdminRouter} />}
            {user && <Route path="/user" component={PrivateRoute} />}
            {user && <Route path="/vendedor" component={VendorsRouter} />}
            <Route path="/" component={PublicRoute} />
          </Switch>
          <Footer />
        </div>
      </Router>
      {dataVideoCall && <ModalVideoCall />}
    </>
  );
};
