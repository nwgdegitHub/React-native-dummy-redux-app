/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './app/containers/App';
import configureStore from './app/store/configureStore';

const store = configureStore();

class ReduxCounterUniversal extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxCounterUniversal', () => ReduxCounterUniversal);
