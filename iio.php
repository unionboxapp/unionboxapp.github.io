<?php
	$data = $_GET["data"];
	$data = urldecode($data);
	$data = json_encode($data);
	$data = json_decode($data, true);
	file_put_contents("results.json", json_encode($data));
?>