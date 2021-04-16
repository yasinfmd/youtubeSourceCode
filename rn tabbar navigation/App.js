import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        // aktifse aktif componentimi pasifse pasif

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            onPress={onPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isFocused ? '#673ab7' : '#222', height: '100%' }}
          >
            <Text style={{ color: '#fff' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
    </View>
  );
}
function UserPage({ navigation }) {

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Kullanıcı Ekranı</Text>

    </View>
  )
}
function OtherPage({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: 'deneme', headerStyle: {
        backgroundColor: '#000',
        shadowColor: 'transparent',
      }
    })
  }, [])
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Diğer Ekran</Text>
    </View>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='User' tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="User" component={UserPage} />
        <Tab.Screen name="Other" component={OtherPage} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
export default App