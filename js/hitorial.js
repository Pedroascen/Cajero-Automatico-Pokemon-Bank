window.onload = funcionPrincipal();
//variables globales
var usuario;

function funcionPrincipal() {
    //obtener datos de usuario
    usuario = JSON.parse(localStorage.getItem('Usuarios'));
    if (localStorage.getItem('Transacciones') != '[]') {
        var transacciones = JSON.parse(localStorage.getItem('Transacciones'));
        cargarCards(transacciones);
    } else {
        //console.trace("No hay registros en el historial");
    }

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
//funcion para mostrar info del usuario
function mostrarInfoUsuario(nombreUsuario, noCuenta) {
    document.getElementById('txtNoCuenta').innerHTML = noCuenta;
}

//funcion para cargar historial
function cargarCards(transacciones) {

    //recorremos el arreglo del localStorage
    for (let i = 0; i < transacciones.length; i++) {    
        if (transacciones[i].tipo == 1) {
            var tbody = document.getElementById('td_ingresos');
            var row = '<tr>'
                +'<td>'+transacciones[i].descripcion+'</td>'
                +'<td>'+transacciones[i].monto+'</td>'
                +'<td>'+transacciones[i].fecha+'</td>'
                +'</tr>'; 
            tbody.innerHTML += row;
            console.log(row);
        }
        if (transacciones[i].tipo == 2) {
            var tbody = document.getElementById('td_egresos');
            var row = '<tr>'
                +'<td>'+transacciones[i].descripcion+'</td>'
                +'<td>'+transacciones[i].monto+'</td>'
                +'<td>'+transacciones[i].fecha+'</td>'
                +'</tr>'; 
            tbody.innerHTML += row;
            console.log(row);
        }
        if (transacciones[i].tipo == 3) {
            var tbody = document.getElementById('td_pagos');
            var row = '<tr>'
                +'<td>'+transacciones[i].descripcion+'</td>'
                +'<td>'+transacciones[i].monto+'</td>'
                +'<td>'+transacciones[i].fecha+'</td>'
                +'</tr>'; 
            tbody.innerHTML += row;
            console.log(row);
        }
    }
}

//cerrar sesion
function salir() {
    localStorage.removeItem('Usuarios');
    location.href = 'login.html';
}