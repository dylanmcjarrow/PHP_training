<?php

include 'foundation_task2.php';
// get the q parameter from URL
$q = $_REQUEST["q"];

$num1 = 1;
$num2 = 1;
echo $num1 . "\n";
echo $num2 . "\n";
echo fibonacci_loop($num1, $num2,$q);

?>
