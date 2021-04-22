import React, { useEffect } from 'react'

import { View, Text } from 'react-native'

import SplashScreen from 'react-native-splash-screen'


const App = () => {
  useEffect(() => {
    // setTimeout(() => {
    // }, 2000);
    SplashScreen.hide();

  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Merhaba Dünya</Text>
    </View>
  )
}



export default App