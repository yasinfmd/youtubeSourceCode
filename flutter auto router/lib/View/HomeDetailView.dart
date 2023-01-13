import 'package:auto_route/auto_route.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class HomeDetailView extends StatefulWidget {
  const HomeDetailView({Key? key , @PathParam('id') required this.id}) : super(key: key);
  final int id;

  @override
  State<HomeDetailView> createState() => _HomeDetailViewState();
}

class _HomeDetailViewState extends State<HomeDetailView> {
  @override
  Widget build(BuildContext context) {
    print(context.routeData.pathParams.get("id"));
    return Scaffold(
        appBar: AppBar(
          title: Text('AppBar Detay' + context.routeData.pathParams.get("id")),
        ),
        body: Column(
          children: [Text('Selam 2'), Text(context.routeData.pathParams.isEmpty?'Parametre yok':context.routeData.pathParams.get("id"))],
        ));
  }
}
