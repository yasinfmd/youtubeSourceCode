import React, { useEffect } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import SplashScreen from 'react-native-splash-screen'

import { Anchor, Bell } from './components/icons'

const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    // }, 2000);
    SplashScreen.hide();

  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
        alert('İkona Tıklandı')
      }} >
        <Anchor />
      </TouchableOpacity>
      <Text>React Native SVG Icon Kullanımı</Text>
      <Bell />
    </View>
  )
}



export default App