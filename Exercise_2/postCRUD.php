<?php

include "personsCRUD.php";

class postCrud
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


    public function getPosts($tablename,$numberOfPosts)
    {

        $sql = "SELECT Posts.postText, Posts.postTimeStmp, Posts.postOrder, Persons.username, Persons.fisrtname, Persons.lastname 
                FROM " . $tablename . " 
                INNER JOIN Persons ON Posts.userID = Persons.userID 
                ORDER BY Posts.postOrder DESC
                LIMIT ".$numberOfPosts."
                 ;";
        $result = $this->conn->query($sql);
        $outArr = [];
        echo $this->conn->error;
        while ($row = $result->fetch_assoc()) {
            array_push($outArr, $row);
        }
        return $outArr;

    }

    public function makePost($tablename,$stdObj)
    {

        $sql = "INSERT INTO " . $tablename . "(" . implode(',', array_keys($stdObj)) . ") VALUES ( '" . implode('\',\'', array_values($stdObj)) . "');";
        if ($this->conn->query($sql) === TRUE) {
            echo 0;
        } else {
            echo "Error inserting into database: " . $this->conn->error . "\n";
        }

    }

    public function deletePost($tablename,$postID){

        $sql = "DELETE FROM " . $tablename . " WHERE postOrder ='" . $postID . "';";
        if ($this->conn->query($sql) === TRUE) {
            return 0;
        } else {
            return $this->conn->error;
        }

    }


    public function getPostsByUser($tablename,$numberOfPosts,$Username)
    {

        $sql = "SELECT Posts.postText, Posts.postTimeStmp, Posts.postOrder, Persons.username, Persons.fisrtname, Persons.lastname 
                FROM " . $tablename . " 
                INNER JOIN Persons ON Posts.userID = Persons.userID 
                WHERE Persons.username = '".$Username."'
                ORDER BY Posts.postOrder DESC
                LIMIT ".$numberOfPosts."
                 ;";
        $result = $this->conn->query($sql);
        $outArr = [];
        echo $this->conn->error;
        while ($row = $result->fetch_assoc()) {
            array_push($outArr, $row);
        }
        return $outArr;

    }
}

//$pObj = new postCrud("messageApp");
////
//$pObj = new PersonCRUD('messageApp');
//$userID =  $pObj->getUserId("Persons", "billy");
//echo $userID;
//$post = [
//    "postText"=>"The Battle of Pontvallain, part of the Hundred Years War, took place in north-west France on 4 December 1370. A French army under Bertrand du Guesclin heavily defeated an English force which had broken away from an army commanded by Robert Knolles. ",
//    "postTimeStmp"=>date("m-d,h-i"),
//    "userID" => $userID
//];
//echo $pObj->makePost("Posts",$post);
?>