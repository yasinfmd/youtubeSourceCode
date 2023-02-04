<?php
class User{
    public $name;
}


?>

<?php

$degisken = 'Merhaba değişken';

$sayi = 30;

$float = 30.55;

$isActive = false;

$array = [1, 2, 3, 4, 5, "Yasin"];

$arrayTwo = array(1, 2, 3, 5, 6, "Yasin");


$userObj = new User();
$userObj->name = "Yasin";

var_dump($userObj);

echo "\n";
echo $degisken;
echo "\n";
echo $sayi;

echo "\n";
echo $float;
echo "\n";
echo $isActive;


echo "\n";
var_dump($array);

echo "\n";
var_dump($arrayTwo);


?>


?>