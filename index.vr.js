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
  constructor(props) {
    super(props)
    this.state = {
        buttonPressed = "",
    }
    this.updateButton = this.updateButton.bind(this)
  }

  updateButton(buttonString) {
    this.setState({buttonPressed: buttonString})
  }

  render() {
    return (
      <View>
        <Title/>
        <NumberOptions/>
      </View>
    );
  }
};

AppRegistry.registerComponent('NumberGuessingGame', () => NumberGuessingGame);
