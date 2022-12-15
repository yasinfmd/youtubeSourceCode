import 'dart:math';

import 'package:flutter_bloc/flutter_bloc.dart';

//class MyStoreService{}

class MyStoreRepository{
  String stringToUpper(String str){
    return str.toUpperCase();
  }
}


// model ?
class StoreCubit extends Cubit<String>{

    StoreCubit():super("Yasin2");

    void onChangeName(String str){
      emit(MyStoreRepository().stringToUpper(str));
    }
    void changeStringRandom(String str){
      emit(str+Random().nextInt(1000).toString());
    }
}
