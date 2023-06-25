<?php
$fname=$_POST["fname"];
$email=$_POST["email"];
$pass=$_POST["pass"];
$cpass=$_POST["Cpass"];

$servername="localhost";
$username="root";
$password="";
$databasename="test";

if($pass == $cpass){

$conn=new mysqli($servername,$username,$password,$databasename);
if($conn->connect_error){
    die("connection failed");
}
$sql="INSERT INTO register (FullName,Email,Pass)
VALUES('$fname','$email','$pass')";

if ($conn->query($sql)===TRUE) {
    echo"registration sucessfully done";
}
else {
    echo "Error";
}

$conn->close();}
?>