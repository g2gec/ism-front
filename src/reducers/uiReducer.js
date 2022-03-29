import { types } from '../types/types';

const initialState = {
  loading: false,
  msgError: null,
  showModalProfileAssociate: false,
  showModalProduct: false,
  showModalGuestRegister: false,
  showForgetPasswordModal: false,
  showModalVisit: false,
  barLoading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiShowBarLoading:
      return {
        ...state,
        barLoading: action.payload,
      };
    // case types.uiStartLoading:
    //     return {
    //         ...state,
    //         loading: true
    //     }
    // case types.uiFinishLoading:
    //     return {
    //         ...state,
    //         loading: false
    //     }
    case types.uiShowModalProfileAssociate:
      return {
        ...state,
        showModalProfileAssociate: action.payload,
      };
    case types.uiShowModalProduct:
      return {
        ...state,
        showModalProduct: action.payload,
      };
    case types.uiShowModalGuestRegister:
      return {
        ...state,
        showModalGuestRegister: action.payload,
      };
    case types.uiShowModalForgetPassword:
      return {
        ...state,
        showForgetPasswordModal: action.payload,
      };
    case types.uiShowModalVisit:
      return {
        ...state,
        showModalVisit: action.payload,
      };
    default:
      return state;
  }
};
