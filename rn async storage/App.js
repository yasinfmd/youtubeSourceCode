/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
const App = () => {
  const { getItem, setItem, removeItem } = useAsyncStorage('ankara')

  const writeStorage = async () => {
    await AsyncStorage.setItem('customKey', JSON.stringify({ id: 1, ad: 'yasin' }))
    await AsyncStorage.setItem('customKey2', '30')
  }
  const readStorage = async () => {
    const customKey = await AsyncStorage.getItem('customKey')
    const customKey2 = await AsyncStorage.getItem('customKey2')
    const customKey3 = await AsyncStorage.getItem('customKey3')

    console.log(`customKey`, customKey)
    console.log(`customKey2`, customKey2)
    console.log(`customKey3`, customKey3)
  }
  const getAllKeys = async () => {
    const result = await AsyncStorage.getAllKeys();
    console.log(`result`, result)
  }

  const clearAllKey = async () => {
    const result = await AsyncStorage.clear();
    console.log(`result`, result)
  }
  const deleteStorageByKey = async () => {
    const result = await AsyncStorage.removeItem('customKey')
    const x = await AsyncStorage.removeItem('customKey3')
    console.log(`result`, result)
    console.log(`x`, x)

  }

  const createMultipleStorage = async () => {
    const val1 = ['key1', 'deger 1'];
    const val2 = ['key2', 'deger 2']
    const result = await AsyncStorage.multiSet([val1, val2])
    console.log(`result`, result)
  }
  const readMultipleStorage = async () => {
    const values = await AsyncStorage.multiGet(['key1', 'key2'])
    console.log(`values`, values)
  }
  const removeMultipleStorage = async () => {
    const result = await AsyncStorage.multiRemove(['key1', 'key2'])
  }
  const onCreateHookStorage = async () => {
    await setItem('Ankara')
    onReadHooksStorage();
  }
  const onReadHooksStorage = async () => {
    const result = await getItem()
    console.log(`result`, result)
  }

  const removeHooksStorage = async () => {
    await removeItem();
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <TouchableOpacity onPress={() => writeStorage()}>
        <Text>
          Storage Yaz
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => readStorage()}>
        <Text>
          Storage Oku
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        getAllKeys();
      }}>
        <Text>
          Tüm Keyleri Getir
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        clearAllKey();
      }}>
        <Text>
          Tüm Elemanları Sİl
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteStorageByKey()}>
        <Text>
          Storage Sil
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => createMultipleStorage()}>
        <Text>Çoklu Olustur</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => readMultipleStorage()}>
        <Text>Çoklu Oku</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removeMultipleStorage()}>
        <Text>Çoklu Sil</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onCreateHookStorage()}>
        <Text>Hook ile Oluştur</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removeHooksStorage()}>
        <Text>Hook ile Sil</Text>
      </TouchableOpacity>
    </View>
  )
}


export default App;
