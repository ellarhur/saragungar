<?php
// send.php

function clean($s) {
  return trim(str_replace(["\r", "\n"], " ", $s));
}

$adminEmail = "ella.belle.hummerdahl@gmail.com";
$bookingUrl = "https://DIN-SIMPLYBOOK-LANK.se"; // din bokningslänk

$studentName = clean($_POST["student_name"] ?? "");
$parentEmail = clean($_POST["parent_email"] ?? "");
$level       = clean($_POST["level"] ?? "");
$goals       = trim($_POST["goals"] ?? "");

if ($studentName === "" || $parentEmail === "" || !filter_var($parentEmail, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Fel: saknar namn eller giltig e-post.";
  exit;
}

$subject = "Inför första fiollektionen: info om $studentName";
$message =
"Hej!\n\n".
"Tack för bokningen av en första lektion.\n\n".
"Här är elevens förutsättningar och mål:\n".
"- Namn: $studentName\n".
"- Erfarenhet: $level\n\n".
"Mål/förväntningar:\n$goals\n\n".
"Nästa steg: boka en tid här:\n$bookingUrl\n\n".
"Vänliga hälsningar\nSara";

$headers = [];
$headers[] = "From: Sara Gungar <no-reply@dindoman.se>";
$headers[] = "Reply-To: $adminEmail";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// Skicka till mamman
@mail($parentEmail, $subject, $message, implode("\r\n", $headers));

// Skicka kopia till dig (admin)
@mail($adminEmail, "[KOPIA] " . $subject, $message, implode("\r\n", $headers));

// Redirect vidare till bokningen
header("Location: $bookingUrl", true, 303);
exit;