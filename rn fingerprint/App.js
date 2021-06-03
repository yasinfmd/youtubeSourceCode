import React, { useEffect } from 'react'


import { View, Text, Button } from 'react-native'
import FingerprintScanner from 'react-native-fingerprint-scanner'

const App = () => {
  useEffect(() => {
    FingerprintScanner.isSensorAvailable().then((response) => {
      console.log('response', response)
    }).catch((err) => {
      console.log('error', err)
    })
  }, [])
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Parmak İzi" onPress={() => {
        FingerprintScanner.authenticate({
          title: "Uygulamayı Kullanmak İçin Parmak İzi Okutun",
          cancelButton: "Vazgeç",
          description: "Açıklama Alanı",
          subTitle: "Alt Başlık",
          onAttempt: (error) => {
            console.log('hata', error)
          }
        }).then((res) => {
          alert('Başarılı Parmak İzi')
          console.log('res', res)
        }).catch((err) => {
          console.log('err', err)
        })
      }}></Button>
      <Text>React Native FingerPrint</Text>
    </View>
  )
}
export default App