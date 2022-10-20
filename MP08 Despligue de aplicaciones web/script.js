


/**
 * @author toni chiquero <jsmith@example.com>
 * @alias Odin
 */
function notificarEnvio(){
    swal({
        title: "Se han enviado los datos a registrar!",
        text: "Datos enviados correctamente!!",
        icon: "success",
        button: "Ok",
        timer: 10000
    });
    return confirm('Estas seguro?');
}

/** 
 * @return cerrarSesion(event) esta función retorna una confirmación
*/
function cerrarSesion(event) {
    event.preventDefault();
    swal({
    title: "Seguro desea cerrar sesión?",
    text: "Una vez cerrada tendrá que logear de nuevo",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        swal("Redirigiendo...", {
        icon: "success",
        });
        window.location.href = "Login.php";
    } else {
        swal("Su sesión no se ha cerrado");
    }
    });
}

/** 
 * @throws esta función te muestra un mensaje de aviso
 * @see { @link https://runebook.dev/es/docs/jsdoc/ | JSDOC}
 * @function  esta funcion solo se ejecutará cuando  se inicie la página
 */

function notificarUpdate(){
    swal({
        title: "Se han enviado los datos a actualizar!",
        text: "Datos enviados correctamente!!",
        icon: "success",
        button: "Ok",
        timer: 10000
    });
}
