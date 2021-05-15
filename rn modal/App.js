import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  ImageBackground
} from 'react-native';


const App = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Pressable
        android_ripple={{
          color: "green",
          borderless: true,
          radius: 10
        }}
        style={{
          backgroundColor: "blue",
          padding: 20

        }}
        onPressOut={() => {
          setIsVisible(false)
        }}
        onLongPress={() => {
          setIsVisible(true)

        }}>
        <Text style={{ color: '#fff' }}>Modalı Aç / Kapa</Text>
      </Pressable>

      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10
        }}>
          <View style={{
            width: 200,
            height: 200,
            backgroundColor: "#fff",
            alignItems: "center"
          }}>
            <ImageBackground
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wIoc0g7DauqCEn5sLYC-_zEbQDPVInZvKw&usqp=CAU" }}>
              <Text style={{
                color: '#fff',
                backgroundColor: "#000"
              }}>Merhaba Dünya</Text>
            </ImageBackground>
          </View>
        </View>
      </Modal>
    </View >

  )
}


export default App;
