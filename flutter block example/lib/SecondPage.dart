import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_bloc_example/StoreCubit.dart';

class SecondPage extends StatefulWidget {
  const SecondPage({Key? key}) : super(key: key);

  @override
  State<SecondPage> createState() => _SecondPageState();
}

class _SecondPageState extends State<SecondPage> {
  @override
  Widget build(BuildContext context) {
    final storeName=context.select((StoreCubit store) => store.state);
    print("storeName--------");
    print(storeName);

    print("storeName--------");

    return Scaffold(
      appBar: AppBar(title: Text("Hello Düyna")),
      body:Column(
        children: [
          BlocBuilder<StoreCubit,String>(builder: (context,state){
            return Text(state);
          }),
          TextButton(onPressed: (){
            print("state in func");
            print(            context.read<StoreCubit>().state
            );
            context.read<StoreCubit>().onChangeName("Yeni Bir İsim Var");

          }, child: Text('Değiştir')),
          TextButton(onPressed: (){
            context.read<StoreCubit>().changeStringRandom("Yeni Bir İsim Var");

          }, child: Text('Rastgele Değiştir'))
        ],
      ) ,
    );

  }
}
