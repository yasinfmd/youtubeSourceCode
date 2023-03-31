/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ViewShot from "react-native-view-shot";

import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  FlatList,
  Dimensions
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import openMap from 'react-native-open-maps'



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const openAppMap=()=>{
      openMap({
        latitude:39,
        longitude:32,
        zoom:20,
        mapType:'satellite',
        provider:'google',
        travelType:'public_transport'
      })
  }

  return (
    <SafeAreaView style={backgroundStyle}>
          <Button onPress={openAppMap} title="Haritayı aç" color="#cc2233"/>
    </SafeAreaView>
  );
}



export default App;
