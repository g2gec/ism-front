import { types } from "../types/types";

const initialState = {
    guestRegisterSelected: null,
    guestRegister: []
}

export const paymentReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.guestActive:
            return {
                ...state,
                guestRegisterSelected: action.payload
            }
        case types.guestRegister:
            return {
                ...state,
                guestRegister: action.payload
            }
        default:
            return state;
    }
}