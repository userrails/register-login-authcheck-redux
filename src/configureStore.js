import createBrowserHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

history.listen(() => {
  console.log('OK');
});

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  )

  return store
}
