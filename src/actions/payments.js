import { types } from '../types/types';
import { uiShowBarLoading } from './ui';
import axios from '../axios';

export const handleActiveGuest = (guest) => ({
  type: types.guestActive,
  payload: guest,
});
export const handleRegisterGuest = (guest) => ({
  type: types.guestRegister,
  payload: guest,
});

export const addRegisterGuest = (register) => {
  return async (dispatch, getState) => {
    const { guestRegister } = getState().payment;

    guestRegister.push(register);

    dispatch(handleRegisterGuest(guestRegister));
  };
};

export const paymentRatehawkTDC = (request) => {
  return async (dispatch) => {
    dispatch(uiShowBarLoading(true));
    let res = await axios.post(`/pay-tdc`, request);
    const { status } = res.data;
    if (status === 'ok') {
      alert('endpoitn finalizar reserva');
    }
    console.log('paymentRatehawkTDC', res);
    try {
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};
