import 'dart:io';

import 'package:avatar_glow/avatar_glow.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;


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

  stt.SpeechToText speechToText=stt.SpeechToText();
  bool isListening=false;
  String text="Konusmak için butona basınız...";
  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[

            Text(
              '$text',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: AvatarGlow(
        repeat: true,
        glowColor: Colors.deepPurpleAccent,
        duration: Duration(milliseconds: 2000),
        animate: isListening? true:false,
        repeatPauseDuration: Duration(milliseconds: 1),
        endRadius: 80,
        child: FloatingActionButton(
          onPressed: () async{
            if(!isListening){
              bool isAvailable= await speechToText.initialize(
                onStatus: (val)=>print("onStatus $val"),
                onError: (val)=>print("onError $val"),
              );
              if(isAvailable){
                 // var locales=await speechToText.locales();
                 // print(locales[0].name);
                  setState(() {
                    isListening=true;
                  });
                  speechToText.listen(
                    cancelOnError: true,
                    onResult: (val){
                      print(val);
                      print(val.confidence);
                      if(val.recognizedWords.contains("kapat")){
                        SystemNavigator.pop(animated: true);
                        exit(0);
                      }
                      setState(() {
                        text=val.recognizedWords;
                      });

                    }
                  );
              }else{
                print("izin yok");
                setState(() {
                  isListening=false;
                  speechToText.stop();
                });
              }
            }
            else{
              setState(() {
                isListening=false;
                speechToText.stop();
              });
            }
          },
          tooltip: 'Increment',
          child:  Icon(isListening ? Icons.mic: Icons.mic_off),
        ),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
