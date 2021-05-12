import React, { useEffect, useRef, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import GeoLocation from '@react-native-community/geolocation'
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Circle, Polygon } from 'react-native-maps';
const App = () => {
  const customPolygon = [
    { longitude: 32.5648499, latitude: 39.9823817 },
    { longitude: 32.8106689, latitude: 40.0517964 },
    { longitude: 33.0221558, latitude: 40.0402322 },
    { longitude: 33.0715942, latitude: 39.8992015 },
    { longitude: 33.0317688, latitude: 39.7673808 },
    { longitude: 32.895813, latitude: 39.6733704 },
    { longitude: 32.6417542, latitude: 39.6871102 },
    { longitude: 32.4742126, latitude: 39.753657 },
    { longitude: 32.409668, latitude: 39.8317409 },
    { longitude: 32.4797058, latitude: 39.8412316 },
    { longitude: 32.6802063, latitude: 39.8454492 },
    { longitude: 32.518158, latitude: 39.9086828 },
    { longitude: 32.5689697, latitude: 39.9718581 }
  ]
  const [pos, setPos] = useState({
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    latitude: 0,
    longitude: 0,
  })
  useEffect(() => {
    GeoLocation.getCurrentPosition(
      position => {
        setPos({ ...pos, latitude: position.coords.latitude, longitude: position.coords.longitude })
      },
      error => {
        console.log(`error`, error)
      },
      {
        enableHighAccuracy: true
      }
    )
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <MapView
        onUserLocationChange={(e) => {
          // console.log(`locationChange`, e.nativeEvent)
        }}
        mapType="standard"
        followsUserLocation={true}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={pos}
        showsUserLocation={true}

      >
        <Polygon coordinates={customPolygon} strokeWidth={2}
          fillColor="rgba(0,138,212,0.4)"
          strokeColor="rgba(0,138,212,0.8)" tappable onPress={(e) => {
            console.log(`tıklandı`, e.nativeEvent)
          }} />
        <Circle center={pos} radius={200}
          strokeWidth={2}
          fillColor="rgba(0,138,212,0.4)"
          strokeColor="rgba(0,138,212,0.8)" />
        <Marker title="Ankara"
          onPress={(e) => {
            console.log(`press`, e.nativeEvent.coordinate)
          }}
          onCalloutPress={(e) => {
            console.log(`açıklama`, e.nativeEvent.coordinate)

          }}
          draggable
          onDrag={() => {
            console.log("başladı")
          }}
          onDragStart={() => {
            console.log("sürüklüyor")
          }}
          onDragEnd={(e) => {
            console.log(`sürükleme bitti`, e.nativeEvent.coordinate)
          }}
          pinColor="blue" description={"Açıklama buraya girilecek"} coordinate={pos} >
          <Callout>
            <View>
              <Text style={{ color: "purple" }}>

                Merhaba Dünya
              </Text>

            </View>
          </Callout>

        </Marker>

      </MapView>
    </View >

  )
}


export default App;
