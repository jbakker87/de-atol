<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
date_default_timezone_set('Europe/Amsterdam');

// db credentials
define('DB_HOST', 'localhost:8889');
define('DB_USER', 'admin');
define('DB_PASS', 'admin');
define('DB_NAME', 'atol_db');

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();