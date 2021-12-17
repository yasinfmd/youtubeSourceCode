import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Accelerometer } from "expo-sensors"
export default function App() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 })
  const [subscribe, setSubscribe] = useState(null)

  const connect = () => {
    setSubscribe(Accelerometer.addListener((_data) => {
      setData(_data)
    }))
  }

  useEffect(() => {
    connect()
  }, [])
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "20px" }}>X {Math.floor(data.x)}</Text>
      <Text style={{ fontSize: "20px" }}>Y {Math.floor(data.y)}</Text>
      <Text style={{ fontSize: "20px" }}>Z {Math.floor(data.z)}</Text>

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
