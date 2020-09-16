<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$tocht_type = $request->tocht_type;

  // Sanitize.
  /*$model = mysqli_real_escape_string($con, trim($request->data->model));
  $price = mysqli_real_escape_string($con, (int)$request->data->price);*/

  // Store.
$sql = "INSERT INTO `reservaties`(`tocht_type`) VALUES ('{$tocht_type}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $reservatie = [
      'tocht_type' => $tocht_type,
      'reservatieId'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$reservatie]);
  }
  else
  {
    http_response_code(422);
  }