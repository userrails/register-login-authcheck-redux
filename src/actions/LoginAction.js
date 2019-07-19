import { LOGIN_USER, ERROR_MESSAGE } from './types';
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

export const LoginFunction = (user) => {
  return (dispatch) => {
    return axios.post(apiUrl + '/sessions', { user })
      .then(response => {
        // check if token received blank then don't dispatch action
        if (response.data.user && response.data.user.token) {
          // can also shift to persist
          console.log("---------", response.data.user);
          localStorage.setItem("token", response.data.user.token);
          dispatch(loginUser(response.data.user));
          dispatch(push("/"))
        } else {
          console.log("--******-----", response.data.errors);
          dispatch(errorMessage(response.data.errors));
          dispatch(push("/login"))
        }
      })
      .catch(error => {
        dispatch(errorMessage(error));
      });
  };
};
