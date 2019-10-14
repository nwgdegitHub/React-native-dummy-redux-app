/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//import rootSaga from './sagas/index';
import App from './containers/App';

const store = configureStore();

// run root saga
//store.runSaga(rootSaga);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
