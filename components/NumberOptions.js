import React from 'react';
import {
  VrButton,
  Box,
  View,
} from 'react-vr';
import FloatingBox from './FloatingBox.js'
export default class NumberOptions extends React.Component {
  render() {
    let updateButton = this.props.updateButton
    return(
      <View>
        <FloatingBox updateButton={updateButton} boxColor={"lavender"} comment={"1"} translateX={-3} translateY={3} translateZ={-4}/>
        <FloatingBox updateButton={updateButton} boxColor={"pink"} comment={"2"} translateX={-1} translateY={3} translateZ={-4}/>
        <FloatingBox updateButton={updateButton} boxColor={"silver"} comment={"3"} translateX={1} translateY={3} translateZ={-4}/>
        <FloatingBox updateButton={updateButton} boxColor={"skyblue"} comment={"4"} translateX={3} translateY={3} translateZ={-4}/>
        <FloatingBox updateButton={updateButton} boxColor={"mediumpurple"} comment={"5"} translateX={5} translateY={3} translateZ={-4}/>
      </View>
    );
  }
}
