import { LOGIN_USER, ERROR_MESSAGE, CLEAR_ERROR } from './types';
import axios from 'axios';
import { push } from 'connected-react-router/immutable';

const apiUrl = "http://localhost:5000";

const loginUser = userObj => ({
  type: LOGIN_USER,
  payload: userObj
})

const errorMessage = error => ({
  type: ERROR_MESSAGE,
  payload: error
})

const clearError = () => ({
  type: CLEAR_ERROR
})

export const LoginFunction = (user) => {
  return (dispatch) => {
    return axios.post(apiUrl + '/sessions', { user })
      .then(response => {
        if (response.data.user && response.data.user.token) {
          dispatch(clearError());
          localStorage.setItem("token", response.data.user.token);
          dispatch(loginUser(response.data.user));
          dispatch(push("/"))
        } else {
          dispatch(errorMessage(response.data.errors));
          dispatch(push("/login"))
        }
      })
      .catch(error => {
        dispatch(errorMessage(error));
      });
  };
};
