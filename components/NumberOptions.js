import React from 'react';
import {
  VrButton,
  Box,
  View,
} from 'react-vr';
import FloatingBox from './FloatingBox.js'
export default class NumberOptions extends React.Component {
  render() {
    return(
      <View>
        <FloatingBox layoutX={-1} layoutY={-1} boxColor={"lavender"} comment={"Box 1"} translateZ={2}/>
        <FloatingBox layoutX={-1} layoutY={-1} boxColor={"snow"} comment={"Box 2"} translateZ={1}/>
        <FloatingBox layoutX={-1} layoutY={-1} boxColor={"green"} comment={"Box 3"} translateZ={0}/>
        <FloatingBox layoutX={-1} layoutY={-1} boxColor={"pink"} comment={"Box 4"} translateZ={-1}/>
        <FloatingBox layoutX={-1} layoutY={-2} boxColor={"lightcyan"} comment={"Box 5"} translateZ={-2}/>
      </View>
    );
  }
}
