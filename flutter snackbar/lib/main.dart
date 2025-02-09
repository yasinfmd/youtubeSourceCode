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
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextButton(
                onPressed: () {
                  ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                    duration: Duration(seconds: 1),
                    backgroundColor: Colors.white,
                    content: Text(
                      'İşleme devam edilsin mi?',
                      style: TextStyle(color: Colors.red),
                    ),
                    action: SnackBarAction(
                      textColor: Colors.purple,
                      disabledTextColor: Colors.yellow,
                      label: "Evet",
                      onPressed: () {
                        ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(content: Text('İşlem başarılı')));
                        print("Evet");
                      },
                    ),
                  ));
                },
                child: Text('Snackbar')),
            const Text(
              'You have pushed the button this many times:',
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
