import 'package:flutter/material.dart';
import 'package:table_calendar/table_calendar.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';


void main() {
  initializeDateFormatting().then((value) => runApp(MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class Event {
  final String title;

  const Event(this.title);

  @override
  String toString() => title;
}

class _MyHomePageState extends State<MyHomePage> {
  var _focusDay = DateTime.now();
  var _format = CalendarFormat.month;
  var _selectedDay;
  Map<String,List<Event>> events={
    '2023-04-08':[Event("asdasdas"),Event("Başlık"),Event("Deneme")],
    '2023-04-18':[Event("asdasdas")],

  };
  List<Event> _getMyEvents(day){
    final DateFormat formatter=DateFormat("yyyy-MM-dd");
    String formattedStr=formatter.format(day);
    return events[formattedStr] ?? [];
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView(
        children: <Widget>[
          TableCalendar(
              locale: 'tr_TR',
              currentDay: DateTime.now(),
              onFormatChanged: (format) {
                setState(() {
                  _format = format;
                });
              },
              pageAnimationDuration: Duration(seconds: 5),
              pageJumpingEnabled: true,
              pageAnimationEnabled: true,
              onCalendarCreated: (ctrl) {
                print("created");
              },
              daysOfWeekStyle: DaysOfWeekStyle(decoration: BoxDecoration(color: Colors.red)),
              startingDayOfWeek: StartingDayOfWeek.monday,
              availableGestures: AvailableGestures.all,
              daysOfWeekVisible: false,
              headerVisible: false,
              calendarBuilders: CalendarBuilders(
                dowBuilder: (ctx,day){
                  if(day.weekday==DateTime.sunday){
                    return Center(child: Text("Özel",style: TextStyle(color: Colors.white),),);

                  }
                }
              ),
              eventLoader: _getMyEvents,
              rowHeight: 90,
              calendarStyle: CalendarStyle(markerSize: 5),
              headerStyle: HeaderStyle(
                titleCentered: true,
                formatButtonVisible: false,
              ),
              daysOfWeekHeight: 60,
              onPageChanged: (date) {
                print(date);
              },
              rangeStartDay: DateTime.now(),
              rangeEndDay: DateTime.now().add(Duration(days: 5)),
              selectedDayPredicate: (day) {
                return isSameDay(_selectedDay, day);
              },
              onDaySelected: (selectedDay, focusedDay) {
                print(selectedDay);
                print(focusedDay);
                setState(() {
                  _focusDay = focusedDay;
                  _selectedDay = selectedDay;
                });
              },
              calendarFormat: _format,
              focusedDay: _focusDay,
              firstDay: DateTime.utc(1990, 01, 01),
              lastDay: DateTime.utc(2050, 01, 01))
        ],
      ),

      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
