import React, { useState } from 'react'

import { View, Text, TouchableOpacity, Image } from 'react-native'

import { launchCamera } from 'react-native-image-picker';

const App = () => {
  const [photo, setPhoto] = useState(null)
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={async () => {
        await launchCamera({ mediaType: 'photo', quality: 1, includeBase64: false, cameraType: 'front', saveToPhotos: true, maxWidth: 1000, maxHeight: 600 }, (res) => {
          setPhoto(res.uri)
          //console.log('res', res)
        })
      }}>
        <Text>Resim Çek</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => {
        await launchCamera({ mediaType: 'video', videoQuality: 'high', durationLimit: 15, saveToPhotos: true }, (res) => {
          console.log('res', res)
        })
      }}>
        <Text>Video Çek</Text>
      </TouchableOpacity>


      {photo && <View style={{ flex: 1, }}>
        <Image source={{ uri: photo }} style={{ width: 480, height: 480 }} />
      </View>}


    </View>
  )
}



export default App