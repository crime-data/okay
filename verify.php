<?php
$secret = "0x4AAAAAACk4wMHSUKtIzTzXU3EDblZd5cw";
$response = $_POST['cf-turnstile-response'];

$verify = file_get_contents(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    false,
    stream_context_create([
        'http' => [
            'method'  => 'POST',
            'header'  => "Content-type: application/x-www-form-urlencoded",
            'content' => http_build_query([
                'secret'   => $secret,
                'response' => $response
            ])
        ]
    ])
);

$result = json_decode($verify);

if ($result->success) {
    echo "Human verified";
} else {
    echo "Verification failed";
}
?>
