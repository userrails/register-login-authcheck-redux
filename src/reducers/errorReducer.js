import { ERROR_MESSAGE, CLEAR_ERROR } from '../actions/types';

const initialState = {
  errors: []
}

export default function authReducer(state=initialState, action) {
  switch(action.type) {
    case ERROR_MESSAGE:
      return {...state, errors: action.payload}
    case CLEAR_ERROR:
      return {errors: []}
    default:
      return state
  }
}
