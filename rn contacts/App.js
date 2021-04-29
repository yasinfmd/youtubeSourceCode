/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

import Contacts from 'react-native-contacts'
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getContacCounts();
    getAllContacts();
  }, [])

  const getAllContacts = async () => {
    let contactArr = []
    const result = await Contacts.getAll();
    result.forEach((item) => {
      contactArr = [...contactArr, { contactId: item.rawContactId, displayName: item.displayName, image: item.thumbnailPath, familyName: item.familyName, phoneNumber: item.phoneNumbers[0].number }]
    })
    console.log(`result`, result)
    setData(contactArr)
  }
  const getContacCounts = async () => {
    const result = await Contacts.getCount();
    console.log(`result`, result)
  }

  const getContactById = async (id) => {
    const result = await Contacts.getContactById(id)
    console.log(`result`, result)
  }
  const onCreateNewContact = async () => {

    const contact = {
      familyName: "Salise",
      givenName: "Saat",
      phoneNumbers: [{
        label: "mobile",
        number: "0555 777 88 99"
      }]
    }
    const result = await Contacts.openContactForm(contact);
    console.log(`result`, result)
  }

  const deleteContactById = async () => {
    const result = await Contacts.deleteContact({ recordID: "11" })
    console.log(`result`, result)
  }

  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity onPress={() => {
          getContactById(item.contactId)

        }}>
          <View style={{ flexDirection: "row", borderBottomWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ backgroundColor: 'blue', height: 50, width: 50, borderRadius: 9999, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 20 }}>{item.displayName.charAt(0).toUpperCase() + " " + item.familyName.charAt(0).toUpperCase()} </Text>
            </View>
            <View style={{ padding: 20, flex: 4 }}>
              <Text>{item.displayName}</Text>
              <Text>{item.phoneNumber}</Text>
            </View>
          </View>
        </TouchableOpacity>

      </>
    )
  }
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TouchableOpacity onPress={() => {
        onCreateNewContact();
      }}>
        <Text>Yeni Kişi Oluştur</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        deleteContactById();
      }}>
        <Text>Kişi Sil</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.contactId}
      />
    </View>
  )
}


export default App;
