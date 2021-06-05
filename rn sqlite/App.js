import React from 'react'
import { useEffect } from 'react';
import { View, Text, Button } from 'react-native'
import SQLite from 'react-native-sqlite-storage'
const db = SQLite.openDatabase({
  location: "default",
  name: "SqliteDb"
}, () => {
  console.log('başarılı')
}, (err) => {
  console.log('hata')
})
const App = () => {

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("CREATE TABLE IF NOT EXISTS students (ID INTEGER PRIMARY KEY AUTOINCREMENT , Name TEXT, AGE INTEGER)", [], (tx, result) => {
        console.log('tx', tx)
        console.log('result', result)
      })
    })
  }, [])
  const createRecord = () => {
    for (let index = 0; index < 20; index++) {
      const name = "Öğrenci" + index
      const age = Math.floor(Math.random() * 50)
      db.transaction((tx) => {
        tx.executeSql('INSERT INTO students (Name,Age) VALUES(?,?)', [name, age], (tx, result) => {
          console.log('tx', tx)
          console.log('result', result)

        })
      })
    }
  }
  const readRecord = () => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM students', [], (tx, result) => {
        console.log('result', result)
        for (let index = 0; index < result.rows.length; index++) {
          console.log(result.rows.item(index))

        }
      })
    })
  }
  const deleteRecord = () => {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM students where id = ? ', [1], (tx, result) => {
        console.log(`tx`, tx)
        console.log(`result`, result)

      })
    })
  }
  return (
    <View>
      <Button title="Ekle" onPress={createRecord} />
      <Button title="Sil" onPress={deleteRecord} />
      <Button title="Oku" onPress={readRecord} />

      <Text>
        React Native sqlite
      </Text>
    </View>
  )
}
export default App