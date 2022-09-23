<?php

//session_start();

$id = $_GET['id'];
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
   if(isset($_GET['updateBtn'])){

        mysqli_set_charset($con,"utf8");
        $sql="UPDATE `productos` SET `nombre`='$nombre', `precio` = '$precio', `cantidad` = '$cantidad', `descripcion` = '$descripcion' WHERE `id` = '$id'";
        $consulta=mysqli_query($con,$sql);
       
   }elseif(isset($_GET['insertBtn'])){

        mysqli_set_charset($con,"utf8");
        $sql="INSERT INTO `productos`(`id`, `nombre`, `precio`, `cantidad`, `descripcion`) 
                VALUES (NULL,'$nombre',$precio,$cantidad,'$descripcion')";
        $consulta=mysqli_query($con,$sql);

   }elseif(isset($_GET['deleteBtn'])){

    mysqli_set_charset($con,"utf8");
    $sql="DELETE FROM `productos` WHERE `id` = '$id'";
    $consulta=mysqli_query($con,$sql);

}




header('Location: main.php');
exit();
}
?>




