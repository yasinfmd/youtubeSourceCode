import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo'
import { useNetInfo } from '@react-native-community/netinfo'
const App = () => {
  const netInfo = useNetInfo();
  useEffect(() => {
    NetInfo.fetch().then((res) => {
      console.log('isConnected', res.isConnected)
      console.log('isWifiEnabled', res.isWifiEnabled)
      console.log('connectionType', res.type)
    })
  }, [])

  const fetch = () => {

  }
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('state', state.isConnected)
      state.isConnected && fetch();
    })

    return () => unsubscribe();
  }, [])
  useEffect(() => {
    //status change
  }, [netInfo.isConnected])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text>
        React Native Net Info
      </Text>
      <Text>
        {JSON.stringify(netInfo.type)}
      </Text>
      <Text>
        Connected {JSON.stringify(netInfo.isConnected)}
      </Text>
    </View>
  )
}


export default App;
