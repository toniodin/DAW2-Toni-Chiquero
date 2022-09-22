<?php

//session_start();

$nombre = $_GET['nombre'];
$precio = $_GET['precio'];
$cantidad = $_GET['cantidad'];
$descripcion = $_GET['descripcion'];

$servidor="localhost";
$usuario="root";
$password="usbw";
$bd="daw2";

$con=mysqli_connect($servidor,$usuario,$password,$bd);



if(!$con){
    die("No se ha podido realizar la conexión_".mysqli_connect_error()."<br>");
}else{
    mysqli_set_charset($con,"utf8");
    $sql="INSERT INTO `productos`(`id`, `nombre`, `precio`, `cantidad`, `descripcion`) 
            VALUES (NULL,'$nombre',$precio,$cantidad,'$descripcion')";

$consulta=mysqli_query($con,$sql);


header('Location: main.php');
exit();
}
?>




