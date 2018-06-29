import React, { Component }  from 'react';
import { View } from 'react-native';

import { HelloWorldApp } from './src/001_LearnTheBasics'

export default class App extends Component {
  render() {
    return (
      <View>
        <HelloWorldApp />
      </View>
    );
  }
}