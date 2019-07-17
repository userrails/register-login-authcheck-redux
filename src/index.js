import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { history, persistor, store } from './configureStore'

import { PersistGate } from 'redux-persist/integration/react';

import {AppContainer} from 'react-hot-loader';

// const store = configureStore(/* provide initial state if any */)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

serviceWorker.unregister();

render ()

if (module.hot) {
  module.hot.accept('./App', () => {
    render()
  })
}
