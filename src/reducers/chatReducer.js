import { types } from "../types/types";

const initialState = {
  users: [],
  chatSelected: null,
  chatMessages: [],
  modalVideoCall: false,
  dataVideoCall: null,
  chatUsersOnline: null,
  notify: [],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.chatUsers:
      return {
        ...state,
        users: action.payload,
      };
    case types.chatSelected:
      return {
        ...state,
        chatSelected: action.payload,
      };
    case types.chatMessages:
      return {
        ...state,
        chatMessages: action.payload,
      };
    case types.chatAddMessage:
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
      };
    case types.chatModalVideoCall:
      return {
        ...state,
        modalVideoCall: action.payload,
      };
    case types.chatGetDataVideoCall:
      return {
        ...state,
        dataVideoCall: action.payload,
      };
    case types.chatGetUsersOnline:
      return {
        ...state,
        chatUsersOnline: action.payload,
      };
    case types.chatActiveNotify:
      return {
        ...state,
        notify: action.payload,
      };

    default:
      return state;
  }
};
