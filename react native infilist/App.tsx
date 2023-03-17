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





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [data,setData]=useState<Array<any>>([])
  const [loading,setLoading]=useState(false)
  const fetchData=()=>{
    setLoading(true)
      const arr=Array.from(Array(Math.floor(Math.random()*20)+1).keys())
      setTimeout(()=>{
        setData((prevState)=>prevState.concat(arr))
    setLoading(false)
      },1000)
  }
  useEffect(()=>{
      fetchData();
  },[])
  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList
      data={data}
      ListFooterComponent={loading?<View><Text>Yükleniyor...</Text></View>:<></>}
      keyExtractor={item => item+Date.now()+Math.random()*10000}
      onEndReachedThreshold={0.2}
      onEndReached={fetchData}
      renderItem={({item}) => <View
      style={{
        height:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:16,
        shadowOpacity:1,
        shadowRadius:8,
        shadowColor:Colors.shadow,
        shadowOffset:{width:0,height:0},
        elevation:8,
        paddingLeft:16,
        paddingRight:16,
        marginBottom:16,
        marginRight:16,
        marginLeft:16
      }}
      >
        <Text>
          {item}
        </Text>
      </View>}
      >

      </FlatList>
    </SafeAreaView>
  );
}



export default App;
