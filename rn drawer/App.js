import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import { useIsDrawerOpen } from '@react-navigation/drawer';


function CustomDrawerContent({ state, descriptors, navigation }) {
  return (
    <DrawerContentScrollView>
      <View style={{ height: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: '#c6cbef' }}>
        <Text>LOGO</Text>
      </View>
      {
        state.routes.map((route, index) => {
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

          return (
            <DrawerItem key={index}
              activeTintColor={'red'}
              inactiveTintColor={'blue'}
              focused={isFocused}
              activeBackgroundColor='black'
              inactiveBackgroundColor='green'
              onPress={onPress}
              label={({ focused, color }) => <Text style={{ color }}>{isFocused ? 'Focuslandı' : label}</Text>}
            />
          )

        })
      }

    </DrawerContentScrollView>
  )
}

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
  const isDrawerOpen = useIsDrawerOpen();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{isDrawerOpen ? 'Açık' : 'Kapalı'} </Text>
      <TouchableOpacity onPress={() => {
        navigation.toggleDrawer();
      }}>
        <Text>Ana Ekrandan Menüyü Toggle Et</Text>
      </TouchableOpacity>
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

      <TextInput style={{ height: 40, width: '100%', borderWidth: 1 }} />

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
      <Drawer.Navigator drawerType='front' initialRouteName='User' overlayColor="transparent" drawerStyle={{
        width: '60%',
      }} openByDefault={false} drawerPosition='left' drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="User" component={UserPage} />
        <Drawer.Screen name="Other" component={OtherPage} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}
export default App