<?php

//session_start();

$nombreProducto = $_GET['nombre'];
$precio = $_GET['precio'];
$fechaCad = $_GET['fecha'];
$cantidad = $_GET['cantidad'];

//$_SESSION["nick_logueado"]=$nombre;

$servidor="localhost";
$usuario="root";
$password="usbw";
$bd="daw2";

$con=mysqli_connect($servidor,$usuario,$password,$bd);
mysqli_set_charset($con,"utf8");

if(!$con){
    var_dump("mal");
    // Swal.fire({
//     position: 'top-end',
//     icon: 'error',
//     title: 'Ha ocurrido un error',
//     confirmButtonClass: "btn-danger",
//     showConfirmButton: true,
//     timer: 1500
// })
}else{
    // var_dump("khe?");
    $sql="INSERT INTO `productos`(`id`, `nProd`, `precio`, `fechaCad`,`cantidad') 
    VALUES (NULL,'$nombreProducto',$precio,'$fechaCad',$cantidad)";
    var_dump($sql);
    swalInsert();
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leer formulario</title>
    <table>
        <?php
            $sql2="SELECT * FROM `productos`";
            $consulta=mysqli_query($con,$sql2);
            while($fila=$consulta->fetch_assoc()){
                echo "<tr>";
                echo "<td>".$fila["id"]."</td>";
                echo "<td>".$fila["nProd"]."</td>";
                echo "<td>".$fila["percio"]."</td>";
                echo "<td>".$fila["fechaCad"]."</td>";
                echo "<td>".$fila["cantidad"]."</td>";
                echo "</tr>";
            }
        ?>
    </table>
</head>
<body>
    
</body>
</html>

<script>
    swalInsert(){
        Swal.fire({
        position: 'top-end',
        icon: 'succes',
        title: 'Se ha realizado el insert con exito',
        confirmButtonClass: "btn-success",
        showConfirmButton: true,
        timer: 1500})
    }
</script>
