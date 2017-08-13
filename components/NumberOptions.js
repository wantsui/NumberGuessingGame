import React from 'react';
import {
  VrButton,
  Box,
  View,
} from 'react-vr';
import FloatingBox from './FloatingBox.js'
export default class NumberOptions extends React.Component {
  render() {
    let indexProps = this.props.indexProps
    return(
      <View>
        <FloatingBox indexProps={indexProps} boxColor={"lavender"} comment={"1"} translateX={-5} translateY={3} translateZ={-3}/>
        <FloatingBox indexProps={indexProps} boxColor={"pink"} comment={"2"} translateX={-3} translateY={3} translateZ={-3}/>
        <FloatingBox indexProps={indexProps} boxColor={"silver"} comment={"3"} translateX={-1} translateY={3} translateZ={-3}/>
        <FloatingBox indexProps={indexProps} boxColor={"skyblue"} comment={"4"} translateX={1} translateY={3} translateZ={-3}/>
        <FloatingBox indexProps={indexProps} boxColor={"mediumpurple"} comment={"5"} translateX={3} translateY={3} translateZ={-3}/>
      </View>
    );
  }
}
