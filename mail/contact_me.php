<?php
// Check for empty fields
// if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
//   http_response_code(500);
//   exit();
// }

// $name = strip_tags(htmlspecialchars($_POST['name']));
// $email = strip_tags(htmlspecialchars($_POST['email']));
// $phone = strip_tags(htmlspecialchars($_POST['phone']));
// $message = strip_tags(htmlspecialchars($_POST['message']));

// // Create the email and send the message
// $to = "yourname@yourdomain.com"; // Add your email address inbetween the "" replacing yourname@yourdomain.com - This is where the form will send a message to.
// $subject = "Website Contact Form:  $name";
// $body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email\n\nPhone: $phone\n\nMessage:\n$message";
// $header = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
// $header .= "Reply-To: $email";	

// if(!mail($to, $subject, $body, $header))
//   http_response_code(500);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader (if using Composer)
require '../vendor/autoload.php';

// Create an instance of PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP(); // Use SMTP
    $mail->Host = 'smtp.mail.yahoo.com'; // Yahoo SMTP server
    $mail->SMTPAuth = true; // Enable SMTP authentication
    $mail->Username = 'midouwell21@yahoo.fr'; // Yahoo email address
    //$mail->Password = 'gpghbknyhksimkik'; // Yahoo email password
    $mail->Password = getenv('SMTP_PASSWORD');
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL encryption
    $mail->Port = 465; // SMTP port for Yahoo

    // Recipients
    $mail->setFrom('midouwell21@yahoo.fr', 'Your Name'); // Sender's email and name
    $mail->addAddress('midouwell@gmail.com', 'Recipient Name'); // Add a recipient

    // Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'Website Contact Form: ' . htmlspecialchars($_POST['name']);
    $mail->Body = 'You have received a new message from your website contact form.<br><br>'.
                  'Here are the details:<br><br>'.
                  'Name: ' . htmlspecialchars($_POST['name']) . '<br>'.
                  'Email: ' . htmlspecialchars($_POST['email']) . '<br>'.
                  'Phone: ' . htmlspecialchars($_POST['phone']) . '<br>'.
                  'Message:<br>' . nl2br(htmlspecialchars($_POST['message']));
    $mail->AltBody = 'You have received a new message from your website contact form.\n\n'.
                     'Here are the details:\n\n'.
                     'Name: ' . htmlspecialchars($_POST['name']) . '\n'.
                     'Email: ' . htmlspecialchars($_POST['email']) . '\n'.
                     'Phone: ' . htmlspecialchars($_POST['phone']) . '\n'.
                     'Message:\n' . htmlspecialchars($_POST['message']);

                     print_r($mail);

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
