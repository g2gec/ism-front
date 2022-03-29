import { types } from '../types/types';
import { handleModalProduct, uiShowBarLoading } from './ui';
import axios from '../axios';

export const getHotels = (page = 1) => {
  return async (dispatch, getState) => {
    dispatch(uiShowBarLoading(true));
    const { hotelsFilters } = getState().searchEngine;
    try {
      let res = await axios.post(`/general-filter?page=${page}`, hotelsFilters);
      dispatch(uiShowBarLoading(false));
      let { data } = res;
      if (data[0] !== 'Ingrese algún parametro de busqueda.') {
        dispatch(handleSetHotels(data[0]));
      }
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const getHotelDetails = (id) => {
  return async (dispatch, getState) => {
    dispatch(uiShowBarLoading(true));
    const request = {
      endpoint: '/hotel/info/',
      data: {
        id: id,
        language: 'es',
      },
    };
    try {
      let res = await axios.post(`/ratehawk`, request);
      dispatch(uiShowBarLoading(false));
      let { data } = res.data;
      dispatch(handleSetHotelSelected(data));
      dispatch(handleModalProduct(true));
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const handleHotelFilters = (objFilter) => {
  return async (dispatch, getState) => {
    const { hotelsFilters } = getState().searchEngine;

    let newFilter = hotelsFilters;

    newFilter[objFilter.name] = objFilter.value;

    dispatch(handleSetFilterHotels(newFilter));
    dispatch(getHotels());
  };
};

export const getHotelRooms = (request) => {
  return async (dispatch) => {
    dispatch(uiShowBarLoading(true));
    try {
      let res = await axios.post(`/ratehawk`, request);
      dispatch(uiShowBarLoading(false));
      let { data } = res.data;
      if (data.hotels.length > 0) {
        dispatch(handleSetHotelRoomsFund(data.hotels[0].rates));
      } else {
        dispatch(handleSetHotelRoomsFund([]));
      }
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const createNewReserveRatehawk = (request) => {
  return async (dispatch) => {
    dispatch(uiShowBarLoading(true));
    try {
      let res = await axios.post(`/ratehawk`, request);
      dispatch(uiShowBarLoading(false));
      dispatch(handleCreateNewBooking(res.data.data));
      console.log('createNewReserveRatehawk', res.data.data);
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const handleSetHotels = (hotels) => ({
  type: types.getHotels,
  payload: hotels,
});
export const handleSetFilterHotels = (filters) => ({
  type: types.filtersHotels,
  payload: filters,
});
export const handleSetHotelSelected = (hotel) => ({
  type: types.getHotelSelected,
  payload: hotel,
});
export const handleSetChildSelected = (childs) => ({
  type: types.setChildSelected,
  payload: childs,
});
export const handleSetHotelRoomsFund = (rooms) => ({
  type: types.setHotelRoomsFound,
  payload: rooms,
});
export const handleCreateNewBooking = (booking) => ({
  type: types.setCreateBooking,
  payload: booking,
});
export const handleSetRoomSelected = (room) => ({
  type: types.setRoomSelected,
  payload: room,
});
