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
    let updateButton = this.props.updateButton

    return(
      <View>
      <View style={{transform: [{translate: [translateX + .9, translateY, translateZ + .4]}]
                  }}>
        <Text style={{ color:"blue",
                      fontSize: .2,
                    }}>
                    {comment}
        </Text>
      </View>
        <View style={{transform: [{translate: [translateX, translateY, translateZ]}]
                    }}>
            <VrButton onClick={() => updateButton(comment)}>
              <Box
                dimHeight={.7}
                dimWidth={.7}
                dimDepth={.7}
                style={{
                  color: boxColor,
                }}
              />
            </VrButton>
        </View>
      </View>
    );
  }
}
