<?php

include "personCRUD.php";
include "postCRUD.php";


$pObj = new PersonCRUD("messageApp");

switch ($_POST['method']){

    case "createPerson":

        $personObj = [
            "fisrtname" => $_POST['firstname'],
            "lastname" => $_POST['surname'],
            "emial" => $_POST['email'],
            "username" => $_POST['username'],
            "password" => $_POST['password']
        ];
        echo $pObj->createPerson("Persons", $personObj);


        break;

}


?>