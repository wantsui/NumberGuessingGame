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
import UserGuess from './components/UserGuess.js';
import Result from './components/Result.js';

export default class NumberGuessingGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        buttonPressed: "",
        randomNumber: Math.round(Math.random()*4)+1,
        win: false,
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
        <Result randomNumber={this.state.randomNumber}/>
        <UserGuess buttonTitle={this.state.buttonPressed}/>
        <NumberOptions updateButton={this.updateButton}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('NumberGuessingGame', () => NumberGuessingGame);
