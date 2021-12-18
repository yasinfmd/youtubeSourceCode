import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as AppleAuth from "expo-apple-authentication"
export default function App() {
  return (
    <View style={styles.container}>
      <AppleAuth.AppleAuthenticationButton
        buttonType={AppleAuth.AppleAuthenticationButtonType.SIGN_UP}
        buttonStyle={AppleAuth.AppleAuthenticationButtonStyle.BLACK}
        collapsable
        cornerRadius={50}
        style={{ width: 250, height: 50 }}
        onPress={async () => {
          try {
            const credential = await AppleAuth.signInAsync({
              requestedScopes: [
                AppleAuth.AppleAuthenticationScope.EMAIL,
                AppleAuth.AppleAuthenticationScope.FULL_NAME,

              ]
            })
            console.log("credatials", credential)
          } catch (e) {
            console.log("hata", e)
          }
        }}

      >

      </AppleAuth.AppleAuthenticationButton>
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
