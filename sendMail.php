<?php
session_start();

use PHPMailer\PHPMailer\PHPMailer;

require "PHPMailer/PHPMailer.php";
require "PHPMailer/SMTP.php";
require "PHPMailer/Exception.php";

$email = $_POST['email'];
$userName = $_POST['userName'];
$token = $_POST['token'];
$generatePassword = $_POST['generatePassword'];
$mail = new PHPMailer();
$mail->CharSet = "utf-8";
$mail->isSMTP();
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->Host = "smtp.gmail.com";
//$mail->Host     = "mail.softresto.com"; // SMTP server
$mail->Port = "587";
$mail->Username = "xperionline@gmail.com";
//$mail->Username = "noreply@softresto.com";
$mail->Password = "xperiolaval";
//$mail->setFrom($email);
$mail->setFrom("xperionline@gmail.com");
//Enable HTML
$mail->isHTML(true);
//Attachment
//	$mail->addAttachment('img/attachment.png');
//Email body
if (($generatePassword != '' || $generatePassword != null) && $token == '') {
    $mail->Subject = "Your password ";
	$generatePassword = $_POST['generatePassword'];
	$urlLogin = 'https://www.softresto.com/admin/';
	$mail->Body = "
	            Salut,<br><br>	
                Votre nom utilisateur est : $userName <br>				
				Votre mot de passe est : $generatePassword <br>
				Copiez votre mot de passe pour vous connecter avec ce LIEN : $urlLogin <br>
	           <br><br>	            
			   Cordialement,<br>
	            softresto
	        ";
} else {
    $mail->Subject = "Reset Your password ";
	$mail->Body = "
	Hi,<br><br>
	
	In order to reset your password, please click on the link below:<br>
	<a href='
	https://www.softresto.com/admin/resetPassword.php?email=$email&token=$token
	'>https://www.softresto.com/admin/resetPassword.php?email=$email&token=$token</a><br><br>
	
	Kind Regards,<br>
	My Name
";
}
$mail->addAddress($email);
$sent = $mail->send();

// if($sent){
//     echo 'Message has been sent';
// }else{
//     echo 'Message could not be sent.';
//     echo 'Mailer Error: ' . $mail->ErrorInfo;
// }

if ($sent) {
	echo json_encode(array(
		'success' => true
	));
} else {
	 $er = $mail->ErrorInfo;
	echo json_encode(array(
		'success' => false, 'error' => $er
	));
}


$a = session_id();
$Date = date_create('now')->format('Y-m-d H:i:s');
$payGlobal = "GLOBAL";


   
	 $postLog = "mail: " . $email . " userName: " . $userName . " generatePassword: " . $generatePassword . " \r\n";

$path = 'C:\\logMail\\' . $a . '.txt';
$myfile = fopen($path, 'a'); //or die("Unable to open file!");
fwrite($myfile, $postLog);
fclose($myfile);


$mail->smtpClose();
