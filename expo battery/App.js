import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Battery from 'expo-battery';
import { useEffect } from 'react';
export default function App() {
  useEffect(async () => {
    const bl = await Battery.getBatteryLevelAsync()
    console.log("bl", bl)
    const bs = await Battery.getBatteryStateAsync()
    console.log("bs", bs)

    const lpm = await Battery.isLowPowerModeEnabledAsync()
    console.log("lpm", lpm)

    const isav = await Battery.isAvailableAsync()
    console.log("isav", isav)

    const bo = await Battery.isBatteryOptimizationEnabledAsync()
    console.log("bo", bo)

    Battery.addLowPowerModeListener((x) => {
      alert("x")
      console.log("x", x)
    })
    Battery.addBatteryLevelListener((res) => {
      console.log("bl", res)
    })

    Battery.addBatteryStateListener((res) => {
      console.log("bs", res)
    })


  }, [])
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
