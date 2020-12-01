<?php



function addAll_loop($Array)
{
    $temp = 0;
    while (sizeof($Array)>1){
        foreach ($Array as $value) {
            $temp += $value;
        }
        array_shift($Array);
    }
    return $temp + $Array[0];



}

$temp_recursive = 0;
function addAll_recursive($Array)
{
    global $temp_recursive;
    foreach ($Array as $value) {
        $temp_recursive += $value;
    }
    array_shift($Array);

    if (sizeof($Array)==1){
        return $temp_recursive + $Array[0];
    }else{
        return addAll_recursive($Array);
    }


}


$Array = [1, 1, 1, 1, 1]; //5+4+3+2+1=15
echo addAll_loop($Array);
echo "\n";
echo addAll_recursive($Array);
?>