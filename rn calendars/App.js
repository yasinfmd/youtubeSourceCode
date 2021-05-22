/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';


import { Calendar, LocaleConfig } from 'react-native-calendars'
LocaleConfig.locales['tr'] = {
  monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
  monthNamesShort: ["Ock", "Şbt", "Mrt", "Nis", "Mys", "Hzrn", "Tmmz", "Ags", "Eyll", "Ekm", "Ksm", "Arlk"],
  today: "Bugünn",
  dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
  dayNamesShort: ["Pzr", "Pzt", "Sal", "Çrş", "Perş", "Cum", "Cmt"]
}
LocaleConfig.defaultLocale = "tr"
const App = () => {

  return (
    <>
      <Calendar
        theme={
          {
            // calendarBackground: "#000",
            // dayTextColor: "#fff",
            // arrowColor: "#fff",
            // selectedDayBackgroundColor: "#fff",
            // selectedDayTextColor: "#000"
          }
        }
        // monthFormat={"dd"}
        // dayComponent={(e) => {
        //   console.log('e', e)
        //   return (
        //     <View style={{ width: 40, height: 40, backgroundColor: "red" }}>
        //       <Text>{e.date.day}</Text>
        //     </View>
        //   )
        // }}
        //disableArrowLeft
        //disableArrowRight
        //hideArrows
        //hideDayNames
        //hideExtraDays
        //minDate={"2021-02-05"}
        //maxDate={"2021-05-23"}
        //current={"2021-03-10"}
        //showWeekNumbers
        // markingType="simple"
        // markedDates={{
        //   '2021-05-16': { marked: true, selectedColor: 'blue' },
        //   '2021-05-17': { marked: true },
        //   '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: .8 },
        // }}
        // markingType="multi-dot"
        // markedDates={{
        //   '2021-05-16': { marked: true, selected: true, dots: [{ key: "abc", color: "yellow", selectedDotColor: "yellow" }, { color: "red", selectedDotColor: "red" }] },
        //   '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: .8, dots: [{ color: "green", selectedDotColor: "yellow" }] },
        // }}
        // markingType={'period'}
        // markedDates={{
        //   '2021-05-20': { textColor: 'purple', startingDay: true, endingDay: true, color: "green" },
        //   '2021-05-22': { startingDay: true, color: 'green' },
        //   '2021-05-23': { selected: true, endingDay: true, color: 'green', textColor: '#fff' },
        //   '2021-05-04': { startingDay: true, color: 'green', },
        //   '2021-05-05': { color: 'green' },
        //   '2021-05-06': { color: 'green', endingDay: true }
        // }}
        markingType={'custom'}
        markedDates={{
          '2021-05-28': {
            customStyles: {
              container: {
                backgroundColor: 'green'
              },
              text: {
                color: 'black',
                fontWeight: 'bold'
              }
            }
          },
          '2021-05-29': {
            customStyles: {
              container: {
                backgroundColor: 'white',
                elevation: 20
              },
              text: {
                color: 'blue'
              }
            }
          }
        }}

        renderHeader={(date) => {
          return (<Text style={{ color: "#fff" }}>Benim Takvimim {date.getDate()}</Text>)
        }}
        onDayLongPress={(e) => {
          console.log(`e`, e)
        }}
        onMonthChange={(e) => {
          console.log(`e`, e)
        }}
        onPressArrowLeft={(goBack) => {

          console.log("aaaa")
          goBack()
        }}
        enableSwipeMonths
        onPressArrowRight={(goFuture) => {
          console.log("bbb")
          goFuture()
        }}
        // onDayPress={(e) => {
        //   console.log(`e`, e)
        // }}
        firstDay={1}
        style={{ height: "100%" }
        }
      />
    </>

  )
}

export default App;
