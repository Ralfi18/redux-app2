import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise';
import App from './components/App'
import reducers from './reducers';

const createStoreWithMidleware = applyMiddleware(ReduxPromise)(createStore);

render(
  <Provider store={createStoreWithMidleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)