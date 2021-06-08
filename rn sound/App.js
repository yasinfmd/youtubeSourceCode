import React, { useEffect } from 'react'
import { useState } from 'react';

import { View, Text, Button } from 'react-native'
import Sound from 'react-native-sound';
const App = () => {

  const [music, setMusic] = useState(null)
  const [second, setSecond] = useState(0)
  const [duration, setDuration] = useState(0)
  const play = () => {
    let summer = new Sound("https://cf-hls-media.sndcdn.com/media/1596185/1755844/ZN6AZgnTN6v5.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLWhscy1tZWRpYS5zbmRjZG4uY29tL21lZGlhLyovKi9aTjZBWmduVE42djUuMTI4Lm1wMyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTYyMzE3NzAyNH19fV19&Signature=cl-qrhp3e26EaIrUpW0aZ3TyEAip914~vzxL9tngoyZIqhn8UNw5Z9LVO1PhZXtbflsm5tf1AmE39CqhtqzwlSdoR2y6fR57vajEPqJaeNskBLchl-ffBF7GQKgxah6sFyKibOAcCLaHI1UczLDGtPSuK5zh5byimRIp7GA9cdPr8Zpm-oPJ6VsMF9ehc5jicnA~bsE3Y8uQRdStSf3bIC9Lp8IzfsRioWBQlahV9GW6qsTvnL0m4y9NIWe5j9AiGU8pURwh2WwMbu5FkyiuC7rH753MBNwnY7zueLw42GOUwD5VczaaNPGhM52roFaAGl~VsKZ~WS7K3tp1D4Ap~g__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ", null, (err) => {
      if (err) {
        console.log('hata', err)
        return
      }
      summer.play((success) => {
        console.log('end', success)
      })
      setDuration(summer.getDuration())

    })
    console.log('summer', summer)
    setMusic(summer)
  }
  useEffect(() => {
    if (music) {
      let id = setInterval(() => {
        music.getCurrentTime((second, play) => {
          setSecond(second)
        })
      }, 100)
    }
  }, [music])
  const setVolume = (type) => {
    const volume = music.getVolume()
    console.log(volume)
    if (type == "+") {
      const newVolume = volume + .1
      music.setVolume(newVolume)
    } else {
      const newVolume = volume - .1
      music.setVolume(newVolume)
    }
  }
  return (
    <View>
      <Button title="Çal" onPress={() => { play() }} />
      <Button title="Duraklat" onPress={() => { music.pause() }} />

      <Button title="Başlat" onPress={() => { music.play() }} />

      <Button title="Durdur" onPress={() => { music.stop() }} />

      <Button title="Ses Arttır" onPress={() => { setVolume('+') }} />

      <Button title="Ses Azalt" onPress={() => { setVolume("-") }} />

      <Button title="İleri Sar" onPress={() => { music.setCurrentTime(100) }} />

      <Button title="Kontrol" onPress={() => { console.log(music.isPlaying()) }} />

      <Text>{second}  / Total Second {duration}</Text>
    </View>
  )
}
export default App
