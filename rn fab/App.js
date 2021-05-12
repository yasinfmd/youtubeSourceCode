import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';


const FAB = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAnimation = useRef(new Animated.Value(0)).current


  const startAnimation = () => {
    const toValue = isOpen ? 0 : 1;
    Animated.timing(toggleAnimation, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false
    }).start();
    setIsOpen(!isOpen)
  }

  return (
    <View style={{
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      bottom: 10,
      right: 10,
    }}>
      <TouchableWithoutFeedback>
        <Animated.View style={{
          transform: [
            {
              translateY: toggleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [90, -20]
              })
            }
          ],
          backgroundColor: "red",
          width: 30,
          height: 30,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text style={{ color: '#fff' }}>+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Animated.View style={{
          backgroundColor: "red",
          width: 40,
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          transform: [
            {
              translateY: toggleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [40, -10]
              })
            }
          ],
        }}>
          <Text style={{ color: '#fff' }}>+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        startAnimation();
      }}>
        <Animated.View style={{
          transform: [
            {
              rotate: toggleAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "45deg"]
              })
            }
          ],
          backgroundColor: "red",
          width: 60,
          borderRadius: 30,
          height: 60,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text style={{ color: '#fff', fontSize: 30 }}>+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>


    </View>
  )
}


const App = () => {


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>React Native FAB</Text>
      <FAB />
    </View >

  )
}


export default App;
