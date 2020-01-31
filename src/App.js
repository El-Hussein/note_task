/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './redux/store';
import MainApp from './MainApp';
import { COLORS } from './common';
class App extends Component {

  render() {
    return (
      <Provider store={Store.store} >
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.main} />
        <MainApp />
      </Provider>
    );
  }
};

export default App;