<?php
/**
 * Returns the list of reservaties.
 */

require 'connect.php';
    
$reservaties = [];
$sql = "SELECT reservatieId, tocht_type, aantal_volwassenen, aantal_kinderen, datum_reservatie, vaardatum1, vaardatum2, vaardatum3 FROM reservaties";

if($result = mysqli_query($con,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $reservaties[$cr]['reservatieId']    = $row['reservatieId'];
        $reservaties[$cr]['tocht_type'] = $row['tocht_type'];
        $reservaties[$cr]['aantal_volwassenen'] = $row['aantal_volwassenen'];
        $reservaties[$cr]['aantal_kinderen'] = $row['aantal_kinderen'];
        $reservaties[$cr]['datum_reservatie'] = $row['datum_reservatie'];
        $reservaties[$cr]['vaardatum1'] = $row['vaardatum1'];
        $reservaties[$cr]['vaardatum2'] = $row['vaardatum2'];
        $reservaties[$cr]['vaardatum3'] = $row['vaardatum3'];
        $cr++;
      }

	echo json_encode(['data'=>$reservaties]);
}
else
{
  http_response_code(404);
}
