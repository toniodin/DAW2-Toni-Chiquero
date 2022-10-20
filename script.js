/** 
 * Esto es una descripción de las funciones
 * @author Toni Chiquero
 * @alias Odin
 * @copyright Toni
 * @version 1.0.0
 */

/** 
 * @function esta funcion solo se ejecutará cuando  se inicie la página
 */
$(document).ready(function() {
   
});

/** 
 * @throws esta función te muestra un mensaje de aviso
 * @see { @link https://runebook.dev/es/docs/jsdoc/ | JSDOC}
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
 * @returns esta función retorna una confirmación
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


function notificarUpdate(){
    swal({
        title: "Se han enviado los datos a actualizar!",
        text: "Datos enviados correctamente!!",
        icon: "success",
        button: "Ok",
        timer: 10000
    });
}
