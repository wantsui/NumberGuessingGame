import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import NumberOptions from './components/NumberOptions.js';
import Title from './components/Title.js';

export default class NumberGuessingGame extends React.Component {
  render() {
    return (
      <View>
        <NumberOptions/>
      </View>
    );
  }
};

AppRegistry.registerComponent('NumberGuessingGame', () => NumberGuessingGame);
