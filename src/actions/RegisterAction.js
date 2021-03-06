import { REGISTER_USER } from './types';
import axios from 'axios';
import { push } from 'connected-react-router/immutable';

const apiUrl = "http://localhost:5000";

const registerUser = userObj => ({
  type: REGISTER_USER,
  payload: userObj
})

export const userPostFetch = (user) => {
  return (dispatch) => {
    return axios.post(apiUrl + '/registrations', { user })
      .then(response => {
        // check if token received blank then don't dispatch action
        if (response.data.user.token) {
          // can also shift to persist
          localStorage.setItem("token", response.data.user.token);
          dispatch(registerUser(response.data.user));
        }
        dispatch(push("/"))
      })
      .catch(error => {
        dispatch({error: error, type: 'ERROR_MESSAGE'})
      });
  };
};
