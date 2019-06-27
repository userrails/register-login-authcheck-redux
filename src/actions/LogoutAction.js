import { push } from "connected-react-router";

import { LOGOUT_USER } from './types';

const LogoutAction = () => {
  return {
    type: LOGOUT_USER
  }
}

// Action Creator
export const LogoutFunction = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(LogoutAction());
    dispatch(push('/login'))
  }
}
