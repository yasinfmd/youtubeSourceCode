
import 'package:flutter/material.dart';
import 'package:contacts_service/contacts_service.dart';
import 'package:permission_handler/permission_handler.dart';


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
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
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

  Future<List<Contact>> getContacts()async{

  List<Contact> query=await ContactsService.getContacts(query: "Selin");
 // print(query![0].displayName.toString());

  Contact c=Contact();
  c.displayName="Display Name";

  c.phones?.add(Item(label: "mobile",value: "032321221"));
  ContactsService.addContact(c).then((value) {
    print(value);
  });


 // ContactsService.
//  ContactsService.updateContact(query[0]);

   // ContactsService.deleteContact(query[0]);
 // ContactsService.openExistingContact(query[0]);

/*  ContactsService.openContactForm().then((value) {
    print(value);
  });*/
  return  ContactsService.getContacts();

  }
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body:FutureBuilder<List<Contact>>(
        future: getContacts(),
        builder: (context,snapshot){
          if(snapshot.hasData==null && snapshot.connectionState==ConnectionState.none || snapshot.connectionState == ConnectionState.waiting){
            return CircularProgressIndicator();
          }
          return ListView.builder(itemBuilder: (BuildContext context,int index){
            return ListTile(
              title: Text(snapshot.data![index].displayName?? ""),
              subtitle: Text(snapshot.data![index].phones!.isNotEmpty?"Numara var": ""),
            );
          },itemCount: snapshot.data?.length);
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
