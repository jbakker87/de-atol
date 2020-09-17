<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

// Set the variable from request
$datum_reservatie = date('Y-m-d h:i:s');
$vaardatum1  = formatDateforSql($request->vaardatum1);
$vaardatum2  = formatDateforSql($request->vaardatum2);
$vaardatum3  = formatDateforSql($request->vaardatum3);

$tocht_type = $request->tocht_type;
$aantal_volwassenen = (int)$request->aantal_volwassenen;
$aantal_kinderen = (int)$request->aantal_kinderen;

  // Sanitize.
  /*$model = mysqli_real_escape_string($con, trim($request->data->model));
  $price = mysqli_real_escape_string($con, (int)$request->data->price);*/

  // Store.
$sql = "INSERT INTO `reservaties`(`tocht_type`, `aantal_volwassenen`, `aantal_kinderen`, `datum_reservatie`, `vaardatum1`, `vaardatum2`, `vaardatum3`) 
VALUES ('{$tocht_type}', '{$aantal_volwassenen}', '{$aantal_kinderen}', '{$datum_reservatie}', '{$vaardatum1}', '{$vaardatum2}', '{$vaardatum3}')";

if($aantal_kinderen != '' && $aantal_kinderen != 0 && $aantal_kinderen != null) {      
      if(mysqli_query($con,$sql)) {
        http_response_code(201);
        $reservatie = [
          'tocht_type'          => $tocht_type,
          'aantal_volwassenen'  => $aantal_volwassenen,
          'vaardatum1'          => $vaardatum1,
          'vaardatum2'          => $vaardatum2,
          'vaardatum3'          => $vaardatum3,
          'aantal_kinderen'     => $aantal_kinderen,
          'datum_reservatie'    => $datum_reservatie,
          'reservatieId'        => mysqli_insert_id($con)
        ];
        echo json_encode(['data'=>$reservatie]);
      }
      else {
        http_response_code(422);
        echo('something went wrong with insertions');
      }
}

function formatDateforSql($date) {
    $string = '';
    if ($date == '') {
        $string = null;
    }
    else {
        $string = strtotime($date);
        $string = date('Y-m-d h:i:s', $string);
    }
    return $string;
}
