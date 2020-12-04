<?php

//include "personsCRUD.php";
include "postCRUD.php";


$pObj = new PersonsCRUD("messageApp");
$pstObj = new postCrud("messageApp");


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

    case "getPosts":
        $result = $pstObj->getPosts("Posts", $_POST["numberOfPosts"]);
        foreach ($result as $row) {

            $myArray[] = $row;
        }

        echo json_encode($myArray);


        break;

    case "makePost":
        session_start();
        $username =  $_SESSION["username"];

        $result = $pObj->getUserId("Persons",$username);

        $myArray = [];
        foreach ($result as $row) {$myArray[] = $row;}

        $userID = $myArray[0]["userID"];

        $post = [
            "postText" => $_POST["postText"],
            "postTimeStmp" => date("m-d h:i"),
            "userID"=> $userID
        ];


        $result = $pstObj->makePost("Posts", $post);
        echo $result;



        break;
}


//$result = $pObj->getUserId("Persons","dylanmcjarrow");
//$myArray = [];
//foreach ($result as $row) { echo $row["userID"];}


?>