<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];                         

$mail->isSMTP();                                      
$mail->Host = 'smtp.ukr.net';  														
$mail->SMTPAuth = true;                               
$mail->Username = 'testforme400@ukr.net'; 
$mail->Password = 'test400test'; 
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465; 

$mail->setFrom('testforme400@ukr.net'); 
$mail->addAddress('antonpaschenko13@gmail.com');      
//$mail->addAddress('ellen@example.com');              
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    
$mail->isHTML(true);                                  

$mail->Subject = 'Заявка с Matrioshki_Group';
$mail->Body    = 'Name: ' .$name . '<br> Phone: ' .$phone. '<br> Email: ' .$email. '<br> Message: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Извините за временные неудобства, мы уже решаем проблему';
}
?>