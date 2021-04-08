import React from 'react';

import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import Easing from 'react-native/Libraries/Animated/Easing';
import { height, width } from './constants';



const CustomNavigationContainer = () => {

  const topLine = React.useRef(new Animated.Value(0)).current
  const midLine = React.useRef(new Animated.Value(0)).current
  const bottomLine = React.useRef(new Animated.Value(0)).current
  const menuViewValue = React.useRef(new Animated.Value(0)).current  
  const [menu,setMenu] = React.useState(false)


  const animationOne = (valueOne,valueTwo,valueThree,valueFour,toValue) =>{
    Animated.parallel([
      Animated.timing(valueOne,{
        toValue:toValue,
        duration:750,
        useNativeDriver:true
      }),
      Animated.timing(valueTwo,{
        toValue:toValue,
        duration:750,
        useNativeDriver:true
      }),
      Animated.timing(valueThree,{
        toValue:toValue,
        duration:750,
        useNativeDriver:true
      }),
      Animated.timing(valueFour,{
        toValue:toValue,
        duration:750,
        easing:Easing.ease,
        useNativeDriver:false
      })
    ]).start()
  }

 let topLineAnim = topLine.interpolate({
    inputRange:[0,1],
    outputRange:['0deg','45deg'],
    extrapolateLeft:'clamp'
  })
 let midLineAnim = midLine.interpolate({
    inputRange:[0,1],
    outputRange:[1,0],
    extrapolate:'clamp'
  })
 let bottomLineAnim = bottomLine.interpolate({
    inputRange:[0,1],
    outputRange:['0deg','-45deg'],
    extrapolateLeft:'clamp'
  })

  let translateX = bottomLine.interpolate({
    inputRange:[0,1],
    outputRange:[0,12],
    extrapolateLeft:'clamp'
  })

 let menuViewAnim = menuViewValue.interpolate({
   inputRange:[0,1],
   outputRange:[-((width / 2) + 100 ),0],
   extrapolate:'clamp'
 })

const menuAnimation = () => {
  if(menu === false){
    animationOne(topLine,midLine,bottomLine,menuViewValue,1)
      setMenu(true)
    }
    
    if(menu === true){
      animationOne(topLine,midLine,bottomLine,menuViewValue,0)
      setMenu(false)
  }
}

  return(
      <>
      <View style={styles.menu}>
        <TouchableOpacity activeOpacity={0} style={styles.menuBtn} onPress={ () => menuAnimation()}>
        <Animated.View style={[styles.one,{transform:[
            {rotate:topLineAnim},
            {translateX}
          ]}]}></Animated.View>
        <Animated.View style={[styles.two,{opacity:midLineAnim}]}></Animated.View>
        <Animated.View style={[styles.one,{transform:[
          {rotate:bottomLineAnim},
          {translateX}
          ]}]}></Animated.View>
        </TouchableOpacity>
      </View>
     <Animated.View style={[styles.navigationContainer,{left:menuViewAnim}]}></Animated.View>
     </>
  )
}



const styles = StyleSheet.create({
  menu:{
    position:'absolute',
    top:30,
    left:16,
    zIndex:3,
    width:30,
    height:20,
    backgroundColor:'transparent',
  },
  menuBtn:{
    width:30,
    height:20,
    justifyContent:'space-between',
  },
  one:{
    width:30,
    height:3,
    backgroundColor:'black'
  },
  two:{
    width:15,
    height:3,
    backgroundColor:'black'
  },
  navigationContainer:{
    width: width / 2 + 100,
    height:height,
    backgroundColor:'rgba(225,225,225,0.5)',
    position:'absolute',
    top:0,
    zIndex:1
  }
})


export default CustomNavigationContainer