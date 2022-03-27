<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $name = $_POST['name'];

    $content = $name . ' Подписался на email-рассылку.';

    $success = mail("callme@northerm-tour.com", 'Запрос на бронирование тура', $content);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}