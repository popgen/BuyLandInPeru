<?php
declare(strict_types=1);

const OWNER = 'info@buylandinperu.com';
const CALENDAR = 'https://calendar.app.google/h65oLNrYFP7pGCRKA';
const FROM = 'Buy Land in Peru <info@buylandinperu.com>';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /contact.html', true, 303);
    exit;
}

function posted(string $key): string
{
    if (!isset($_POST[$key]) || is_array($_POST[$key])) {
        return '';
    }
    $value = str_replace(["\r\n", "\r"], "\n", (string) $_POST[$key]);
    $value = strip_tags($value);
    $value = trim($value);
    if (strlen($value) > 4000) {
        $value = substr($value, 0, 4000);
    }
    return $value;
}

function header_safe(string $value): string
{
    return trim(str_replace(["\r", "\n", "\0", "%0a", "%0d", "%0A", "%0D"], '', $value));
}

function valid_email(string $email): bool
{
    if ($email === '' || preg_match('/[\r\n\0]/', $email)) {
        return false;
    }
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function send_mail(string $to, string $subject, string $body, string $headers): bool
{
    return mail($to, $subject, $body, $headers, '-f ' . OWNER);
}

$lang = posted('lang') === 'es' ? 'es' : 'en';
$back = $lang === 'es' ? '/es/contact.html' : '/contact.html';
$name = posted('name');
$email = posted('email');
$emailOk = valid_email($email);

if ($name === '') {
    header('Location: ' . $back . '?sent=0', true, 303);
    exit;
}

$fields = [
    'name' => $lang === 'es' ? 'Nombre' : 'Name',
    'email' => $lang === 'es' ? 'Correo' : 'Email',
    'country' => $lang === 'es' ? 'País' : 'Country',
    'budget' => $lang === 'es' ? 'Presupuesto' : 'Budget',
    'months' => $lang === 'es' ? 'Meses al año' : 'Months per year',
    'purpose' => $lang === 'es' ? 'Para qué' : 'Purpose',
    'rent' => $lang === 'es' ? 'Alquiler' : 'Rent',
    'intent' => $lang === 'es' ? 'Vivir o guardar' : 'Live or hold',
    'heat' => $lang === 'es' ? 'Calor' : 'Heat',
    'humidity' => $lang === 'es' ? 'Humedad' : 'Humidity',
    'altitude' => $lang === 'es' ? 'Altura' : 'Altitude',
    'rain' => $lang === 'es' ? 'Lluvia' : 'Rain',
    'noise' => $lang === 'es' ? 'Ruido' : 'Noise',
    'isolation' => $lang === 'es' ? 'Aislamiento' : 'Isolation',
    'healthcare' => $lang === 'es' ? 'Salud' : 'Health care',
    'airport' => $lang === 'es' ? 'Aeropuerto' : 'Airport',
    'schools' => $lang === 'es' ? 'Colegios' : 'Schools',
    'community' => $lang === 'es' ? 'Entorno' : 'Community',
    'spanish' => $lang === 'es' ? 'Español' : 'Spanish',
    'internet' => $lang === 'es' ? 'Internet' : 'Internet',
    'region' => $lang === 'es' ? 'Lugares' : 'Places',
    'visit' => $lang === 'es' ? 'Visita' : 'Visit',
    'notes' => $lang === 'es' ? 'Notas' : 'Notes',
];

$lines = ['Language: ' . $lang];
foreach ($fields as $key => $label) {
    $value = posted($key);
    if ($value === '') {
        continue;
    }
    $lines[] = $label . ': ' . $value;
}
if (!$emailOk) {
    $lines[] = 'Note: the visitor email was missing or invalid, so no thank-you was sent.';
}
$ownerBody = implode("\n", $lines) . "\n";

$ownerSubject = header_safe($lang === 'es' ? 'Consulta Buy Land in Peru' : 'Buy Land in Peru intake');
$ownerHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . FROM,
];
if ($emailOk) {
    $ownerHeaders[] = 'Reply-To: ' . header_safe($email);
}
$ownerOk = send_mail(OWNER, $ownerSubject, $ownerBody, implode("\r\n", $ownerHeaders));

if (!$ownerOk) {
    header('Location: ' . $back . '?sent=0', true, 303);
    exit;
}

if (!$emailOk) {
    header('Location: ' . $back . '?sent=noted', true, 303);
    exit;
}

if ($lang === 'es') {
    $thanksSubject = 'Recibimos su nota';
    $thanksBody = "Gracias: recibí su nota y la voy a leer, y puede reservar un horario en " . CALENDAR . ".\n\nBuy Land in Peru\n" . OWNER . "\n";
} else {
    $thanksSubject = 'We received your note';
    $thanksBody = "Thank you — I received your note and I will read it, and you can book a time at " . CALENDAR . ".\n\nBuy Land in Peru\n" . OWNER . "\n";
}

$thanksHeaders = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . FROM,
    'Reply-To: ' . OWNER,
]);
$thanksOk = send_mail(header_safe($email), header_safe($thanksSubject), $thanksBody, $thanksHeaders);

header('Location: ' . $back . '?sent=' . ($thanksOk ? '1' : '2'), true, 303);
exit;
