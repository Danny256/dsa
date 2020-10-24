<?php 
    require_once "connection.php";
    session_start();

    $id = $_SESSION['user_id'];
    $user = $_SESSION['user_name'];
    $designation = $_SESSION['position'];
    
    $sql = "INSERT INTO logs VALUES (0,'$id','$user','$designation','Log Out',now())"; 
    $result = mysqli_query($con,$sql) or die("Insert log error".mysqli_error($con));

	unset($_SESSION['position']);
	unset($_SESSION['user_id']);
	unset($_SESSION['user_name']);

	session_destroy();

	header("Location:index.php");
 ?>