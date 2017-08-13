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
        <FloatingBox boxColor={"lavender"} comment={"Box 1"} translateX={-3} translateY={3} translateZ={-4}/>
        <FloatingBox boxColor={"pink"} comment={"Box 2"} translateX={-1} translateY={3} translateZ={-4}/>
        <FloatingBox boxColor={"silver"} comment={"Box 3"} translateX={1} translateY={3} translateZ={-4}/>
        <FloatingBox boxColor={"skyblue"} comment={"Box 4"} translateX={3} translateY={3} translateZ={-4}/>
        <FloatingBox boxColor={"mediumpurple"} comment={"Box 5"} translateX={5} translateY={3} translateZ={-4}/>
      </View>
    );
  }
}
