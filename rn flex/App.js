import React from 'react'



import { View, Text } from 'react-native'



const App = () => {
  return (
    <>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View style={{ backgroundColor: 'blue', flex: 1, flexDirection: 'column-reverse', height: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Kutu 1</Text>
          <Text>Kutu 10</Text>
        </View>
        <View style={{ backgroundColor: 'purple', flex: 1, height: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Kutu 2</Text>

        </View>
        <View style={{ backgroundColor: 'green', flex: 1, height: 100, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Kutu 3</Text>
        </View>
      </View>



    </>
  )
}


export default App