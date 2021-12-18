import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Application from "expo-application"
export default function App() {

  useEffect(async () => {
    console.log("App Id", Application.applicationId)
    console.log("App Name", Application.applicationName)
    console.log("App Version", Application.nativeApplicationVersion)
    console.log("App Build Version", Application.nativeBuildVersion)
    const time = await Application.getInstallationTimeAsync()
    console.log("Time", time)
    const relatesType = await Application.getIosApplicationReleaseTypeAsync()
    console.log("releatesType", relatesType)
    // Application.ApplicationReleaseType.



  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
