/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  Animated,
  View,
} from 'react-native';




const BottomSheet = ({ animation, onCancel }) => {
  return (
    <Animated.View style={{
      width: "100%",
      backgroundColor: "#fff",
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      padding: 20,
      position: "absolute",
      bottom: animation,
      zIndex: 3,
      alignItems: "center",
      justifyContent: "center",
      maxHeight: 300,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,

    }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>

        <TouchableOpacity>
          <View style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            marginBottom: 8,
          }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Menü 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            marginBottom: 8,
          }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Menü 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            marginBottom: 8,
          }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Menü 3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          onCancel();
        }}>
          <View style={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            marginBottom: 8,
          }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Çıkış Yap</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

    </Animated.View>
  )
}


const App = () => {
  const [animationValue, setAnimationValue] = useState(-1000)
  const showAnimation = useRef(new Animated.Value(animationValue)).current


  const toggleAnimation = () => {
    const val = animationValue === 0 ? -1000 : 0
    Animated.timing(showAnimation, {
      useNativeDriver: false,
      toValue: val,
      duration: 350
    }).start()
    setAnimationValue(val)
  }
  return (
    <>
      <View
        onTouchStart={() => {
          if (animationValue === 0) {
            toggleAnimation()
          }
        }}
        style={{ flex: 1, zIndex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Menüyü Aç" onPress={() => {
          toggleAnimation()
        }} />
      </View>
      <BottomSheet onCancel={() => {
        toggleAnimation()
      }} animation={showAnimation} />

    </>

  )
}

export default App;
