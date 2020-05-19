<?php
	$data = $_GET["data"];
	$data = urldecode($data);
	$data = json_encode($data);

 	$data2 = file_get_contents("results.json");
 	$data =  $data . $data2;
	file_put_contents("results.json", $data);
?>