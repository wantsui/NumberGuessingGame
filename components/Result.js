import React from 'react';
import {
  Text,
  View,
} from 'react-vr';
export default class Result extends React.Component {
  render() {
    let resultMessage = this.props.indexProps.resultMessage

    return(
      <View style={{transform: [{translate: [1, -1, -1]}],
                    layoutOrigin: [1, 20]
                  }}>
        <Text style={{ color:"white",
                    }}>
                    {resultMessage}
        </Text>
      </View>
    );
  }
}
