import React, { useEffect, useState } from 'react'


import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import CameraRoll from '@react-native-community/cameraroll'
const App = () => {
  const [albumList, setAlbumList] = useState([])
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    getAlbums();
  }, [])

  const getAlbums = async () => {
    const result = await CameraRoll.getAlbums({ assetType: 'Photos' })
    setAlbumList(result)
  }

  const getPhotosByAlbum = async (albumName) => {
    const result = await CameraRoll.getPhotos({
      first: 10,
      groupName: albumName,
      assetType: 'Photos',
      include: ['fileSize', 'filename', 'imageSize', 'location']

    })
    const list = []
    result.edges.forEach((item) => {
      list.push(item.node.image.uri)
    })
    console.log(list)
    setImageList(list)
  }

  return (
    <>
      <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {albumList.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => {
              getPhotosByAlbum(item.title)
            }} style={{ marginBottom: 10 }}>
              <Text>Albüm Adı : {item.title} - Fotoğraf Sayısı : {item.count}</Text>
            </TouchableOpacity>
          )
        })}

      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
          {imageList.length > 0 && imageList.map((item, index) => {
            return (
              <View key={index} style={{ marginBottom: 20, borderWidth: 1, width: 200, height: 200 }}>
                <Image style={{ width: '100%', height: '100%' }} source={{ uri: item }} />
              </View>
            )
          })}

        </ScrollView>
      </View>
    </>
  )
}



export default App