<?php

$servidor = "localhost";
$usuario = "root";
$password = "usbw";
$bd = "daw2";
$con = mysqli_connect($servidor,$usuario,$password,$bd);

if(!$con){
    echo "No se ha podido realizar la conexión_".mysqli_connect_error()."<br>";
}else{
    mysqli_charset($con,"utf8");
    echo "Se ha establecido correctamente la conexión a la base de datos";

    $sql = "INSERT INTO `alumnos`(`id`, `nombre`, `apellidos`, `edad`)
        VALUES (NULL,'.$nombre.','.$apellidos.',".$edad.")";
}

$nombre = $_GET['nombre'];
$apellidos = $_GET['apellido'];
$edad = $_GET['años'];



echo "El nombre es ".$nombre." los apellidos son ".$apellidos." y la edad es " .$edad.".";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>primera página</title>
</head>
<body>
    <table>
        <?php
            $sql2 = "SELECT * FROM `alumnos`";
            $consulta = mysqli_query($con,$sql2);
            while($fila = $consulta -> fetch_assoc()){
                echo "<tr>";
                echo "<td>".$fila["id"]."</td>";
                echo "<td>".$fila["nombre"]."</td>";
                echo "<td>".$fila["apellido"]."</td>";
                echo "<td>".$fila["edad"]."</td>";
                echo "</tr>";
            }
        ?>
    </table>
    
</body>
</html>