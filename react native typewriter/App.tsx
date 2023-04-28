import React, { useState } from 'react';

import {
  View,
  Text,
} from 'react-native';
import TypeWriter from 'react-native-typewriter'




function App(): JSX.Element {
  const [state]=useState("Merhaba Dünya")
  return (
      <View>

      <Text>Merhaba</Text>
      <TypeWriter typing={1}
      // minDelay={1000}
      // maxDelay={5000}
      onTyped={(token,pvc)=>{
        console.log("token",token)
        console.log('pvc',pvc)
      }}
      delayMap={[
        {at:4,delay:500}
      ]}
      onTypingEnd={()=>{
        console.log("Yazma bitti")
      }}
      >{state}</TypeWriter>
      </View>
     
  );
}



export default App;
