<?php
class Palindrome {
    public static function isPalindrome($word) {
        //TODO: Implement this
        $wordArr =  $array = str_split(strtolower($new_str = str_replace(' ', '', $word)));
        $length = sizeof($wordArr);
        if ($length%2==0){
            $loopCounter = ($length)/2;
        }else{
            $loopCounter = ($length-1)/2;
        }
        for($x = 0; $x <= $loopCounter; $x++){
            if($wordArr[$x] != $wordArr[$length-$x-1]){
                return false;
            }
        }
        return true;
    }
}

if (Palindrome::isPalindrome('Never Odd Or Even'))
    echo 'Palindrome';
else
    echo 'Not palindrome';

?>