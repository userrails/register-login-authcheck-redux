// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './authReducer';

const rootReducer = (history) => combineReducers({
  authReducer: authReducer,
  router: connectRouter(history),
  // rest of your reducers
})

export default rootReducer;
