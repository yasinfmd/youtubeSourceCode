import React, { useState, useRef, useEffect } from 'react'

import { View, Text, TextInput } from 'react-native'




const App = () => {
  const [text, setText] = useState('')
  const inputRef = useRef()
  useEffect(() => {

    // inputRef.current.focus();
    const isFocus = inputRef.current.isFocused();
    //inputRef.current.blur();
    console.log('isFocus', isFocus)

  }, [])
  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput style={{ width: '100%', borderWidth: 1, borderRadius: 20, paddingLeft: 20, paddingRight: 20 }}
        ref={inputRef}
        placeholder='bana birşeyler söyle'
        placeholderTextColor='red'
        autoCapitalize='words'
        //autoFocus={false}
        keyboardType='default'
        selectTextOnFocus={true}
        selectionColor='red'
        //underlineColorAndroid='red'
        editable={true}
        returnKeyType='send'
        //multiline={true}
        onContentSizeChange={(e) => {
          console.log('height', e.nativeEvent.contentSize.height)
        }}
        onFocus={() => {
          console.log('focus Oldu')
        }}
        onSubmitEditing={(e) => {
          console.log('Gönderdi')
        }}
        onEndEditing={(e) => {
          console.log('e', e.nativeEvent)
        }}
        onBlur={(e) => {
          console.log('focusOut Oldu', e.nativeEvent)
        }}
        //numberOfLines={4}
        secureTextEntry={false}
        value={text}
        onChange={(e) => {
          //console.log(e.nativeEvent.text)
        }}
        onChangeText={(text) => {
          setText(text)
        }}


      />

      <TextInput style={{ width: '100%', borderWidth: 1, borderRadius: 20, paddingLeft: 20, paddingRight: 20 }} />
    </View>
  )
}



export default App