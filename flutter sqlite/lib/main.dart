import 'dart:math';

import 'package:flutter/material.dart';
import 'package:sqlite_app/DatabaseHelper.dart';
import 'package:sqlite_app/Dog.dart';
import 'package:sqlite_app/DogService.dart';

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
  DogService dogService=DogService();
  int _counter = 0;

  Future<List<Dog>> getDogList()async{
    return await dogService.getDogs();
 /*   result.forEach((element) {
      print(element.name);
    });
    print(result);*/
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });


  }
  @override
  void initState() {
    super.initState();
    dogService.createDog(Dog(name: "Kucu "+Random().nextInt(1000).toString()));
    dogService.getDogs().then((value) {
      print(value);
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
            const Text(
              'You have pushed the button this many times:',
            ),
            FutureBuilder<List<Dog>>(builder: (BuildContext context, AsyncSnapshot<List<Dog>> snapshot) {

              if(snapshot.hasData){
                return SizedBox(
                  height: 300,
                  child: ListView.builder(
                      padding: const EdgeInsets.all(8),
                      itemCount: snapshot.data!.length,
                      itemBuilder: (BuildContext context, int index) {
                        return Container(
                          height: 50,
                          width: 200,
                          color: Colors.amber,
                          child: Center(child: Text('Entry ${snapshot.data![index].name}')),
                        );
                      }
                  ),
                );
              }
              return CircularProgressIndicator();
            },future: getDogList()),
            TextButton(onPressed: (){
              getDogList();
            }, child: Text('Kucuları çağır')),
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
      ),
    );
  }
}
