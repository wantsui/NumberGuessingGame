import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import NumberOptions from './components/NumberOptions.js';


export default class NumberGuessingGame extends React.Component {
  render() {
    return (
    <NumberOptions/>
    );
  }
};

AppRegistry.registerComponent('NumberGuessingGame', () => NumberGuessingGame);
