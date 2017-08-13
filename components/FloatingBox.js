import React from 'react';
import {
  VrButton,
  Box,
  Text,
  View,
} from 'react-vr';
export default class FloatingBox extends React.Component {
  render() {
    let layoutX = this.props.layoutX
    let layoutY = this.props.layoutY
    let translateZ = this.props.translateZ
    let boxColor = this.props.boxColor
    let comment = this.props.comment
    return(
        <VrButton style={{layoutOrigin: [layoutX, layoutY],
                        transform: [{translate: [1, 2, translateZ]}]}}
                  onClick={() => console.log(comment)}>
          <Box
            dimHeight={.5}
            dimWidth={.5}
            dimDepth={.5}
            style={{
              color: boxColor,
            }}
          />
        </VrButton>
    );
  }
}
