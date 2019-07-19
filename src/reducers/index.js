// reducers.js
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import errorReducer from './errorReducer';

const rootReducer = (history) => combineReducers({
  authReducer: authReducer,
  articleReducer: articleReducer,
  errorReducer: errorReducer,
  router: connectRouter(history),
  // rest of your reducers
})

export default rootReducer;
