import React from 'react'


import { View, Button, Text } from 'react-native'
import { check, PERMISSIONS, RESULTS, request, checkMultiple, requestMultiple, openSettings } from 'react-native-permissions'
const App = () => {

  const requestPermission = () => {
    request(PERMISSIONS.ANDROID.CALL_PHONE).then((response) => {
      console.log(response)
    })
  }
  const requestLocation = () => {
    request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((response) => {
      console.log(response)
    })
  }

  const checkPermissionLocation = () => {
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
      .then((result) => {
        switch (result) {
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        // …
      });
  }
  React.useEffect(() => {
    // checkPermissionLocation()
  }, [])


  const checkMultiplePermission = () => {
    checkMultiple([PERMISSIONS.ANDROID.CALL_PHONE, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((statuses) => {
      console.log(statuses);

    });
  }
  const requestMultiplePermission = () => {
    requestMultiple([PERMISSIONS.ANDROID.CALL_PHONE, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]).then((response) => {
      console.log("response", response)
    })
  }


  const checkPermission = () => {
    check(PERMISSIONS.ANDROID.CALL_PHONE)
      .then((result) => {
        switch (result) {
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        // …
      });
  }

  return (
    <>
      <View style={{ backgroundColor: "#fff", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="İzin İste" onPress={() => {
          requestPermission()
        }} />

        <Button title="Kontrol Et" onPress={() => {
          checkPermission()
        }} />

        <Button title="Lokasyon İzni İste" onPress={() => {
          requestLocation()
        }} />

        <Button title="Multiple Check" onPress={() => {
          requestMultiplePermission()
        }} />

        <Button title="Ayarlar" onPress={() => {
          openSettings().catch(() => console.warn('cannot open settings'));
        }} />
      </View>

    </>
  )
}

export default App