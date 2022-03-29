import { types } from '../types/types';

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeError = () => ({
  type: types.uiRemoveError,
});

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});
export const uiShowBarLoading = (show) => ({
  type: types.uiShowBarLoading,
  payload: show,
});

export const handleModalProfileAssociate = (state) => ({
  type: types.uiShowModalProfileAssociate,
  payload: state,
});

export const handleModalProduct = (state) => ({
  type: types.uiShowModalProduct,
  payload: state,
});

export const handleModalGuestRegister = (state) => ({
  type: types.uiShowModalGuestRegister,
  payload: state,
});

export const handleModalForgetPassword = (state) => ({
  type: types.uiShowModalForgetPassword,
  payload: state,
});

export const handleModalVisit = (state) => ({
  type: types.uiShowModalVisit,
  payload: state,
});
