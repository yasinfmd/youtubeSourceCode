import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import DeviceInfo from 'react-native-device-info'
const App = () => {
  const [deviceInfo, setDeviceInfo] = useState({})

  useEffect(() => {
    DeviceInfo.getApiLevel().then(apiLevel => {
      console.log(`apiLevel`, apiLevel)
    })
    DeviceInfo.getBatteryLevel().then(batteryLevel => {
      console.log(`batteryLevel`, batteryLevel)
    })
    const brand = DeviceInfo.getBrand();
    console.log(`brand`, brand)
    const appName = DeviceInfo.getApplicationName();
    console.log(`appName`, appName)
    const bundleId = DeviceInfo.getBundleId();
    console.log(`bundleId`, bundleId)
    DeviceInfo.getDeviceName().then((deviceName) => {
      console.log(`deviceName`, deviceName)
    })
    DeviceInfo.getFreeDiskStorage().then(freeDisk => {
      console.log(`freeDisk`, freeDisk)
    })
    DeviceInfo.getIpAddress().then(ip => {
      console.log(`ip`, ip)
    })
    DeviceInfo.getMacAddress().then(mac => {
      console.log(`mac`, mac)
    })
    DeviceInfo.getManufacturer().then(manufacturer => {
      console.log(`manufacturer`, manufacturer)
    })
    DeviceInfo.getPowerState().then(state => {
      console.log(`state`, state)
    })
    DeviceInfo.getTotalDiskCapacity().then(diskCapacity => {
      console.log(`diskCapacity`, diskCapacity)
    })
    DeviceInfo.getTotalMemory().then(memory => {
      console.log(`memory`, memory)
    })
    DeviceInfo.getUsedMemory().then(usedMemory => {
      console.log("usedMemory", usedMemory)
    })
    DeviceInfo.isAirplaneMode().then(mode => {
      console.log(`isAirplane`, mode)
    })
    DeviceInfo.isBatteryCharging().then(val => {
      console.log('isCharging', val)
    })
    DeviceInfo.isPinOrFingerprintSet().then(res => {
      console.log(`res`, res)
    })
    const tablet = DeviceInfo.isTablet()
    console.log(`tablet`, tablet)

    DeviceInfo.isLandscape().then(landscape => {
      console.log(`landscape`, landscape)
    })

    DeviceInfo.hasGms().then(res => {
      console.log(`gms`, res)
    })
    let isHaveNotch = DeviceInfo.hasNotch();
    console.log(`isNotch`, isHaveNotch)
    DeviceInfo.isHeadphonesConnected().then(res => {
      console.log(`kulaklık`, res)
    })

  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text>
        React Native Device Info

      </Text>
    </View>
  )
}


export default App;
