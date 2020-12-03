<?php

include "personCRUD.php";
include "postCRUD.php";


$pObj = new PersonCRUD("messageApp");

switch ($_POST['method']) {

    case "createPerson":

        $personObj = [
            "fisrtname" => $_POST['firstname'],
            "lastname" => $_POST['surname'],
            "emial" => $_POST['email'],
            "username" => $_POST['username'],
            "password" => password_hash($_POST['password'], PASSWORD_DEFAULT)
        ];
        echo $pObj->createPerson("Persons", $personObj);


        break;

    case "getUsernames":

        $result = $pObj->getUsernames("Persons");
        $myArray = [];
        foreach ($result as $row) {

            $myArray[] = $row;
        }

        echo json_encode($myArray);

        break;

    case "login":

        $_POST["username"];
        $_POST["password"];

        $username = $_POST['username'];
        $password = $_POST['password'];

        $result = $pObj->checkLogin("Persons", $username, $password);
        if ($result == 0) {
//            exit(header("location:messageAppMainPage"));
            echo $result;
        } else {
            echo "'Invalid Details'";
        }


        break;

    case "getSessionUser":
        session_start();
        echo $_SESSION["username"];
        break;

    case "logout":
        session_start();
        session_unset();
        session_destroy();
        break;
}


?>