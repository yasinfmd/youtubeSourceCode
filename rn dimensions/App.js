import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Dimensions,
  useWindowDimensions
} from 'react-native';

const App = () => {
  const window = useWindowDimensions();
  const [landScape, setLandscape] = useState(false);

  const isLandScape = () => {
    const sWidth = Math.floor(Dimensions.get('screen').width);
    const wHeight = Math.floor(Dimensions.get("window").height)
    setLandscape(sWidth === wHeight)


  }
  useEffect(() => {
    Dimensions.addEventListener('change', (e) => {
      //console.log(`e`, e)
      isLandScape();
    })
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text>
        Width : {Dimensions.get('window').width}
        Height : {Dimensions.get("window").height}

      </Text>

      <Text>
        Width : {Dimensions.get('screen').width}
        Height : {Dimensions.get('screen').height}

      </Text>

      <Text>
        Hookile Beraber Dimensions
      </Text>
      <Text>
        Width : {window.width}
        Height : {window.height}
      </Text>
      <Text>
        Yatay : {JSON.stringify(landScape)}
      </Text>

    </View>
  )
}


export default App;
