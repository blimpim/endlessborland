<?php 

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize the form inputs
    $name = trim($_POST["user_name"]);
    $email = trim($_POST["user_email"]);

    // Perform further validation if needed
    if (empty($name) || empty($email)) {
        // Handle validation errors
        echo "error";
        exit;
    }


$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.beget.com';  																							
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'chat@deniscv.net'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'As0602au17'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('chat@deniscv.net'); // от кого будет уходить письмо?
$mail->addAddress('chat@deniscv.net');     // Кому будет уходить письмо 


$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, <br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
} else {
    header('location: thank-you.html');
}

} else {
    // Handle invalid requests
    echo "error";
}
?>