import 'package:auto_route/auto_route.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class HomeView extends StatefulWidget {
  const HomeView({Key? key}) : super(key: key);

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends State<HomeView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('AppBar'),
        ),
        body: Column(
          children: [Text('Selam') , TextButton(onPressed: (){
              context.router.pushNamed('/detail/50');
          }, child: Text('Detaya Git'))],
        ));
  }
}
