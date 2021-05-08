import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import LottieView from 'lottie-react-native'
const App = () => {
  const ballAnimation = useRef(new Animated.Value(0)).current;
  const otherAnimation = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {

    Animated.parallel([
      Animated.timing(ballAnimation, {
        toValue: 180,
        duration: 1500,
        useNativeDriver: false,
        easing: Easing.bounce,
      }).start((e) => {
        Animated.timing(ballAnimation, {
          toValue: 0,
          duration: 1500,
          easing: Easing.bounce,
          useNativeDriver: false
        }).start();
      }),
      Animated.timing(otherAnimation, {
        toValue: 0,
        duration: 1500,
        easing: Easing.bounce,
        useNativeDriver: false
      }).start(() => {
        Animated.timing(otherAnimation, {
          toValue: 1,
          duration: 1500,
          easing: Easing.bounce,
          useNativeDriver: false
        }).start(() => {

        });
      })
    ])

  }
  const startOtherAnimation = () => {


  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      {/* <Animated.View style={{
        backgroundColor: 'red', transform: [
          {
            translateY: ballAnimation
          }
        ], width: ballAnimation.interpolate({
          inputRange: [100, 200],
          outputRange: [150, 200]
        }), height: ballAnimation.interpolate({
          inputRange: [100, 200],
          outputRange: [150, 200]
        })
      }}></Animated.View> */}
      <LottieView source={require('./animations/60080-sanitiser-kills-corona-covid-precaution.json')} autoPlay style={{ width: 100, height: 100 }} />
      <Animated.View style={{
        backgroundColor: ballAnimation.interpolate({
          inputRange: [30, 60, 90, 120, 180],
          outputRange: ["blue", "black", "green", "yellow", "purple"]
        }),
        width: ballAnimation.interpolate({
          inputRange: [30, 60, 90, 120, 180],
          outputRange: [120, 150, 180, 200, 250]
        }),
        height: ballAnimation.interpolate({
          inputRange: [30, 60, 90, 120, 180],
          outputRange: [120, 150, 180, 200, 250]
        }),
        transform: [{
          rotate: ballAnimation.interpolate({
            inputRange: [0, 180],
            outputRange: ["0deg", "180deg"]
          })
        }]

      }}></Animated.View>

      <Animated.View style={{
        backgroundColor: 'red', width: 100, height: 100, transform: [
          {
            scale: otherAnimation
          }
        ]
      }}>

      </Animated.View>
      <TouchableOpacity onPress={() => {
        startAnimation();
      }}>
        <Text>Başlat</Text>
      </TouchableOpacity>
    </View>
  )
}


export default App;
