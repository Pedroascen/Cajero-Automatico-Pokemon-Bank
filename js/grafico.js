window.onload = funcionPrincipal();
//variables globales
var usuario;
var monto;

function funcionPrincipal() {
    //obtener datos de usuario
    usuario = JSON.parse(localStorage.getItem('Usuarios'));

    if (JSON.stringify(usuario) != 'null') {//comprobamos si el usuario se ha logueado
        //guardar datos en variables
        const nombreUsuario = usuario[0].nombre;
        const noCuenta = usuario[0].cuenta;
        //mostrar datos del usuario
        mostrarInfoUsuario(nombreUsuario, noCuenta);
    } else {
        //si no hay usuario logueado
        location.href = 'login.html';
    }
}
//metodo para mostrar info del usuario
function mostrarInfoUsuario(nombreUsuario, noCuenta) {
    document.getElementById('txtNoCuenta').innerHTML = noCuenta;
}
//cerrar sesion
function salir() {
    localStorage.removeItem('Usuarios');
    location.href = 'login.html';
}