<?php
    // Load Composer's autoloader
    require './phpmailer/PHPMailerAutoload.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'mail.raphaelyamada.com';               // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'contactme@raphaelyamada.com';          // SMTP username
        $mail->Password   = '_cY$Qki!+URn';                         // SMTP password
        $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 25;                                     // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom($_POST['email'],$_POST['fullName']);
        $mail->addAddress('contactme@raphaelyamada.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Form Submission:';
        $mail->Body = '<h1 style=display:inline>Name: </h1><p style=display:inline>'.$_POST['fullName'].'</p><br>
        <h2 style=display:inline>Email: </h2><p style=display:inline>'.$_POST['email'].'</p><br>
        <h3 style=display:inline>Message: </h3><p style=display:inline>'.$_POST['comment'].'</p>';

        $mail->send();
        echo '<script>window.location.href = "../contact.html?result=1&fullname='.$_POST['fullName'].'";</script>';
        }catch (Exception $e) {
        echo '<script>window.location.href = "../contact.html?result=0&fullname='.$_POST['fullName'].'";</script>';
    }
?>

