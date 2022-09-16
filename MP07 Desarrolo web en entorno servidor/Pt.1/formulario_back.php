<?php
// <!-- <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
// <script src="sweetalert2.all.min.js"></script>
// <script src="sweetalert2.min.js"></script>
// <link rel="stylesheet" href="sweetalert2.min.css"> -->

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

if(!$con){
   
    // Swal.fire({
    //     position: 'top-end',
    //     icon: 'error',
    //     title: 'Ha ocurrido un error',
    //     confirmButtonClass: "btn-danger",
    //     showConfirmButton: true,
    //     timer: 1500
    // })
     
}else{
   
    mysqli_set_charset($con,"utf8");
    

    $sql="INSERT INTO `productos`(`id`, `nProd`, `precio`, `fechaCad`,`cantidad') 
    VALUES (NULL,'$nombreProducto',$precio,'$fechaCad',$cantidad)";
    //var_dump($sql);

    $consulta=mysqli_query($con,$sql);
    //var_dump($consulta);


    if(!$consulta){
        var_dump("hola");
        // Swal.fire({
    //     position: 'top-end',
    //     icon: 'error',
    //     title: 'Ha ocurrido un error',
    //     confirmButtonClass: "btn-danger",
    //     showConfirmButton: true,
    //     timer: 1500
    // })
    }else{
        // Swal.fire({
    //     position: 'top-end',
    //     icon: 'succes',
    //     title: 'Se ha realizado el insert con exito',
    //     confirmButtonClass: "btn-success",
    //     showConfirmButton: true,
    //     timer: 1500
    // })
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <table>
    <?php
        $sql2="SELECT * FROM `alumnos`";
        $consulta=mysqli_query($con,$sql2);
        while($fila=$consulta->fetch_assoc()){
            echo "<tr>";
            echo "<td>".$fila["id"]."</td>";
            echo "<td>".$fila["nombre"]."</td>";
            echo "<td>".$fila["apellidos"]."</td>";
            echo "<td>".$fila["edad"]."</td>";
            echo "</tr>";
        }
    ?>
    </table>

    <form action="/logout.php" method="post">

    <input type="submit" value="Enviar">
</form>
</body>
</html>

<?php
}
?>
