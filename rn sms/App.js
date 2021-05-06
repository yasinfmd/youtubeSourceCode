import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SmsListener from 'react-native-android-sms-listener'
import SmsAndroid from 'react-native-get-sms-android'
const App = () => {

  useEffect(() => {
    const filter = {
      box: "",
      // bodyRegex:"" //regex 
      //body:"selam",
      //adress:"+905545455"
      //minDate: 123213213,
      //maxDate:12312321321
      read: 1,
      indexFrom: 0,
      maxCount: 10
    }
    SmsAndroid.list(
      JSON.stringify(filter),
      (fail) => {
        console.log('fail', fail)
      },
      (count, smsList) => {
        console.log('count', count)
        console.log('smsList', JSON.parse(smsList))
      }
    )
  }, [])
  useEffect(() => {
    const subscribe = SmsListener.addListener(message => {
      console.log("gelen sms", message)
    })
    return () => subscribe.remove()
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <TouchableOpacity onPress={() => {
        SmsAndroid.autoSend(
          "0555 555 22 33",
          "React Native Butonuna Basılarak Sms Gönderildi",
          (fail) => {
            console.log('fail', fail)
          },
          (succes) => {
            console.log('success', succes)
          }
        )
      }}>
        <Text>
          React Native Sms Listen

        </Text>
      </TouchableOpacity>
    </View>
  )
}


export default App;
