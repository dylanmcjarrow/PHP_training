<?php

class PersonsCRUD
{
    public $conn;
    public $name_of_db;

    function __construct($dbName)
    {

        $this->name_of_db = $dbName;

        $servername = "localhost";
        $username = "newuser";
        $password = "password";

        $this->conn = new mysqli($servername, $username, $password);

        $sql = "USE " . $dbName;
        if ($this->conn->query($sql) === FALSE) {
            echo "Error Conected database: " . $this->conn->error . "\n";
        }

    }



    public function createPerson($tablename, $stdObj)
    {

        $sql = "INSERT INTO " . $tablename . "(" . implode(',', array_keys($stdObj)) . ") VALUES ( '" . implode('\',\'', array_values($stdObj)) . "');";
        if ($this->conn->query($sql) === TRUE) {
            echo 0;
        } else {
            echo "Error inserting into database: " . $this->conn->error . "\n";
        }

    }

    public function getUsernames($tablename)
    {


        $sql = "SELECT username FROM " . $tablename . ";";
        $result = $this->conn->query($sql);
        $outArr = [];
        while ($row = $result->fetch_assoc()) {
            array_push($outArr, $row);
        }
        return $outArr;


    }

    public function getUserId($tablename, $Username)
    {

        $sql = "SELECT  userID, username FROM ".$tablename." WHERE username ='".$Username."';";
//        $sql = "SELECT  userID, username FROM Persons WHERE username ='dylanmcjarrow';";
        $result = $this->conn->query($sql);
        $outArr = [];
        while ($row = $result->fetch_assoc()) {
            array_push($outArr, $row);
        }
        echo $this->conn->error;
        return $outArr;

    }

    public function profileDetails($tablename, $Username){
        $sql = "SELECT  userID,fisrtname ,lastname,emial,username FROM ".$tablename." WHERE username ='".$Username."' LIMIT 1;";
        $result = $this->conn->query($sql);
        $outArr = [];
        echo $this->conn->error;
        while ($row = $result->fetch_assoc()) {
            array_push($outArr, $row);
        }

        return $outArr;
    }

    public function checkLogin($tablename, $username, $password)
    {
        session_start();

        $sql = "SELECT username,password FROM " . $tablename . ";";
        $result = $this->conn->query($sql);
        while ($row = $result->fetch_assoc()) {

            if ($row["username"] == $username) {

                if (password_verify($password, $row['password'])) {
                    $_SESSION["username"] = $username;
//                    $_SESSION["userID"] = "" . row['userID'];
                    echo 0;
                    return;

                }

            }
        }
        echo 1;

    }

    public function updateUser($tablename,$username ,$firstname,$lastname, $email){


        $sql = "UPDATE " . $tablename . "
         SET fisrtname ='" . $firstname . "' ,
         lastname ='" . $lastname . "' ,
         emial ='" . $email . "' 
         WHERE username = '" . $username . "';";

        if ($this->conn->query($sql) === TRUE) {
            echo 0;
        } else {
            echo "Error updating into database: " . $this->conn->error . "\n";
        }
    }

}

//
//$pobj = new PersonsCRUD("messageApp");
//$uid  = $pobj->profileDetails("Persons","dylanmcjarrow");
//echo json_encode($uid);

?>