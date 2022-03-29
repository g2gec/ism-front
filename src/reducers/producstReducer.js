import { types } from "../types/types";

const initialState = {
  productSelected: null
}

export const productsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.productSelected:
            return {
                ...state,
                productSelected: action.payload
            }   
        default:
            return state;
    }
}