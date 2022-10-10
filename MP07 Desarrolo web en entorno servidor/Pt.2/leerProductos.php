<?php

session_start();
$_SESSION['id'];
$_SESSION['usuario'];

$nombre = $_GET['nombre'];
$precio = $_GET['precio'];
$cantidad = $_GET['cantidad'];
$descripcion = $_GET['descripcion'];
$buscador = NULL;

$servidor="localhost";
$usuario="root";
$password="usbw";
$bd="daw2";

$con=mysqli_connect($servidor,$usuario,$password,$bd);

if($con){
    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leer Formulario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css" rel="stylesheet"  type='text/css'>    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><?=$_SESSION['usuario']?></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="main.php">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="leerProductos.php">Leer productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="actualizarProductos.php">Actualizar productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="borrarProductos.php">Borrar productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="Login.php">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="Registrar.php">Registrarse</a>
                </li>
              </ul>
              <i class="fa fa-cart-plus" aria-hidden="true" style="color:white;font-size:40px;padding-right:5%"></i>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Buscador por ID" name="buscador" aria-label="Buscador por ID">
                <button class="btn btn-outline-light" type="submit" name="" style="margin-right:10px ;">Buscar</button>
              </form>
                <button class="btn btn-outline-light" name="Logout"><a href="LogOut.php" onclick="return confirm('Estas seguro?');">Log out</a></button>
          </div>
        </div>
  </nav>
<div class="container mt-3">
<h1 style="text-align:center">Listado de productos</h1>
<h3 style="text-align:center">Si desea añadir al carrito presione en cualquiera de las filas</h3>
  <table class="table table-dark table-hover">
    <tbody>
      <tr>
        <th>ID Producto</th>
        <th>Nombre Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Descripción</th>
      </tr>
      <?php
      $buscador = $_GET['buscador']; 
      //var_dump($buscador);
      if($buscador != NULL ||  $buscador != ""){
        buscador($con,$buscador);
      }else{
        //var_dump($_GET['buscador']);
        $sql2="SELECT * FROM `productos`";
        $consulta=mysqli_query($con,$sql2);
        while($fila=$consulta->fetch_assoc()){
            echo "<tr>";
            echo "<td>".$fila["id"]."</td>";
            echo "<td>".$fila["nombre"]."</td>";
            echo "<td>".$fila["cantidad"]."</td>";
            echo "<td>".$fila["precio"]."</td>";
            echo "<td>".$fila["descripcion"]."</td>";
            echo "</tr>";
        }
      }
      ?>
    </tbody>
  </table>
</div>

    <form action="/logout.php" method="get">

</form>
</body>
</html>

<?php
}
  function buscador($con,$buscador){
    $sql2="SELECT * FROM `productos` where `id` = $buscador";
    //var_dump($sql2);
    $consulta=mysqli_query($con,$sql2);
    while($fila=$consulta->fetch_assoc()){
        echo "<tr>";
        echo "<td>".$fila["id"]."</td>";
        echo "<td>".$fila["nombre"]."</td>";
        echo "<td>".$fila["cantidad"]."</td>";
        echo "<td>".$fila["precio"]."</td>";
        echo "<td>".$fila["descripcion"]."</td>";
        echo "</tr>";
    }
    $buscador = NULL;
  }
?>

