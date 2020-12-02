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
}

?>