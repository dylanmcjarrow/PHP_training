<?php
function fibonacci_loop($num1 = 1, $num2 = 1, $stopNumber = 34)
{

    while (true) {
        $result = $num1 + $num2;
        $num1 = $num2;
        $num2 = $result;
        if ($result <= $stopNumber) {
            echo $result . "\n";
        } else {
            return;
        }

    }

}

function fibonacci_recursive($num1 = 1, $num2 = 1, $stopNumber= 34 )
{
    $result = $num1 + $num2;
    if ($result <= $stopNumber) {
        $num1 = $num2;
        $num2 = $result;
        echo $result . "\n";
        fibonacci_recursive($num1, $num2);
    }
}

#Uncomment for foundation Task 2
//$num1 = 1;
//$num2 = 1;
//echo "Fibonacci loop \n";
//echo $num1 . "\n";
//echo $num2 . "\n";
//echo fibonacci_loop($num1, $num2);
//
//echo "Fibonacci recursive \n";
//echo $num1 . "\n";
//echo $num2 . "\n";
//echo fibonacci_recursive($num1, $num2);

?>