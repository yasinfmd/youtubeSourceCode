import React, { useEffect, useState, useRef } from 'react'


import { View, Text, ActivityIndicator, ScrollView, RefreshControl, TouchableOpacity } from 'react-native'
const App = () => {
  const [countryList, setCountryList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isRefresh, setIsRefresh] = useState(false)

  const scrollRef = useRef();
  useEffect(() => {
    setIsLoading(true)
    fetchCountryList()
  }, [])
  const fetchCountryList = () => {
    try {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then((json) => {
          setCountryList(json)
        })

    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={{ padding: 20 }}>
      {isLoading && <ActivityIndicator size='large' color='purple' />}

      <TouchableOpacity onPress={() => {
        scrollRef.current.scrollTo({ x: 0, y: 67500, animated: true })
      }} style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text>Scroll'u Hareket Ettir</Text>
      </TouchableOpacity>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={true}
        onScroll={(e) => {
          console.log('e', e.nativeEvent.contentOffset)
        }}
        refreshControl={
          <RefreshControl refreshing={isRefresh} onRefresh={() => {
            setIsRefresh(true)
            setTimeout(() => {
              setIsRefresh(false)
            }, 1000);
          }} />
        }
        onScrollBeginDrag={(e) => {
          console.log('e', e.nativeEvent.contentSize)
        }}>
        {countryList.map((item) => {
          return (
            <View
              key={item.name}
              style={{
                width: '100%',
                marginBottom: 20,
                height: 250,
                padding: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                shadowColor: "#000",
                borderRadius: 20,
                elevation: 3

              }}>
              <Text>Ülke : {item.name}</Text>
              <Text>Nufus : {item.population}</Text>
            </View>
          )
        })}

        <TouchableOpacity onPress={() => {
          scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })
        }} style={{ alignItems: 'center', marginBottom: 20 }}>
          <Text>Scroll'u Hareket Ettir</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  )
}



export default App