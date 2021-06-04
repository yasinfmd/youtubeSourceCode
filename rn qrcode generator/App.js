import React, { useEffect, useState } from 'react'


import { View, Button, Text, Image } from 'react-native'
import RNQRGenerator from 'rn-qr-generator'
const App = () => {

  const [qrCode, setQrCode] = useState(null)
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Qr Code Generate" onPress={() => {
        RNQRGenerator.generate({
          value: "Yasin Dalkilic",
          height: 400,
          width: 400,
          base64: true,
          backgroundColor: "red",
          color: "#fff"
        }).then((response) => {
          console.log('response', response)
          setQrCode(response.uri)
        })
      }} />

      {qrCode !== null && <Image source={{ uri: qrCode }} style={{ marginTop: 30, width: 400, height: 400 }} />}
    </View>
  )
}
export default App