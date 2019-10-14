/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
//
// AppRegistry.registerComponent(appName, () => App);


import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Root from './app/root';

AppRegistry.registerComponent('reduxDemo1', () =>Root);
