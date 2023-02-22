
import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';

void main() {
  final game = MyGame();
  runApp(GameWidget(game: game));
}

class MyGame extends FlameGame with TapDetector{
  SpriteComponent bird=SpriteComponent();
  SpriteComponent bg=SpriteComponent();
  bool isTurn=false;
  bool isPressing=false;
  bool isHigh=false;
  @override
  void onTap() {
    // TODO: implement onTap
    super.onTap();
    print("tap");
    bird.position.y+=10;
  }

  @override
  void onTapDown(TapDownInfo info) {
    // TODO: implement onTapDown
    super.onTapDown(info);
    isPressing=true;
  }
  @override
  void onTapUp(TapUpInfo info) {
    // TODO: implement onTapUp
    super.onTapUp(info);
    isPressing=false;
    isHigh=true;

  }


  @override
  Future<void> onLoad() async{
    super.onLoad();
    print("assetleri yükle");
    bg.sprite=await loadSprite("bg.png");
    bg.size=size;
    add(bg);
    bird
      ..sprite=await loadSprite("bird.png")
      ..size=Vector2(100, 100)
      ..y=(size.y/2) - 50
    ..x=(size.x/2) - 50;
    add(bird);
  }

  @override
  void update(double dt) {
    // TODO: implement update
    super.update(dt);
    print(isPressing);
    if(isPressing){
      bird.y+=50*dt;
    }
    if(isHigh){
      bird.y-=50*dt;
    }
    if(bird.y<50){
      isHigh=false;
      bird.y=0;
    }
   // bird.x+=0.5;
    if(bird.x<size.x-90 && isTurn==false){
      bird.x+=100 *dt;
    }else if(isTurn==false){
      bird.flipHorizontally();
      bird.position.x=size.x+10;
      isTurn=true;
    }else if(isTurn==true){
      bird.x-=100*dt;
    }
    if(bird.x<90 && isTurn==true){
      bird.flipHorizontally();
      bird.position.x=10;
      isTurn=false;

    }
  }
}