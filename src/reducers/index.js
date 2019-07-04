// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './authReducer';
import articleReducer from './articleReducer';

const rootReducer = (history) => combineReducers({
  authReducer: authReducer,
  articleReducer: articleReducer,
  router: connectRouter(history),
  // rest of your reducers
})

export default rootReducer;
