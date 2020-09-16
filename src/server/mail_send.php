<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
date_default_timezone_set('Europe/Amsterdam');

$requestcontent = file_get_contents("php://input");
$decodedrequest = html_entity_decode($requestcontent);
$request = json_decode($decodedrequest, true);

/* echo($decodedrequest); */

if(isset($request['email'])) {
    $email_to = " reserveren@de-atol.nl";
    $email_subject = "Reservering rondvaartbedrijf de Atol";
     
$selectedProjects  = 'None';
if(isset($_POST['projects']) && is_array($_POST['projects']) && count($_POST['projects']) > 0){
    $selectedProjects = implode(', ', $_POST['projects']);
}
$body = 'Selected Projects: ' . $selectedProjects;
    function died($error) {
        // your error code can go here
		echo("Error sending email: " . $error);
        die();
    }
	 
	if (!isset($_POST['projects']))
		$_POST['projects'] = array();
     
    $naam = $request['name']; // required **
	$telefoon = $request['phone']; // required **
    $email_from = $request['email']; // required **
	$msg = $request['msg']; // required **
	      
    $error_message = array();

   $string_exp = "/^[A-Za-z .'-]+$/";

  if(!empty($error_message)) {
	  $errors = '';
	  foreach ($error_message as $error)
	  {
		  $errors .= $error . ', ';
	  }
	  $errors .= '';
	  
    died($errors);
  }
    $email_message = "Formulier gegevens hieronder.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Naam: ".clean_string($naam)."\n";
	$email_message .= "Telefoonnummer: ".clean_string($telefoon)."\n";
	$email_message .= "Bericht: ".clean_string($msg)."\n";
    $email_message .= "E-mail: ".clean_string($email_from)."\n";
	 
     
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
	
echo "email was sent";
?>

<!-- place your own success html below -->

<br /><br />
<p align="center">Dank u voor het versturen van de E-mail.<br /><br /> Wij zullen zeer binnenkort contact met u opnemen. </p> <br /><br /><br />
 <p align="center">`
<img src="../images/contact/zeehond.jpg" alt="de-ATOL rondvaartbedrijf" width="400"></a></p>


<?php if (isset($_GET['link'])) { ?>
	<p align="center"> <a href="https://www.de-atol.nl/index.php">Terug naar homepage</a> </p>
<?php } ?>



<?php
} else {
 echo "email not set";	
}
die();
?>




