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
  final TextEditingController ctrl = new TextEditingController();
  var Time="";
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
            Text(Time),
            TextField(
                controller: ctrl,
                onTap: () {
                  showTimePicker(
                          builder: (context, child) {
                            return Theme(
                                data: ThemeData.dark().copyWith(
                                    colorScheme: ColorScheme.dark(
                                  onBackground: Colors.deepOrange,
                                  onSurface: Colors.amberAccent,
                                  primary: Colors.red,
                                  onPrimary: Colors.pink,
                                )),
                                child: child!);
                          },
                          hourLabelText: "Saat",
                          helpText: "Yardım",
                          minuteLabelText: "Minuttttt",
                          initialEntryMode: TimePickerEntryMode.input,
                          cancelText: "Vazgeç",
                          confirmText: "Onayla !",
                          context: context,
                          initialTime: TimeOfDay.fromDateTime(DateTime.now()))
                      .then((value) {
                    ctrl.text = "${value!.hour}:${value!.minute}";
                    setState(() {
                      Time="${value!.hour}:${value!.minute}";
                    });
                    print(value);
                  });
                }),
          ],
        ),
      ),
    );
  }
}
