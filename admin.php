<?php
    require_once "connection.php";
    session_start();
    $userID = $_SESSION['user_id'];
    $userName = $_SESSION['user_name'];
    $designation = $_SESSION['position'];
    $_SESSION['editID'] = $userID;

    if (is_null($userID)) {
        header("Location:index.php");
    }else{ 

        if(isset($_POST['signup_btn'])){
            $fname = $_POST['fname'];
            $lname = $_POST['lname'];
            $post = $_POST['post'];
            $email = $_POST['email'];
            $pass = crypt(md5(sha1($_POST['password'])),"DSA");

            $sql = "INSERT INTO staff VALUES(null,'$fname','$lname','$post','$email','$pass',now())";
       
            $result = mysqli_query($con,$sql) or die("Failed to insert new staff".header('location:admin.php?Email_Exits').mysqli_error($con));
       
            $sql = "INSERT INTO logs VALUES (0,'$userID','$userName','$designation','Added Staff email = $email',now())"; 
            $result = mysqli_query($con,$sql) or die("Insert log error".mysqli_error($con));

            header("location:admin.php#Staff_table");

        }elseif(isset($_POST['update_btn'])){
            $id = $_POST['id'];
            $fname = $_POST['fname'];
            $lname = $_POST['lname'];
            $post = $_POST['post'];
            $email = $_POST['email'];
            $pass = crypt(md5(sha1($_POST['password'])),"DSA");

            $sql = "UPDATE staff SET admin_firstName='$fname',admin_lastName='$lname',designation ='$post',email ='$email',password = '$pass' WHERE admin_id = '$id'";
            $result = mysqli_query($con,$sql) or die("Failed to Edit staff".header('location:admin.php?Update_Failed').mysqli_error($con));

            $sql = "INSERT INTO logs VALUES (0,'$userID','$userName','$designation','Edited Staff ID = $id',now())"; 
            $result = mysqli_query($con,$sql) or die("Insert log error".mysqli_error($con));

            header("location:admin.php#Staff_table");
        }else{}
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>DSA CSC II</title>
        <meta name="description" content="lancio, business, launch, app, product, template, design, modern, elegant" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords"  content="lancio, food, launch, app, product, template, design, modern, elegant" />
        <meta name="Resource-type" content="Document" />
        
        <!-- Upload Font "https://fonts.google.com/" -->
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&amp;display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Mrs+Saint+Delafield&amp;display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Cormorant:400,400i,600,600i,700,700i&amp;display=swap" rel="stylesheet">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
        <!-- Styles CSS -->
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <!-- Personal link -->
        <link rel="stylesheet" type="text/css" href="css/style1.css" />
        <!-- Load Font Awesome Kit -->
        <!-- <script src="../../../../kit.fontawesome.com/747940bb1c.js"></script> -->
        <script src="kit.fontawesome.com/747940bb1c.js"></script>
        <!-- Load Animate CSS -->
        <link rel="stylesheet" type="text/css" href="css/animate.css">
        <!-- Load AOS CSS -->
        <link rel="stylesheet" type="text/css" href="css/aos.css">
    </head>
    <body class="dark">
        <!-- Main Content Starts -->
        <header class="header-dark">
            <div class="container"> 
                <nav class="navbar navbar-expand-lg navbar-dark">
                <!-- Change path logo here -->
                  <a class="navbar-brand logo t-snow" href="#"><img src="assets/img/logo-white.png" alt="@" class="img-fluid"> CSC 2J</a>
                   
                  <!-- Collapse button -->
                  <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="animated-icon"><span class="snow"></span><span class="snow"></span><span class="snow"></span></span>
                  </button>
                  <!-- Collapsible content -->
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item">
                        <a class="nav-link t-snow" href="#"><?php echo $designation ?></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link t-snow" href="#">ID: <?php echo $userID ?></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link t-snow" href="#"><?php echo $userName ?></a>
                      </li>
                      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                      <?php 
                        if($designation == "Administrator"){
                        ?>
                            <li class="nav-item">
                            <a class="nav-link t-snow" href="#signup_form">Add Staff</a>
                            </li>
                        <?php
                        }elseif($designation == "Staff"){
                            ?>
                            <li class="nav-item">
                            <a class="nav-link t-snow" href="#edit_form">Edit Account</a>
                            </li>
                        <?php   
                        }else{}
                        ?>
                      <li class="nav-item">
                        <a class="nav-link t-snow" href="#"></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link t-snow" href="logout.php">Log Out</a>
                      </li>
                    </ul>
                  </div>
                </nav>
             </div>
        </header>
        <br><br><br><br><br>  
            <h3>Contact Form Information</h3>
        <div class="">
            <?php
                $sql = "SELECT * FROM contact_info ORDER BY date DESC LIMIT 20";
                $result = mysqli_query($con,$sql) or die("Failed to retrieve data"."<br>".mysqli_error($con));
            ?>
			<form id = "contact_tbl">
				<table class="result_tbl">
					<tr>
						<th>ID</th>
						<th>Email</th>
						<th>Name</th>
						<th>Message</th>
                        <th>Date</th>
                        <?php 
                        if($designation == "Administrator"){
                        ?>
                        <th colspan="">Actions</th>
                        <?php } ?>
                    </tr>
					<?php

						while ($record = mysqli_fetch_array($result)) {

					?>
                    <tr>
                        <td><?php echo $record[0]; ?></td>
                        <td><?php echo $record[1]; ?></td>
                        <td><?php echo $record[2]; ?></td>
                        <td><?php echo $record[3]; ?></td>
                        <td><?php echo $record[4]; ?></td>
                        <?php 
                        if($designation == "Administrator"){
                        ?>
                        <td><a href="<?php echo "php.php?del_contact=$record[0]";?>">Instant Delete</a></td>
                        <?php } ?>
                    </tr>
                    <?php
                        }
                    ?>
                </table>
            </form>
            <?php 
            
            if($designation == "Administrator"){
            ?>
            <br>
                <h3>User Logs</h3>
            <?php
                $sql = "SELECT * FROM logs ORDER BY date DESC LIMIT 20";
                $result = mysqli_query($con,$sql) or die("Failed to retrieve data"."<br>".mysqli_error($con));
            ?>
            <form>
				<table class="result_tbl">
					<tr>
						<th>Log ID</th>
						<th>User ID</th>
						<th>User Name</th>
						<th>Designation</th>
						<th>activity</th>
						<th>Date</th>
                    </tr>
					<?php

						while ($record = mysqli_fetch_array($result)) {

					?>
                    <tr>
                        <td><?php echo $record[0]; ?></td>
                        <td><?php echo $record[1]; ?></td>
                        <td><?php echo $record[2]; ?></td>
                        <td><?php echo $record[3]; ?></td>
                        <td><?php echo $record[4]; ?></td>
                        <td><?php echo $record[5]; ?></td>
                    </tr>
                    <?php
                        }
                    ?>
                </table>
            </form>
            <br>
                <h3>Administrators</h3>
            <?php
                $sql = "SELECT * FROM staff ORDER BY date DESC";
                $result = mysqli_query($con,$sql) or die("Failed to retrieve data"."<br>".mysqli_error($con));
            ?>
            <form id = "Staff_table">
				<table class="result_tbl">
					<tr>
						<th>Admin ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Designation</th>
						<th>Email</th>
						<th>Password</th>
                        <th>Date</th>
                        <th colspan="2">Actions</th>
                    </tr>
					<?php

						while ($record = mysqli_fetch_array($result)) {

					?>
                    <tr>
                        <td><?php echo $record[0]; ?></td>
                        <td><?php echo $record[1]; ?></td>
                        <td><?php echo $record[2]; ?></td>
                        <td><?php echo $record[3]; ?></td>
                        <td><?php echo $record[4]; ?></td>
                        <td><?php echo $record[5]; ?></td>
                        <td><?php echo $record[6]; ?></td>
                        <!-- <td><a href="<?php //echo "admin.php?edit_id=$record[0]"; ?>">Edit</a></td> -->
                        <td><a href="<?php echo "php.php?edit_id=$record[0]"; ?>">Edit</a></td>
                        <td><a href="<?php echo "php.php?del_id=$record[0]"; ?>">Delete</a></td>
                    </tr>
                        <?php } ?>
                </table>
            </form>
        <?php }  ?>
    </div>

     <div class="section dark">
     <div class="container">
         <div class="hero-container">
             <div class="back-title absolute t-snow op-1" data-aos="fade-right" data-aos-anchor-placement="center-bottom">social</div>
             <div class="front-title absolute" data-aos="fade-left" data-aos-anchor-placement="center-bottom"><h3 class="t-snow">Keep In Touch</h3></div>
         </div>
         <p class="center t-snow">Get instant updates and follow our amazing community.</p>
         <div class="social-container mt-50 center">
             <a href="#" class="primary-btn icon rain t-dark"><i class="fab fa-facebook"></i></a>
             <a href="#" class="primary-btn icon rain t-dark"><i class="fab fa-instagram"></i></a>
             <a href="#" class="primary-btn icon rain t-dark"><i class="fab fa-snapchat"></i></a>
         </div>
     </div>
     <!-- Footer -->
     <footer>
         <div class="copyright t-moon center">All rights reserved to &copy; CSC 2J Makerere University 2019/20</div>
     </footer>
     </div>
     <!-- Section Ends -->

<!-- New SignUp design -->
<section class = "popup-graybox">
    <div class = "ebook-popup-sec" id = "signup_form">
    <img src="assets/img/login02_popup.png" alt="">
    <br><a href="" id="close" style="text-decoration: none" >&times;</a>
    <h3>Register Staff</h3>
        <div class = "ebook-email-sec">
            <!-- <form action="admin.php#Staff_table" method = "POST"> -->
            <form action="admin.php" method = "POST">
                <input type="text" id="fname" name="fname" placeholder="First name" required="" autofocus = "">
                <input type="text" id="lname" name="lname" placeholder="Last name" required="">

                <select id="post" name="post">
                    <option value="Staff">Staff</option>
                    <option value="Administrator">Administrator</option>
                </select>
                <input type="email" id="email" name="email" placeholder="Email" required="">
                <input type="password" id="password" name="password" placeholder="Password" required="">

                <input type="submit" name = "signup_btn" value="Register">
                <!-- <button class="ebook-cls-btn close-btn">X</button> -->
                <!-- <a href="" id="close" style="text-decoration: none" >&times;</a> -->
            </form>
        </div>
    </div>
</section>
<!-- End of new signUp design -->
<?php

if($designation == "Administrator"){
        $id = $_SESSION['editID'];
        $sql = "SELECT * FROM staff WHERE admin_id = '$id'";
        $result = mysqli_query($con,$sql) or die("Failed to retrieve form Staff."."<br>".mysqli_error($con));
        $record = mysqli_fetch_array($result);
}elseif($designation == "Staff"){ 
        $sql = "SELECT * FROM staff WHERE admin_id = '$userID'";
        $result = mysqli_query($con,$sql) or die("Failed to retrieve form Staff."."<br>".mysqli_error($con));
        $record = mysqli_fetch_array($result);
}else{}
?>
<!-- Edit Form -->
<section class = "popup-graybox">
    <div class = "ebook-popup-sec" id = "edit_form">
    <img src="assets/img/login02_popup.png" alt="">
    <br><a href="" id="close" style="text-decoration: none" >&times;</a>
    <h3>Edit Staff</h3>
        <div class = "ebook-email-sec">
            <!-- <form action="admin.php#Staff_table" method = "POST"> -->
            <form action="admin.php" method = "POST">
                <input type="hidden" id="id" name="id" value = "<?php echo $record[0];?>" >
                <input type="text" id="fname" name="fname" placeholder="First name" required="" autofocus = "" value = "<?php echo $record[1];?>" >
                <input type="text" id="lname" name="lname" placeholder="Last name" required="" value = "<?php echo $record[2];?>" >

                <?php  if($designation == "Administrator"){ ?>
                <select id="post" name="post">
                    <option value = "<?php echo $record[3];?>" >Current</option>
                    <option value="Staff">Staff</option>
                    <option value="Administrator">Administrator</option>
                </select>
                <?php }elseif($designation == "Staff"){ ?>
                    <select id="post" name="post">
                        <option value = "<?php echo $record[3];?>" >Staff</option>
                    </select>
                <?php }else{} ?>

                <input type="email" id="email" name="email" placeholder="Email" required="" value = "<?php echo $record[4];?>">
                <input type="password" id="password" name="password" placeholder="Password" required="">

                <input type="submit" name = "update_btn" value="Update">
                <!-- <button class="ebook-cls-btn close-btn">X</button> -->
                <!-- <a href="" id="close" style="text-decoration: none" >&times;</a> -->
            </form>
        </div>
    </div>
</section>
<!-- End of Edit Form-->

        <!-- JS files upload -->
        <script src="js/jquery-3.4.1.min.js"></script> 
        <script src="js/bootstrap.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/validator.min.js"></script>
        <script src="js/contact.js"></script> 
        <script src="js/main.js"></script>
        <script src="js/aos.js"></script>
        <script src="js/functions.js"></script>
    </body>
</html>
<?php } ?>