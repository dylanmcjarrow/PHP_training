<?php


include "foundation_task6_class.php";
$pCRUD = new PersonsCRUD("foundation_task6");
switch ($_POST['method']) {

    case "loadPerson":
        $result = $pCRUD->loadPerson("Person", $_POST["column"], $_POST["value"]);
        foreach ($result as $row) {

            $myArray[] = $row;
        }
        echo json_encode($myArray);
        break;
    case "deletePerson":
        $result = $pCRUD->deletePerson("Person", $_POST["column"], $_POST["value"]);

        if ($result == 1) {
            echo "Sucsesfully removed all entries with ".$_POST["column"]." set as " . $_POST["value"] . " from the Person database";
        } else {
            echo "Error deleting from database: " . $result ;
        }
        break;
    case "createPerson":
        $personObj = [
            "name" => $_POST["name"],
            "surname" => $_POST["surname"],
            "dateOfBirth" => $_POST["dateOfBirth"],
            "email" => $_POST["email"],
            "age" => $_POST["age"]
        ];
        $result = $pCRUD->createPerson("Person", $personObj);

        break;
    case"updatePerson":

        $result = $pCRUD->savePerson("Person", $_POST["column2"],$_POST["value2"], $_POST["column1"],$_POST["value1"]);

        break;

}


?>