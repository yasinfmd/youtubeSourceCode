

import 'package:sqlite_app/DatabaseHelper.dart';
import 'package:sqlite_app/Dog.dart';

class DogService{
  Future<bool> createDog(Dog model) async{
      bool isSaved=false;
      await  DatabaseHelper.init();
      int inserted=await DatabaseHelper.insert("dogs", model);
      isSaved=inserted==1?true:false;
      return isSaved;
  }
  Future<List<Dog>> getDogs() async{
    await  DatabaseHelper.init();
    List<Map<String,dynamic>> result=await DatabaseHelper.query("dogs");
    return result.map((e) => Dog.fromJson(e)).toList();
    // DatabaseHelper.close()
  }

}