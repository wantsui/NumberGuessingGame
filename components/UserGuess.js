import React from 'react';
import {
  VrButton,
  Text,
  Box,
  View,
} from 'react-vr';
export default class UserGuess extends React.Component {
  render() {
    let buttonTitle = this.props.indexProps.buttonTitle
    let updateGameStatus = this.props.indexProps.updateGameStatus

    return(
      <View style={{transform: [{translate: [1, -1, -1]}],
                    layoutOrigin: [.7,18]
                  }}>
        <VrButton onClick={() => updateGameStatus()}>
          <Text style={{ color:"white",
                      }}>
                      Guess {buttonTitle}!
          </Text>
        </VrButton>
      </View>
    );
  }
}
