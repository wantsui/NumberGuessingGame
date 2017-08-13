import React from 'react';
import {
  Text,
  View,
} from 'react-vr';
export default class Result extends React.Component {
  render() {
    let randomNumber = this.props.randomNumber
    return(
      <View style={{transform: [{translate: [1, -1, -1]}],
                    layoutOrigin: [.8, 7]
                  }}>
        <Text style={{ color:"white",
                    }}>
                    Correct Number: {randomNumber}
        </Text>
      </View>
    );
  }
}
