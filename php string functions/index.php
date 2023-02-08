<?php
$string = "Yasin";
print_r(strtolower($string));
echo "\n";
print_r(strtoupper($string));
echo "\n";
echo chr(65);
echo "\n";
echo crypt($string, "CRYPT_MD5");
echo "\n";
print_r(md5($string));
echo "\n";
print_r(sha1($string));
echo "\n";
echo hex2bin("48656c6c6f20576f726c6421");
echo "\n";
$text = "Merhaba Nasılsın Türkiye";
print_r(explode(" ",$text));
echo "\n";
$htmlString = "<a href='google.com'>Go Google !</a>";
print_r(htmlentities($htmlString));
echo "\n";
print_r(html_entity_decode((htmlentities($htmlString))));
echo "\n";
$arr = array("Merhaba", "Nasılsın", "Türkiye");
print_r(implode(',', $arr));
echo "\n";
echo lcfirst("Yasin");
echo "\n";
echo ltrim("   Yasin");
echo "\n";
echo rtrim("Yasin  ");
echo "\n";
echo trim("  Yasin  ");
echo "\n";

echo number_format("10000", 1,",",".");
echo "\n";
echo ord("A");
echo "\n";
$queryArray = [];
parse_str("name=urun&price=2000",$queryArray);
print_r($queryArray);
echo "\n";
print_r(similar_text("Merhaba dünya nasılsın", "nasılsın dünya"));
echo "\n";
echo str_pad($string, 30, ".");

echo "\n";
echo str_repeat($string, 5);

echo "\n";
echo str_shuffle($string);

echo "\n";
echo str_replace("Mahmut Abi","Mahmut","Yusuf");

echo "\n";

print_r(str_split("Yasin"));
echo "\n";

echo strlen($string);

echo "\n";

echo str_word_count("Merhaba Dünya");

echo "\n";

echo strcasecmp("merhaba","MERHABA");

echo "\n";

echo strcmp("merhaba","MERHABA");

echo "\n";

echo strip_tags("MErhaba <p>Nasılsın</p>");


echo "\n";

echo strpos("Hello world","world");

echo "\n";

echo stripos("Hello world","WORLD");

echo "\n";
echo strstr("merhaba dünya", "dünya");


echo "\n";
echo substr("merhaba dünya", 6);

echo "\n";
echo ucfirst("merhaba dünya");
echo "\n";
echo ucwords("merhaba dünya");


?>