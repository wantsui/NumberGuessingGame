import React from 'react';
import {
  VrButton,
  Text,
  View,
} from 'react-vr';
export default class Title extends React.Component {
  render() {
    return(
      <View style={{transform: [{translate: [-1, -1, -1]}],
                    layoutOrigin: [-1, 10]
                  }}>
        <Text style={{ color:"white",
                    }}>
                    Hello World!
        </Text>
      </View>
    );
  }
}
