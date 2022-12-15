import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_example/SecondPage.dart';
import 'package:flutter_bloc_example/StoreCubit.dart';

void main() {
  runApp(MultiBlocProvider(providers: [
    //lazy: false hemen olustur.!
    BlocProvider( create: (_)=>StoreCubit())
   // BlocProvider(create: (_)=>OtherCubit())
  ], child:const MyApp()));
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
    Navigator.push(context, MaterialPageRoute(builder: (context)=>SecondPage()));
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
            BlocListener<StoreCubit,String>(listenWhen: (prev,current){

              return false;
            }, listener: (context,state){
              print("bloclistener");
              print(state);
              print(context);
              print("bloclistener");
              // listener watch useEffect [value]

            },child: Container(),),
            BlocBuilder<StoreCubit,String>( buildWhen: (prevState,state){
              print("blocbuilder build when");
              print(prevState);
              print(state);
              print("blocbuilder build when");
              return true;
            }, builder: (context,state){
              return Text(state);
            }),
            BlocConsumer<StoreCubit,String>(
                listener: (context,state){
                  print(state);
                },
                buildWhen: (prevState,state){
              print("blocbuilder build when");
              print(prevState);
              print(state);
              print("blocbuilder build when");
              return true;
            }, builder: (context,state){
              return Text(state);
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
