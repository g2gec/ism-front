import { types } from '../types/types';

const initialState = {
  hotelsFilters: {
    name: null,
    city: null,
    country_code: null,
    stars: null,
  },
  hotels: null,
  hotelSelected: null,
  hotelChildSelect: [
    {
      id: 1,
      value: null,
      state: false,
    },
    {
      id: 2,
      value: null,
      state: false,
    },
    {
      id: 3,
      value: null,
      state: false,
    },
    {
      id: 4,
      value: null,
      state: false,
    },
  ],
  hotelRoomsFound: [],
  createBooking: null,
  roomSelected: null,
};

export const searchEngineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getHotels:
      return {
        ...state,
        hotels: action.payload,
      };
    case types.getHotelSelected:
      return {
        ...state,
        hotelSelected: action.payload,
      };
    case types.setChildSelected:
      return {
        ...state,
        hotelChildSelect: action.payload,
      };
    case types.setHotelRoomsFound:
      return {
        ...state,
        hotelRoomsFound: action.payload,
      };
    case types.setCreateBooking:
      return {
        ...state,
        createBooking: action.payload,
      };
    case types.setRoomSelected:
      return {
        ...state,
        roomSelected: action.payload,
      };
    default:
      return state;
  }
};
