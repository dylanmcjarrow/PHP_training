<?php

include "foundation_task6_class.php";

$crudObj = new PersonCRUD("foundation_task6");

$personObj = [
    "name"=>"billy",
    "surname"=>"bob",
    "dateOfBirth"=>"1997-10-10",
    "email"=>"billybob@getrekt.com",
    "age"=>"30"
];


$crudObj->createPerson("Person",$personObj);





?>