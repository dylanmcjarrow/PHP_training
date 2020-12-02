<?php

include "foundation_task6_class.php";

$time_start = microtime(true);

$crudObj = new PersonCRUD("foundation_task6");


$personObj = [
    "name" => "billy",
    "surname" => "bob",
    "dateOfBirth" => "1997-10-10",
    "email" => "billybob@getrekt.com",
    "age" => "30"
];
$crudObj->createPerson("Person", $personObj);

//for ($i = 0; $i < 10; $i++) {
//    $crudObj->createPerson("Person", $personObj);
//}




//$result = $crudObj->loadPerson("Person", "name", "billy");

//foreach ($result as $row) {
//    foreach ($row as $key => $value)
//        echo $key . "=>" . $value . "\n";
//}


$crudObj->savePerson("Person", "name", "billy", "age", "40");


//$result = $crudObj->loadAllPeople("Person");
//foreach ($result as $row) {
//    foreach ($row as $key => $value)
//        echo $key . "=>" . $value . "\n";
//}


//$crudObj->deletePerson("Person", "name", "billy");

$time_end = microtime(true);
$execution_time = ($time_end - $time_start);
echo 'Total Execution Time: ' . $execution_time . ' seconds';
?>