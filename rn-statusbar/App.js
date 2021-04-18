import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { View, Text, Button, StatusBar } from 'react-native'

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle='light-content' backgroundColor='#000' />
      <Button title='Git' onPress={() => {
        navigation.navigate('user')
      }} />
      <Text>Home</Text>
    </View>
  )
}

const User = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <Text>User</Text>
    </View>
  )
}

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='home' options={{
            headerStyle: {
              height: 80,
              backgroundColor: '#000'
            },
            headerTintColor: '#fff'
          }} component={Home} />
          <Stack.Screen name='user' component={User} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}



export default App