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
        body: Container(
          width: 250,
          height: 250,
          padding: const EdgeInsets.all(20),
          margin: const EdgeInsets.all(20),
          alignment: Alignment.topLeft,
          decoration: BoxDecoration(
              color: Colors.amber,
              borderRadius: const BorderRadius.all(Radius.circular(4)),
              border: Border.all(
                color: Colors.black,
                width: 1,
              )),
          child: const Text(
            'Merhaba',
            style: TextStyle(color: Colors.white),
          ),
          //constraints: BoxConstraints.expand(),
        ));
  }
}
