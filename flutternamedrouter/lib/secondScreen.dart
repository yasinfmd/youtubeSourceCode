import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutternamedrouter/main.dart';

class SecondScreen extends StatefulWidget {
  const SecondScreen({Key? key}) : super(key: key);

  @override
  State<SecondScreen> createState() => _SecondScreenState();
}

class _SecondScreenState extends State<SecondScreen> {
  @override
  Widget build(BuildContext context) {
    final args=ModalRoute.of(context)!.settings.arguments as MyParams;
    print(args.name);
    return Scaffold(appBar: AppBar(title: Text('Merhaba'),),body: Column(
      children: <Widget>[
        Text('2.sayfa'),
        Text('Parametre'+args.name),
        ElevatedButton(onPressed: (){
          Navigator.pop(context);
        }, child: Text('Btn'))
      ],
    ));
  }
}
