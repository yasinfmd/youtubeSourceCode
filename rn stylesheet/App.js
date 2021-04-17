import React from 'react'



import { View, Text, StyleSheet } from 'react-native'



const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.customText, styles.redText]}>Selam</Text>
      </View>



    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    opacity: 0.5
  },
  redText: {
    color: '#fff'
  },
  customText: {
    fontWeight: 'bold',
    fontSize: 30
  }
})

export default App