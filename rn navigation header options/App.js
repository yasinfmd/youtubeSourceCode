import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Ekran</Text>
      <Button
        title="Kullanıcı Sayfasına Git"
        onPress={() => {
          navigation.navigate('User', { id: 1, name: 'Yasin Dalkılıç' })
        }}
      />
    </View>
  );
}
function UserPage({ route, navigation }) {
  console.log('navigasyon', navigation)
  const { id, name } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: name + 'ın Yeri' })
  }, [])
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>Kullanıcı Ekranı {name} {id}</Text>
      <Button
        title="Other Sayfasına Git"
        onPress={() => navigation.navigate('Other')}
      />
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
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
    </View>
  )
}
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Anasayfa' }}





          component={HomeScreen} />
        <Stack.Screen name="User" options={({ route, navigation }) => ({
          title: 'Ana Sayfaaa',
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 14,
          },
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 20 }}>
                <Button onPress={() => navigation.goBack()} title='Geri Git'>Geri</Button>
              </View>
            )
          },
          headerRight: () => {
            return (
              <View style={{ marginRight: 20 }}>
                <TouchableOpacity>
                  <Text style={{ color: '#fff' }}>Tamam</Text>
                </TouchableOpacity>
              </View>
            )
          },
          headerStyle: {
            backgroundColor: '#000',
            shadowColor: 'transparent',
          }
        })} component={UserPage} />
        <Stack.Screen name="Other" component={OtherPage} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App