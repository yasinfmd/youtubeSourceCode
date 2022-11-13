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
    var screen = MediaQuery.of(context);
    final double w = screen.size.width;
    final double h = screen.size.height;
    print(w);
    print(h);
    print(screen);
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text("width" + ":" + w.toString()),
            Text("height" + ":"+ h.toString()),
            SizedBox(
                width: w,
                height: h / 6,
                child: Container(
                  child: Text('Merhaba Ben Oranımı Koruyorum'),
                  color: Colors.red,
                )),
            const Text(
              'You have pushed the button this many times:',
            ),
            LayoutBuilder(builder: (context,constraints){
              print(constraints.maxWidth);
              print(constraints.maxHeight);
              print(constraints.minWidth);
              print(constraints.minHeight);
              if(constraints.maxWidth<500){
                return Text("500den küçük");
              }
              return Text("500 den büyük");
            }),
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
