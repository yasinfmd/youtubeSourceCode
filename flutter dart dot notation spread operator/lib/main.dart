import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());

}

class User{
  String ad="";
  String soyad="";
  int yas=0;
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

class _MyHomePageState extends State<MyHomePage> {

  int _counter = 0;
  User myUser=User();
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    myUser.ad="Yasin";
    myUser.soyad="Dalkılıç";
    myUser.yas=30;

    Map m1={"name":"Ufuk"};
    Map m2={
      "surname":"Ocak",
      "m1":{...m1},
      ...m1,
    };
    print(m2);

    myUser
    ..ad="Yeni Ad"
    ..soyad="Yeni Soyad"
    ..yas=25;

    List l1=[1,2,3,4];
    List l2=[10,30,...l1,600];

    print(l1);
    print(l2);
    l1[0]=300;
    print(l1);
    print(l2);


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
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
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
