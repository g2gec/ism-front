import { types } from "../types/types";
import { uiShowBarLoading } from "./ui";
import axios from "../axios";

export const getUsers = () => {
  return async (dispatch, getState) => {
    dispatch(uiShowBarLoading(true));
    const { user } = getState().auth;
    try {
      let users = await axios.get(`/users/${user.id}`);
      dispatch(uiShowBarLoading(false));
      let { data } = users.data;
      dispatch(handleGetUsers(data));
      console.log("users", data);
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const getConversation = (friendId) => {
  return async (dispatch, getState) => {
    dispatch(uiShowBarLoading(true));
    const { user } = getState().auth;
    try {
      let conversation = await axios.get(
        `/conversation/${user.id}/${friendId}`
      );
      dispatch(uiShowBarLoading(false));
      let { data } = conversation.data;
      dispatch(handleGetChat(data));
      console.log("get Conversation", conversation);
      dispatch(getMessages(data.conversation));
      let element = document.getElementById("chatMessagesContainer");
      element.scrollTop = element.scrollHeight - 1;
      // localStorage.setItem('chatConversation', )
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

const getMessages = (data) => {
  return async (dispatch) => {
    // let messages = []

    // data.forEach(element => {
    //     messages.push(element.message)
    // });

    dispatch(handleGetMessagesChat(data));

    // console.log('messages', messages)
  };
};

export const startVideoCall = () => {
  return async (dispatch, getState) => {
    dispatch(uiShowBarLoading(true));

    const { user } = getState().auth;
    const { chatSelected } = getState().chat;

    let random = (Math.random() + 1).toString(36).substring(7);

    let room = `${user.id}-${chatSelected.user.id}-${random}`;

    let link = `https://meet.jit.si/internationalsignature-${room}`;

    const request = {
      receiver_id: chatSelected.user.id,
      user_id: user.id,
      call_link: link,
      type: 1,
    };

    try {
      let res = await axios.post(`start-videocall`, request);
      dispatch(uiShowBarLoading(false));
      window.open(link, "_blank");
      // let { data } = users.data
      console.log("res video call", res);
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const handleMessagesRecived = (newMessage) => {
  return async (dispatch, getState) => {
    const { notify } = getState().chat;
    let notifies = [];

    notifies.push(newMessage);

    notify.forEach((element) => {
      notifies.push(element);
    });
    dispatch(handleNotifiesToChat(notifies));
  };
};

export const handleGetUsers = (users) => ({
  type: types.chatUsers,
  payload: users,
});
export const handleGetChat = (chat) => ({
  type: types.chatSelected,
  payload: chat,
});
export const handleGetMessagesChat = (chat) => ({
  type: types.chatMessages,
  payload: chat,
});
export const handleModalVideoCall = (state) => ({
  type: types.chatModalVideoCall,
  payload: state,
});
export const handleGetVideoCall = (data) => ({
  type: types.chatGetDataVideoCall,
  payload: data,
});
export const handleGetUsersOnline = (data) => ({
  type: types.chatGetUsersOnline,
  payload: data,
});
export const handleMessageToChat = (data) => ({
  type: types.chatAddMessage,
  payload: data,
});
export const handleNotifiesToChat = (data) => ({
  type: types.chatActiveNotify,
  payload: data,
});
