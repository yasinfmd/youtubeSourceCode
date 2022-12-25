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
  final list = [
    'Yasin',
    'Ahmet',
    'Ayşe',
    'Fatma',
    'Murat',
    'X',
    'qwe',
    'qwewqe',
    'tretre',
    'hfghfgh',
    'rtyrty',
    'qgfhhfghfg',
    'fghkljgfhjlfgk',
    'gdfgfdg',
    'klmbvnklbvnm',
    'fşlghkfgkljhkfglh',
    'wwer'
  ];
  final ScrollController _controller = ScrollController();

  @override
  void initState() {
    _controller.addListener(() {
      if (_controller.offset >= _controller.position.maxScrollExtent) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Listenin sonuna ulaştınız')));
      }
      // print(_controller.offset);
      // print(_controller.position.maxScrollExtent);
    });
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: GridView.builder(
            reverse: false,
            controller: _controller,
            physics: ScrollPhysics(),
            scrollDirection: Axis.vertical,
            itemCount: list.length,
            padding: const EdgeInsets.all(20),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 20,
                mainAxisSpacing: 20,
                childAspectRatio: 1 / 1),
            itemBuilder: ((context, index) {
              return Container(
                  height: 250,
                  width: 250,
                  child: Card(child: Text(list[index].toUpperCase())));
            })));
  }
}
