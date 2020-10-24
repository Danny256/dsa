<?php 

require_once "connection.php";
session_start();
$userID = $_SESSION['user_id'];
$userName = $_SESSION['user_name'];
$designation = $_SESSION['position'];


if (isset($_POST["upload"])) {
	$file = $_FILES['file'];

	$fileName = $_FILES['file']['name'];
	$fileTmpName = $_FILES['file']['tmp_name'];
	$fileSize = $_FILES['file']['size'];
	$fileError = $_FILES['file']['error'];
	$fileType = $_FILES['file']['type'];

	$fileExt = explode('.',$fileName);
	$fileActualExt = strtolower(end($fileExt));

	$allowed = array('jpg','jpeg','png','pdf','pptx','doc');

	if (in_array($fileActualExt, $allowed)) {
		if ($fileError === 0) {
			if ($fileSize < 5000000) {

				// $fileNameNew = uniqid('',true).".".$fileActualExt;
				// $fileDestination = 'uploads/'.$fileNameNew;
				// move_uploaded_file($fileTmpName,$fileDestination);

				move_uploaded_file($fileTmpName,"uploads/".$fileName);
				header("location: index.php?uploadsucessful");
			}else{
				// echo "Your file is too big";
				header("location: index.php?fileTooBig");
			}
		}else{
			// echo "There was an error uploading the file";
			header("location: index.php?errorUploading");
		}
	}else{
		// echo "You cannot upload files of this type";
		header("location: index.php?unsupportedFormat");
	}
}elseif (isset($_GET['del_id'])) {
	$id = $_GET['del_id'];
	$sql = "DELETE FROM staff WHERE admin_id = '$id'";
	$result = mysqli_query($con,$sql) or die("Failed to delete User".mysqli_error($con));

	$sql = "INSERT INTO logs VALUES (0,'$userID','$userName','$designation','Deleted Staff ID = $id',now())"; 
	$result = mysqli_query($con,$sql) or die("Insert log error".mysqli_error($con));

	if ($result) {
		header("Location:admin.php#Staff_table");
	}	
}elseif (isset($_GET['del_contact'])) {
	$id = $_GET['del_contact'];
	$sql = "DELETE FROM contact_info WHERE cont_id = '$id'";
	$result = mysqli_query($con,$sql) or die("Failed to delete contact info".mysqli_error($con));
	
	$sql = "INSERT INTO logs VALUES (0,'$userID','$userName','$designation','Deleted Contact ID = $id',now())"; 
	$result = mysqli_query($con,$sql) or die("Insert log error".mysqli_error($con));

	if ($result) {
		header("Location:admin.php#contact_tbl");
	}	
}elseif (isset($_GET['edit_id'])) {
	$id = $_GET['edit_id'];
    $sql = "SELECT * FROM staff WHERE admin_id = '$id'";
    $result = mysqli_query($con,$sql) or die("Failed to retrieve form Staff."."<br>".mysqli_error($con));
	
	$_SESSION['editID'] = $id;

	if ($result) {
		header("Location:admin.php#edit_form");
	}	
}else{}

 ?>