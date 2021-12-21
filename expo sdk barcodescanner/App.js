import React, { useState, useEffect } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from "expo-barcode-scanner"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scannedData, setScannedData] = useState(null)
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === "granted")
    })()
  }, [])
  const handleScanned = (data) => {
    console.log("type", data.type)
    console.log("data", data.data)
    alert(data.type + data.data)

    setScannedData(null)
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scannedData ? undefined : handleScanned}
        style={{
          width: 400,
          height: 400
        }}
      />
    </View>
  );
}

