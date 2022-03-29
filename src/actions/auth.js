import axios from '../axios';
import { history } from '../routers/AppRouter';

import { types } from '../types/types';
import { uiShowBarLoading } from './ui';

export const authLogin = (request) => {
  return async (dispatch) => {
    dispatch(uiShowBarLoading(true));
    try {
      let login = await axios.post('/auth/login', request);
      dispatch(uiShowBarLoading(false));
      let { data } = login;
      localStorage.setItem('token', JSON.stringify(data.accessToken));
      localStorage.setItem('user', JSON.stringify(data.user));
      dispatch(getUserLogin(data.user));
      axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
      if (data.user.tier === 'ADMINISTRADOR') {
        history.push('/admin/membresias');
      }
      if (data.user.tier === 'VENDEDOR') {
        history.push('/vendedor/cotizacion');
      }
      console.log('login', login);
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };
};

export const getUserLogged = () => {
  return async (dispatch) => {
    let token = localStorage.getItem('token');
    if (token) {
      let user = localStorage.getItem('user');
      axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
      dispatch(getUserLogin(JSON.parse(user)));
    }
  };
};

export const authLogout = () => {
  return async (dispatch) => {
    window.localStorage.clear();
    dispatch(userLogout());
    history.push('/');
  };
};

export const getUserLogin = (data) => ({
  type: types.login,
  payload: data,
});
export const userLogout = () => ({
  type: types.logout,
});
