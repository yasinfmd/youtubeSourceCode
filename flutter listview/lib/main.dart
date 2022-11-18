import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class User{
   late int age;
   late String name;

   User(this.age, this.name);

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
  List<User> user=[new User(20,'Ayşe'),new  User(30,'Fatma'),new User(28,'Yasin')];
  void Click(){
    print("Selam");
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: ListView.builder(
        itemCount: user.length,
        itemBuilder: (BuildContext context,int index){
          print(user[index].name);
          print(index);
          return ListTile(
            leading: Icon(Icons.people),
            title: Text(user[index].name),
            subtitle: Text(user[index].age.toString()),
          );
        },
        )
    );
  }
}


/*
*
*  ListView(
          children:  [
            Card(
              child: ListTile(
                onTap:Click,
                onLongPress: (){
                  print("Selam");
                },
                dense: true,
                title: Text('Merhaba'),
                leading: Icon(Icons.abc),
                subtitle: Text('Alt Başlık'),
                tileColor: Colors.yellow,
                iconColor: Colors.purple,
                selectedColor: Colors.red,
                selected: false,
                selectedTileColor: Colors.black,
                hoverColor: Colors.pink,
                enabled: true,
                isThreeLine: true,
              ),
            ),
            Card(
              shape: RoundedRectangleBorder(borderRadius:BorderRadius.only(topRight: Radius.circular(20),topLeft: Radius.circular(20),bottomLeft: Radius.circular(20),bottomRight: Radius.circular(20)) ),
              child: ListTile(
                title: Text('Merhaba'),
                leading: Icon(Icons.abc),
                subtitle: Text('Alt Başlık'),
                textColor: Colors.pink,
                isThreeLine: true,
              ),
            )
          ],
        )
*
* */


/*
*
*
* ListView(
          scrollDirection: Axis.horizontal,
          children:  [
            SizedBox(
              height: 100,
              width: 200,
              child: Card(
                child: ListTile(
                  contentPadding: EdgeInsets.all(20),
                  trailing: Icon(Icons.ac_unit),
                  horizontalTitleGap: 20,
                  minLeadingWidth: 100,
                  onTap:Click,
                  onLongPress: (){
                    print("Selam");
                  },
                  dense: true,
                  title: Text('Merhaba'),
                  leading: Icon(Icons.abc),
                  subtitle: Text('Alt Başlık'),
                  tileColor: Colors.yellow,
                  iconColor: Colors.purple,
                  selectedColor: Colors.red,
                  selected: false,
                  selectedTileColor: Colors.black,
                  hoverColor: Colors.pink,
                  enabled: true,
                  isThreeLine: true,
                ),
              ),
            ),
            SizedBox(
              width: 200,
              height: 100,
              child:    Card(
              shape: RoundedRectangleBorder(borderRadius:BorderRadius.only(topRight: Radius.circular(20),topLeft: Radius.circular(20),bottomLeft: Radius.circular(20),bottomRight: Radius.circular(20)) ),
              child: ListTile(
                minLeadingWidth: 100,
                horizontalTitleGap: 20,
                title: Text('Merhaba'),
                leading: Icon(Icons.abc),
                subtitle: Text('Alt Başlık'),
                textColor: Colors.pink,
                isThreeLine: true,
              ),
            ),)

          ],
        )
* */