import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}
class ErrorInterceptor extends Interceptor{
  @override
  void onResponse(Response response, ResponseInterceptorHandler handler) {
    print("respoınse geliyorrr");
    // TODO: implement onResponse
    super.onResponse(response, handler);
  }
  @override
  void onRequest(RequestOptions options, RequestInterceptorHandler handler) {
    print("reuqest gidiyorrrr");
  //  options.headers.addAll(other)
    // TODO: implement onRequest
    super.onRequest(options, handler);
  }
  @override
  void onError(DioError err, ErrorInterceptorHandler handler) {
    print("hata olusuyorrr");
    // TODO: implement onError
    super.onError(err, handler);
  }
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
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }
  
  Future<void> fetchData() async{
    BaseOptions bo=BaseOptions(baseUrl: "qwewqe");
    var dc=Dio();
    ErrorInterceptor er=ErrorInterceptor();
    dc.interceptors.add(er);
    dc.options.baseUrl="https://jsonplaceholder.typicode.com/";
    dc.options.connectTimeout=5000;
/*    dc.options.headers.addAll({"content-type":"json"});
    dc.options.headers['auth']="token";*/
    try{
      var response2=await dc.get("todos/1",queryParameters: {"id":1,"ad":'qweqwe'});

    }on DioError catch(e){
      print(e);
    }
    var response=await dc.get("todos/1",queryParameters: {"id":1,"ad":'qweqwe'});
    var otherresponse=await dc.get("posts");
    var totalRes=await Future.wait([ dc.get("posts"), dc.get("todos/1",queryParameters: {"id":1,"ad":'qweqwe'})]);
    print(totalRes);
    print(response);
   var responsePost= await dc.post("posts",data: {
      "userId":"2",
      "title":"Başlık",
      "body":"Boddddy"
    }
    ,onSendProgress :(int sent,int total){
      print(sent);
      print(total);
   });

   print(responsePost.data);
/*   var formData=FormData.fromMap({
     "name":"Ad",
     "surname":"Soyad",
     "file":"",
     "files":[MultipartFile.fromFile("./abc.txt",contentType: "",filename: )]
   });*/
 //  await dc.download("qwewqewqe", "qweqwe.abc.xlsx")

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
            TextButton(onPressed: (){
              fetchData();
            }, child: Text("Getir Veriyii")),
            const Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), //
    );
  }
}
