<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>    

</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Mis productos</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="leerProductos.php">Leer productos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="actualizarProductos">Actualizar productos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Borrar productos</a>
            </li>
            </ul>
            <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-light" type="submit">Buscar</button>
            </form>
        </div>
        </div>
  </nav>
    <div class="container mt-3">
        <h2>Añadir productos</h2>
        <form action="insertForm.php" method="get">
            <div class="mb-3 mt-3">
                <label for="">Nombre del producto:</label>
                <input type="text" class="form-control" id="nombre" placeholder="Nombre del producto" name="nombre">
            </div>
            <div class="mb-3">
                <label for="">Precio del producto:</label>
                <input type="number" class="form-control" id="precio" placeholder="Precio del producto" name="precio">
            </div>
            <div class="mb-3">
                <label for="">Cantidad:</label>
                <input type="number" class="form-control" id="cantidad" placeholder="Cantidad" name="cantidad">
            </div>
            <div class="mb-3">
                <label for="">Descripcion:</label>
                <input type="text" class="form-control" id="descripcion" placeholder="Descripcion" name="descripcion">
            </div>
            <div class="mb-3 row" style="justify-content:center">
                <button type="submit" class="btn btn-dark col-6" >Enviar</button>
            <div>
        </form>
    </div>
</body>
</html>
