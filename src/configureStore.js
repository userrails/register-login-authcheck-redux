import createBrowserHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './reducers'

export const history = createBrowserHistory();

history.listen(() => {
  console.log('OK');
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer, // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  );

  return store
}

let store = configureStore();

export const persistor = persistStore(store);

export default configureStore;