import React, { useState, useEffect } from "react"
import { StyleSheet, View, Button } from 'react-native';
import { Audio } from "expo-av"
export default function App() {
  const [isRecording, setIsRecording] = useState()
  const [uri, setUri] = useState()

  const startRecord = async () => {
    try {
      await Audio.requestPermissionsAsync()
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true
      })
      const { recording } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY)
      setIsRecording(recording)
    } catch (error) {
      console.log("err", error)
    }
  }

  const stopRecord = async () => {
    setIsRecording(null)
    await isRecording.stopAndUnloadAsync()

    const soundFile = isRecording.getURI()
    setUri(soundFile)
  }

  const onPlay = async () => {
    const sound = new Audio.Sound()
    try {
      await sound.loadAsync({ uri: uri }, {}, true)
      const playerStatus = await sound.getStatusAsync()
      if (playerStatus.isLoaded) {
        if (!playerStatus.isPlaying) {
          await sound.playAsync()
        }
      }
    } catch (error) {
      console.log("Bir Hata")
    }
  }
  return (
    <View style={styles.container}>
      <Button title={isRecording ? "Kayıtta" : "Kayıtta Değil"}
        onPress={isRecording ? stopRecord : startRecord}
      />


      <Button title={"Çal"}
        onPress={onPlay}
      />
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
