<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<!DOCTYPE html>
<html>
<head>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<head>
  <body>
  <script type="text/javascript">
    function error(){
          swal({
               icon: 'error',
               title: 'Oops...',
               text: 'Login erróneo!',
               dangerMode: true,
          }).then((willDelete) => {
          if (willDelete) {
               swal("Redirigiendo...", {
               icon: "success",
               });
               window.location.href = "Login.php";
          }
      });
     }
</script>
</body>
</html>


<?php
session_start();
$_SESSION["usuario"] ="";
$_SESSION["id"] ="";

$id = $_GET['id'];
$nombre = $_GET['nombre'];
$precio = $_GET['precio'];
$cantidad = $_GET['cantidad'];
$descripcion = $_GET['descripcion'];
$n_usuario = $_GET['usuario'];
$contraseña = $_GET['pass'];
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
          $contraseñaEncriptada = sha1($contraseña);
          var_dump($fila['pass']);
          var_dump($contraseñaEncriptada);
          if ($fila['usuario'] == $n_usuario && $fila['pass'] == $contraseñaEncriptada) {
               var_dump("entro");
               $_SESSION["id"] == $fila['id'];
               $_SESSION["usuario"] = $fila['usuario'];
               $_SESSION["admin"] = $fila['admin'];
               if($_SESSION["admin"] == 1){
                    sleep(2);
                    header('Location: main.php');
                    exit();
               }else{
                    sleep(2);
                    header('Location: leerProductos.php');
                    exit();
               }
              
          } else {
               echo "<script>";
               echo "error(event);";
               echo "</script>";
          }
     }

   }elseif(isset($_GET['registrarseBtn'])){

     $contraseña = sha1($contraseña);
     mysqli_set_charset($con,"utf8");
     $sql="INSERT INTO `usuarios`(`id`, `usuario`, `pass`, `admin`, `nombre`,`apellidos`,`email`) 
                VALUES (NULL,'$n_usuario','$contraseña',0,'$nombre','$apellidos','$email')";
     $consulta=mysqli_query($con,$sql);
     sleep(2);
     header('Location: login.php');
     exit();
   }

}
?>








