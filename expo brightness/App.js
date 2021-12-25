import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Brightness from "expo-brightness"
import { useEffect } from 'react';
import { useState } from 'react';
export default function App() {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync()
      if (status === "granted") {
        setStatus(true)
        //Brightness.setBrightnessAsync(1)
      }
    })()
  }, [])

  useEffect(async () => {
    if (status) {
      const x = await Brightness.getBrightnessAsync()
      console.log(`x`, x)

      const y = await Brightness.getPermissionsAsync()
      console.log(`y`, y)
    }
  }, [status])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
