<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<?php

//session_start();

$id = $_GET['id'];
$nombre = $_GET['nombre'];
$precio = $_GET['precio'];
$cantidad = $_GET['cantidad'];
$descripcion = $_GET['descripcion'];
$n_usuario = $_GET['usuario'];
$contraseña = $_GET['contraseña'];
$email = $_GET['email'];
$apellidos = $_GET['apellidos'];

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
        sleep(2);
        header('Location: main.php');
        exit();
       
   }elseif(isset($_GET['insertBtn'])){

        mysqli_set_charset($con,"utf8");
        $sql="INSERT INTO `productos`(`id`, `nombre`, `precio`, `cantidad`, `descripcion`) 
                VALUES (NULL,'$nombre',$precio,$cantidad,'$descripcion')";
        $consulta=mysqli_query($con,$sql);
        sleep(2);
        header('Location: main.php');
        exit();

   }elseif(isset($_GET['deleteBtn'])){

    mysqli_set_charset($con,"utf8");
    $sql="DELETE FROM `productos` WHERE `id` = '$id'";
    $consulta=mysqli_query($con,$sql);
    sleep(2);
    header('Location: main.php');
    exit();

   }elseif(isset($_GET['loginBtn'])){

     $sql2="SELECT * FROM `usuarios`";
     $consulta=mysqli_query($con,$sql2);
     while($fila=$consulta->fetch_assoc()){
          if ($fila['usuario'] == $n_usuario && $fila['contraseña'] == $contraseña) {
               sleep(2);
               header('Location: main.php');
               exit();
          } else {
          die ('La contraseña no es válida.');
          }
     }

   }elseif(isset($_GET['registrarseBtn'])){

     $hash=password_hash($contraseña, PASSWORD_DEFAULT);
     
     mysqli_set_charset($con,"utf8");
     $sql="INSERT INTO `usuarios`(`id`, `usuario`, `contraseña`, `admin`, `nombre`,`apellidos`,`email`) 
                VALUES (NULL,'$n_usuario','$hash',0,'$nombre','$apellidos','$email')";
     $consulta=mysqli_query($con,$sql);
     sleep(2);
     header('Location: login.php');
     exit();
   }

}
?>





