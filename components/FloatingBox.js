import React from 'react';
import {
  VrButton,
  Box,
  Text,
  View,
} from 'react-vr';
export default class FloatingBox extends React.Component {
  render() {
    let translateX = this.props.translateX
    let translateY = this.props.translateY
    let translateZ = this.props.translateZ
    let boxColor = this.props.boxColor
    let comment = this.props.comment
    return(
      <View style={{transform: [{translate: [translateX, translateY, translateZ]}]
                  }}>
          <VrButton onClick={() => console.log(comment)}>
            <Box
              dimHeight={.5}
              dimWidth={.5}
              dimDepth={.5}
              style={{
                color: boxColor,
              }}
            />
          </VrButton>
      </View>
    );
  }
}
