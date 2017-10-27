import React, { Component } from 'react';
import { Provider } from 'react-redux';
 
import '@i18n/I18n';
import AppNavigator from '@src/AppNavigator';
import configureStore from '@src/configureStore';

const store = configureStore();     
 

  class Root extends Component {

    render() {
      return (
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      );
    }
  }

export default Root;