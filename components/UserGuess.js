import React from 'react';
import {
  VrButton,
  Text,
  View,
} from 'react-vr';
export default class UserGuess extends React.Component {
  render() {
    let buttonTitle = this.props.buttonTitle
    return(
      <View style={{transform: [{translate: [1, -1, -1]}],
                    layoutOrigin: [.8, 9]
                  }}>
        <Text style={{ color:"white",
                    }}>
                    You guessed: {buttonTitle}
        </Text>
      </View>
    );
  }
}
