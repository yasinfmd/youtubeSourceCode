/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ViewShot from "react-native-view-shot";

import React, { useCallback, useRef, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const ref=useRef<any>()
  const [file,setFile]=useState("");


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          <ViewShot 
          captureMode="mount"
          onCapture={(uri:string)=>{
              console.log('uri', uri)
              setFile(uri)
          }}
          onCaptureFailure={(er)=>{
            console.log('er', er)
          }}
          options={
            {
              fileName:"qwewqeqwe",
              quality:1,
              format:'jpg',
              
            }
          }
          style={{backgroundColor:"red"}}
          ref={ref}>
            <Text>
          Yasin Dalkılıç
        </Text>
          <Header />
          </ViewShot>
          <Button
          onPress={()=>{
            ref.current.capture().then((res:string)=>{
              setFile(res);
              console.log(res);
            })
          }}
          title="Gülümse çekiyorum"
          color="#d55423"
          />

          {
            file && <Image
            style={{height:250,flex:1}}
              source={{
                uri:file
              }}
            />
          }
     
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
