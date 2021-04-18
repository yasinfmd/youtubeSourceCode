import React, { useEffect } from 'react'

import { View, Text } from 'react-native'

import axios from 'axios'


const App = () => {
  useEffect(() => {
    fetchMockData()
  }, [])
  const fetchMockData = async () => {
    const { data } = await axios.get('http://192.168.1.106:3000/api/users')
    console.log('response', data)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home</Text>
    </View>
  )
}



export default App