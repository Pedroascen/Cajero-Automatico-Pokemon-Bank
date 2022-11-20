//variables globales
usuario = [{ nombre: 'Ash Ketchum', pin: 1234, cuenta: 0987654321 }];
let num = [];

//metodo para capturar los numeros
function getNumber(number) {
    //validarNumero(number);   
    num.push(number);
    for (let index = 0; index < num.length; index++) {
        document.getElementById('pin').value = num.join('');
    }
}
//funcion para limpiar los inputs, al cometer error
function limpiarInputs() {
    document.getElementById('pin').value = '';
    num = [];
}
//funcion al clickear en ingresar
function Ingresar() {
    //guardamos el datos del input
    let pass = document.getElementById('pin').value;

    if (!isNaN(pass)) {//se valida que no lleve texto
        if (pass.length > 0) {//se valida que el pin no sea null
            if (pass.length == 4) {//se valida el tamanio
                //nombre y contrasenia ingresadas por el usuario
                iniciarSesion(pass);
                //alert("La pasword es valida: " + pass);
            } else {//validamos que el pin sea igual a 4
                //alert("Solo se admite pin de 4 digitos");
                //uso de swit alert para mensajes
                Swal.fire(
                    'El pin debe ser de 4 digitos',
                    '',
                    'error'
                );
                limpiarInputs();
                return false;
            }
        } else {//si el pin es igual a 0
            //alert("el pin no puede ser vacio");
            //uso de swit alert para mensajes
            Swal.fire(
                'El pin no puede ser vacio',
                '',
                'error'
            );
            limpiarInputs();
            return false;
        }
    } else {
        //alert("No se admite pin de tipo texto");
        //uso de swit alert para mensajes
        Swal.fire(
            'No se admite pin de tipo texto',
            '',
            'error'
        );
        limpiarInputs();
        return false;
    }
}
//comprobacion de nombre y contrasenia 
function iniciarSesion(pass) {

    if (pass == usuario[0].pin) {//validar nombre de usuario y contrasenia
        var saldo = 500.00;
        var transacciones = [];
        localStorage.setItem('Usuarios', JSON.stringify(usuario));
        localStorage.setItem('Saldo', JSON.stringify(saldo));
        localStorage.setItem('Transacciones', JSON.stringify(transacciones));
        
        console.log(localStorage.getItem('Usuarios'));
        console.log(localStorage.getItem('Saldo'));
        //console.log(localStorage.getItem('Trabasacciones','[]'));
        location.href = 'index.html';
    } else {
        //alert('Pin incorrecto');
        //uso de swit alert para mensajes
        Swal.fire(
            'Pin incorrecto',
            '',
            'question'
        )
        limpiarInputs();
    }
    //alert('Nombre: '+nombre+' Contra: '+pass);
}