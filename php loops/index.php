<?php
    $number=1;
    // while ($number <= 10) {
    //     echo $number; 
    //     $number++;
    // }

    // do {
    //     echo $number;
    //     echo "\n"; 
    //     $number++;
    // } while ($number <= 10);

    $cars=array("BMW","MERCEDES","RENAULT");

    // for ($i=0; $i < count($cars) ; $i++) { 
    //     echo $cars[$i];
    //     echo "\n"; 
    // }

    // foreach($cars as $car){
    //     print($car);
    //     echo "\n";
    // }
    $persons=array('User1'=>"Kullanıcı 1",'User2'=>'KUllanıcı 2');
    foreach ($persons as $key => $value) {
        print($key);
        echo "\n";
        print($value);
    }
?>