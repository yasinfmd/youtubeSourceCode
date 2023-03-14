import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

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
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});


  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  final ImagePicker _picker = ImagePicker();

  File? _file;
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  Future<void> pickImage()async{
    try{
     var result= await _picker.pickImage(source: ImageSource.camera,maxHeight: 100,maxWidth: 100);
     if(result==null)return;
     print(result.path);
     setState(() {
       _file=File(result.path);
     });
     result.readAsBytes().then((value){
       print(value);
     });
/*      result.readAsString().then((value){
        print(value);
      });*/
    }
    catch(e){
      print(e);
    }
  }
  Future<void> pickImageFromGallery()async{
    try{
      var result2=await _picker.pickImage(source: ImageSource.gallery,imageQuality:100);
      if(result2==null)return;
      setState(() {
        _file=File(result2.path);
      });
      result2!.readAsBytes().then((value){
        print(value);
      });
      result2!.readAsString().then((value){
        print(value);
      });


    }catch(e){
      print(e);
    }

  }

  Future<void> pickImageMultiple()async{
    try{
      var result3=await _picker.pickMultiImage();
      if(result3.length<1)return;
      print( result3[0].path);
      print( result3[1].path);

    }catch(e){
      print(e);
    }
  }

  Future<void> takeVideo()async{
    try{
      final XFile? file = await _picker.pickVideo(
          source: ImageSource.camera, maxDuration: const Duration(seconds: 10));
      print(file);

    }catch(e){
      print(e);
    }
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
            _file != null ? Image.file(_file!,fit: BoxFit.cover,):SizedBox.shrink(),
            TextButton(onPressed: (){
              takeVideo();
            //  pickImage();
             // pickImageFromGallery();
             // pickImageMultiple();
            }, child: Text("Resim Seç")),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
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
