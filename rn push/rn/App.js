import React, { useEffect } from 'react'
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging'
import PushNotification, { Importance } from 'react-native-push-notification'
import { View, Text } from 'react-native'
const App = () => {

  const createChannel = (channelId) => {
    PushNotification.createChannel(
      {
        channelId: channelId, // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }
  const showNotification = (channelId, options) => {
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: channelId, // (required) channelId, if the channel doesn't exist, notification will not trigger.
      largeIconUrl: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-128.png", // (optional) default: undefined
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
      subText: options.subText, // (optional) default: none
      bigPictureUrl: options.bigImage, // (optional) default: undefined
      bigLargeIconUrl: "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-128.png", // (optional) default: undefined
      color: options.color, // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      priority: "high", // (optional) set notification priority, default: high
      actions: ["ReplyInput"],
      reply_placeholder_text: "Merhaba De..", // (required)
      reply_button_text: "Cevapla", // (required)

      title: options.title, // (optional)
      message: options.message, // (required)
    });
  }

  useEffect(() => {
    messaging().getToken(firebase.app().options.messagingSenderId).then((token) => {
      console.log(`token`, token)
    })
    const unsubscribe = messaging().onMessage(async remoteMsg => {
      const channelId = Math.random().toString(36).substring(7)
      createChannel(channelId)
      showNotification(channelId, { bigImage: remoteMsg.notification.android.imageUrl, title: remoteMsg.notification.title, message: remoteMsg.notification.body, subText: remoteMsg.data.subTitle })
      console.log('remoteMsg', remoteMsg)

    })
    messaging().setBackgroundMessageHandler(async remoteMsg => {
      console.log(`remoteMsg Background`, remoteMsg)
    })

    return unsubscribe
  }, [])
  return (
    <View>
      <Text>Deneme</Text>
    </View>
  )
}

export default App