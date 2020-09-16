<?php
/**
 * Returns the list of passagiers.
 */

require 'connect.php';
    
$passagiers = [];
$sql = "SELECT voornaam, achternaam, email, passagierId FROM passagiers";

if($result = mysqli_query($con,$sql))
{
    $cr = 0;
    while($row = mysqli_fetch_assoc($result))
    {
        $passagiers[$cr]['voornaam']    = $row['voornaam'];
        $passagiers[$cr]['achternaam'] = $row['achternaam'];
        $passagiers[$cr]['email'] = $row['email'];
        $passagiers[$cr]['passagierId'] = $row['passagierId'];
        $cr++;
      }
    
	echo json_encode(['data'=>$passagiers]);

}
else
{
  http_response_code(404);
}
