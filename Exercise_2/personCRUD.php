<?php

class PersonCRUD
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

    public function checkLogin($tablename, $username, $password)
    {
        session_start();

        $sql = "SELECT username,password FROM " . $tablename . " WHERE username = '" . $username . "';";
        $result = $this->conn->query($sql);
        while ($row = $result->fetch_assoc()) {

            if (password_verify($password,$row['password'] )) {
                $_SESSION["username"] = $username;
                echo 0;
                return;

            }
        }
        echo 1;

    }
}

//$pObj = new PersonCRUD('messageApp');
//echo $pObj->checkLogin("Persons", "blly", 'billy');


?>