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
            echo "Data inserted successfully" . "\n";
        } else {
            echo "Error inserting into database: " . $this->conn->error . "\n";
        }


    }

    public function loadPerson($tablename, $column, $value)
    {
        $sql = "SELECT * FROM " . $tablename . " WHERE " . $column . "= '" . $value . "';";
        $result = $this->conn->query($sql);
        $outArr = [];
        while ($row = $result->fetch_assoc()) {
            array_push($outArr, $row);
        }
        return $outArr;
    }

    public function savePerson($tablename, $column2, $value2, $column1, $value1)
    {
        $sql = "UPDATE " . $tablename . " SET " . $column1 . "='" . $value1 . "' WHERE " . $column2 . " = '" . $value2 . "';";
        if ($this->conn->query($sql) === TRUE) {
            echo "Data Updated successfully" . "\n";
        } else {
            echo "Error updating into database: " . $this->conn->error . "\n";
        }
    }

    public function deletePerson($tablename, $column, $value)
    {
        $sql = "DELETE FROM " . $tablename . " WHERE " . $column . "='" . $value . "';";
        if ($this->conn->query($sql) === TRUE) {
            return 1;
        } else {
            return $this->conn->error;
        }
    }

    public function loadAllPeople($tablename)
    {
        $sql = "SELECT * FROM " . $tablename . ";";
        $result = $this->conn->query($sql);
        $outArr = [];
        while ($row = $result->fetch_assoc()) {
            array_push($outArr, $row);
        }
        return $outArr;
    }

    public function deleteAllPeople($tablename)
    {
        $sql = "DELETE FROM " . $tablename . ";";
        if ($this->conn->query($sql) === TRUE) {
            echo "Data deleted successfully" . "\n";
        } else {
            echo "Error deleted into database: " . $this->conn->error . "\n";
        }
    }

}


?>