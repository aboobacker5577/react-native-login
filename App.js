/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
    AppRegistry
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Login from './src/screens/Login';
import Secured from './src/screens/Secured';

export default class App extends Component<{}> {
    state = {
        isLoggedIn: false
    }


    render() {

        if (this.state.isLoggedIn)
            return <Secured
                onLogoutPress={() => this.setState({isLoggedIn: false})}
            />;
        else
            return <Login
                onLoginPress={() => this.setState({isLoggedIn: true})}
            />;
    }
}
