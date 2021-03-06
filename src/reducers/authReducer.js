import { REGISTER_USER } from '../actions/types';
import { LOGIN_USER } from '../actions/types';

const initialState = {
  currentUser: {},
  isAuthenticated: localStorage.getItem("token") ? true : false
}

export default function authReducer(state=initialState, action) {
  switch(action.type) {
    case REGISTER_USER:
      return {...state, currentUser: action.payload, isAuthenticated: true}
    case LOGIN_USER:
      return {...state, currentUser: action.payload, isAuthenticated: true}
    case 'LOGOUT_USER':
      return { ...state, isAuthenticated: false, currentUser: {} };
    default:
      return state
  }
}
