import 'package:flutter/material.dart';
import 'package:focused_menu/focused_menu.dart';
import 'package:focused_menu/modals.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<String> imageList = [
    "https://fastly.picsum.photos/id/853/200/300.jpg?hmac=-vUTO-GMdNHJbNIJrZtC4jsw0ybpHVgCrtWkg1DZugg",
    "https://fastly.picsum.photos/id/1083/200/200.jpg?hmac=ocBiYtawFGXm884DNfTBRQy65ZWvsTQf_XCnlTUdtB4",
    "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
    "https://fastly.picsum.photos/id/828/200/300.jpg?grayscale&hmac=DU5uHHKLrqUwFxKAwOgQVhpJgqSGOTGQpWbGOdV_PAs",
    "https://fastly.picsum.photos/id/847/200/300.jpg?blur=5&hmac=KI3xS5BOwH9MMhnPyANWC6fphgvkR831VUZ2XK4-tcs",
    "https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs",
    "https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs"
  ];

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
        appBar: AppBar(
          // TRY THIS: Try changing the color here to a specific color (to
          // Colors.amber, perhaps?) and trigger a hot reload to see the AppBar
          // change color while the other colors stay the same.
          backgroundColor: Theme.of(context).colorScheme.inversePrimary,
          // Here we take the value from the MyHomePage object that was created by
          // the App.build method, and use it to set our appbar title.
          title: Text(widget.title),
        ),
        body: GridView.builder(
          itemCount: imageList.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2, mainAxisSpacing: 20, crossAxisSpacing: 20),
          itemBuilder: (BuildContext context,int index){
            return FocusedMenuHolder(
              openWithTap: true,
              blurBackgroundColor: Colors.black54,
                animateMenuItems: true,
                blurSize: 10,
                duration: Duration(milliseconds: 200),
              menuItems: [
                FocusedMenuItem(title: const Text("Bilgi"), trailingIcon:const Icon(Icons.info,color: Colors.orange,),  onPressed: (){
                  print("Bilgi");
                }),
                FocusedMenuItem(title: const Text("Kaydet"),trailingIcon:const Icon(Icons.save,color: Colors.blue,) , onPressed: (){}),
                FocusedMenuItem(title:const Text("Paylaş"),trailingIcon:const Icon(Icons.share,color: Colors.green,) , onPressed: (){}),
                FocusedMenuItem(title:const Text("Sil"),trailingIcon:const Icon(Icons.delete,color: Colors.purple,) , onPressed: (){}),
              ],
              onPressed: (){
                print("OnPressed");
              },
              menuWidth: MediaQuery.of(context).size.width*0.5,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(20),
                child: Image.network(
                    imageList[index],
                  fit: BoxFit.fill,
                ),
              ),);
          },
        ));
  }
}
