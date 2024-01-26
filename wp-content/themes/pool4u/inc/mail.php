<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Проверяем reCAPTCHA
    $recaptchaSecretKey = '6Ldt_FUpAAAAAB4mSwlfss5GbxkB_EXYZgEvD7n6'; // Замените на ваш секретный ключ
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    $recaptchaVerify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$recaptchaSecretKey}&response={$recaptchaResponse}");
    $recaptchaData = json_decode($recaptchaVerify);

    if (!$recaptchaData->success) {
        http_response_code(403);
        echo "reCAPTCHA verification failed. Please try again.";
        exit;
    }

    // Продолжаем с обработкой формы, если reCAPTCHA верифицирована

    if (isset($_POST['wgphone'])) {$wgphone = $_POST['wgphone'];}
    if (isset($_POST['wgdata'])) {$wgdata = $_POST['wgdata'];}
    if (isset($_POST['wgpage'])) {$wgpage = $_POST['wgpage'];}
    $to = "pool4u.kh.ua@gmail.com";
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Pools for you <pool4u.kh.ua@gmail.com>;\r\n";
    $subject = "$wgdata";

    $message = "
        <div style='background: #f8f8f8;padding: 20px; font-family:sans-serif;'>
            <div style='width: 400px;margin: 0 auto;'>
                <div style='background: #1b3c56;border-radius: 10px 10px 0 0;padding: 30px 0;text-align: center;color: #fff;font-weight: 700;font-size: 20px;'>Заявка на обратный звонок
                </div>
                <div style='padding: 30px;border-radius: 0 0 10px 10px;background: #fff;'>
                    <p>Перезвонить по номеру:</p><br>
                    <b>Телефон:</b> <a href='tel:".$wgphone."'>".$wgphone." </a><br>
                </div>
            </div>
        </div>
    ";

    $send = mail($to, $subject, $message, $headers);

    if ($send == 'true') {
        echo '
        <div class="success-send">
            <img src="assets/images/icons/tick.svg"> <br> Мы получили Вашу заявку и скоро с Вами свяжемся!
        </div>';
    } else {
        echo 'Нам не удалось отправить заявку, попробуйте еще раз';
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>
