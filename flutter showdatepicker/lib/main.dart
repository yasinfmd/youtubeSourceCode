import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

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
  const MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  final TextEditingController _dateController=TextEditingController();

  @override
  void dispose() {
    _dateController.dispose();
    super.dispose();
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextField(
              controller: _dateController,
              decoration: InputDecoration(hintText: "Tarih Seç"),
              onTap: (){
                showDatePicker(context: context,
                    builder: (context,child){
                      return Theme(data: ThemeData.dark().copyWith(
                        colorScheme: const ColorScheme.dark(
                          onPrimary: Colors.black,
                          onSurface: Colors.amberAccent,
                          primary: Colors.red,
                        )
                      ) ,child: child!);
                    },
                    initialEntryMode:DatePickerEntryMode.calendarOnly ,
                    confirmText: "Onayla",
                    cancelText: "Vazgeççç",
                    helpText: "Bir takım tarihsel olaylar",
                    initialDate: DateTime.now(), firstDate: DateTime.now().subtract(Duration(days: 100)), lastDate: DateTime(2100)).then((value){
                      _dateController.text="Tarih !";
                      print(value);
                });
              },
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
