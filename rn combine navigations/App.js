import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import { View, Text, Button } from 'react-native'

const StackOne = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Sayfa 1
      </Text>
      <Button title='Sayfa 2 ye Git !' onPress={() => {
        navigation.navigate('Page2')
      }} />
    </View>
  )
}
const StackTwo = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Sayfa 2
      </Text>
    </View>
  )
}
const StackThree = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Sayfa 3
      </Text>
    </View>
  )
}
const StackFour = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Sayfa 4
      </Text>
    </View>
  )
}


const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Page1' component={StackOne} />
      <Stack.Screen name='Page2' component={StackTwo} />
    </Stack.Navigator>
  )
}
const OtherNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Page3' component={StackThree} />
    </Stack.Navigator>
  )
}
const StackFourNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Page4' component={StackFour} />
    </Stack.Navigator>
  )
}
const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='TabHome' component={MainNavigator} />
      <Tab.Screen name='TabOther' component={OtherNavigator} />
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='DrawerHome' component={BottomNavigator} />
        <Drawer.Screen name='DrawerOther' component={StackFourNavigator} />

      </Drawer.Navigator>
    </NavigationContainer>

  )
}
export default App