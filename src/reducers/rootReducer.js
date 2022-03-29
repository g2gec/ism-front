import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { carReducer } from './carReducer';
import { chatReducer } from './chatReducer';
import { paymentReducer } from './paymentReducer';
import { productsReducer } from './producstReducer';
import { searchEngineReducer } from './searchEngineReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  products: productsReducer,
  car: carReducer,
  payment: paymentReducer,
  chat: chatReducer,
  searchEngine: searchEngineReducer,
});
