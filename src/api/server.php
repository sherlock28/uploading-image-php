<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$image = str_replace('data:image/png;base64,', '', $_POST['image']);
$image = str_replace(' ', '+', $image);
$data = base64_decode($image);
$filePath = '/tmp/myapp/images/'. uniqid().'.png';
$r = file_put_contents($filePath, $data);

if ($r)
  echo json_encode(array('status' => 'success', 'filePath' => $filePath));
else
  echo json_encode(array('status' => 'error'));

