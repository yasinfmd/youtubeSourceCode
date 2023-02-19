<?php
$names=array("name"=>"Yasin","surname"=>"Dalkılıç","middleName"=>"Yasin");
print_r(array_change_key_case($names,CASE_UPPER));
echo "\n";


$names2=array("a","b","c","d","e","f");
print_r(array_chunk($names2,2));
echo "\n";


$names3=array("Ahmet","Mehmet");
$ages=array(10,20);

print_r(array_combine($ages,$names3));
echo "\n";


print_r(array_count_values($names));

echo "\n";
$a1=array("a"=>1,"b"=>2,"c"=>3);
$a2=array("a"=>1,"c"=>4);
print_r(array_diff_key($a1,$a2));

echo "\n";
$fillArr=array("a","b","c");
print_r(array_fill_keys($fillArr,"XYZ"));
echo "\n";


$counts=array(1,2,3,4,5,6);

 function getNumbers($var)
{
    return ($var%2==0);
}

print_r(array_filter($counts,"getNumbers"));

echo "\n";

$flipArr=array("a"=>1,"b"=>2,"c"=>"uc");
print_r(array_flip($flipArr));
echo "\n";


$intersect1=array("a"=>"red","b"=>"blue","c"=>"pink");
$intersect2=array("c"=>"red","b"=>"blue","a"=>"pink","d"=>"qweqwe");

print_r(array_intersect($intersect1,$intersect2));
echo "\n";

print_r(array_intersect_key($intersect1,$intersect2));

echo "\n";
$isExistArray=array("name"=>"Ahmet");
print_r(array_key_exists("name",$isExistArray));
echo "\n";

print_r(array_keys($isExistArray));
echo "\n";

$mapArray=array(1,2,3);
    function mapArr($var)
    {
        return $var*$var;
    }
print_r(array_map("mapArr",$mapArray));

echo "\n";

$mergeArr1=array("red","blue");
$mergeArr2=array("green","red","purple");
print_r(array_merge($mergeArr1,$mergeArr2));
echo "\n";

print_r(array_pop($mergeArr1));

echo "\n";

print_r(array_push($mergeArr1,"qq","www"));


echo "\n";


$randomKeys=array("key1"=>"1","key2"=>2);

print_r(array_rand($randomKeys));

echo "\n";


$numbersArray=array(1,23,345,5);

print_r(array_sum($numbersArray));
echo "\n";

array_shift($numbersArray);
print_r($numbersArray);
echo "\n";

$searchArr=array("a"=>"elma","b"=>"armut");
print_r(array_search("armut",$searchArr));
echo "\n";

print_r(array_reverse($searchArr));

echo "\n";

$sliceArray=array("1","2","1","qwe","sad","dgfgd","fdssdfsdf");
print_r(array_slice($sliceArray,2));
echo "\n";
array_unshift($sliceArray,"yenideger");
print_r($sliceArray);

echo "\n";

print_r(array_unique($sliceArray));


echo "\n";

print_r(array_values($names));

echo "\n";

print_r(count($names));
echo "\n";
$arrCurrentLastEnd=array(1,2,3,4,5,534,543,534,534);
print_r(current($arrCurrentLastEnd));
echo "\n";

print_r(next($arrCurrentLastEnd));
echo "\n";
print_r(end($arrCurrentLastEnd));

echo "\n";

list($a,$b)=array("Ad","Soyad");
print_r($a);
echo "\n";
print_r($b);

echo "\n";
$randomArr=range(0,50);
print_r($randomArr);
echo "\n";
shuffle($randomArr);
print_r($randomArr);

echo "\n";
$sortArr=array("Yasin","Ayşe");
sort($sortArr);
print_r($sortArr);
?>