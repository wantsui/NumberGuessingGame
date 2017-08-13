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
        randomNumber: Math.round(Math.random() * 4) + 1,
        win: false,
        resultMessage: "",
    }
    this.updateButton = this.updateButton.bind(this)
    this.updateGameStatus = this.updateGameStatus.bind(this)
  }

  updateButton(buttonString) {
    this.setState({buttonPressed: buttonString})
  }

  updateGameStatus() {
    if(parseInt(this.state.buttonPressed) === this.state.randomNumber){
      this.setState({win: true})
      this.setState({resultMessage: "You win! Time for another game!"})
      this.setState({randomNumber: Math.round(Math.random() * 4) + 1})
    }
    else {
      this.setState({resultMessage: "Wrong guess! Here's a clue: " + Math.abs(this.state.buttonPressed - this.state.randomNumber)})
    }
  }

  render() {
    let indexProps = { buttonTitle: this.state.buttonPressed,
                            updateButton: this.updateButton,
                            randomNumber: this.state.randomNumber,
                            resultMessage: this.state.resultMessage,
                            updateGameStatus: this.updateGameStatus,
                          }
    return (
      <View>
        <Title indexProps={indexProps}/>
        <NumberOptions indexProps={indexProps}/>
        <UserGuess indexProps={indexProps}/>
        <Result indexProps={indexProps}/>
      </View>
    );
  }pare
};

AppRegistry.registerComponent('NumberGuessingGame', () => NumberGuessingGame);
