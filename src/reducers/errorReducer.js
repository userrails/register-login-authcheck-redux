import { ERROR_MESSAGE } from '../actions/types';

const initialState = {
  errors: []
}

export default function authReducer(state=initialState, action) {
  switch(action.type) {
    case ERROR_MESSAGE:
      console.log("23343", action.payload);
      return {...state, errors: action.payload}
    default:
      return state
  }
}
