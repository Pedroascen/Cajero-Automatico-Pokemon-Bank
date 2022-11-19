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
    document.getElementById('txtUsuario').innerHTML = nombreUsuario;
    document.getElementById('txtNoCuenta').innerHTML = noCuenta;
}
//funcion para validar monto ingresado
function validarMonto(value) {
    if (!value == '') {//validamos  que el campo no este vacio
        if (!isNaN(value)) {//se valida que no lleve texto
            if (value > 0) {//se valida que no sea menor a cero
                return true;
            } else {
                swal({
                    title: "El monto ingresado es invalido!!!",
                    text: "Posiblemente es un valor de negativo.",
                    icon: "error",
                });
                return false;
            }

        } else {
            swal({
                title: "El monto ingresado es invalido!!!",
                text: "Posiblemente contiene un valor de tipo texto.",
                icon: "error",
            });
            return false;
        }
    } else {
        swal({
            title: "No ingreso monto!!!",
            text: "",
            icon: "error",
        });
        return false;
    }
}
//metodo para redondear numeros +.00
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}
//#1 metodo para depositar monto
function depositar() {
    swal({
        title: "Monto a depositar",
        content: 'input'
    })
        .then((value) => {
            if (validarMonto(value) == true) {//validamos el monto ingresado
                //consultar saldo actual
                var saldo = JSON.parse(localStorage.getItem('Saldo'));
                monto = parseFloat(value);
                saldo = parseFloat(saldo);
                if (monto > saldo) {//se valida la cantidad a pagar
                    swal({
                        title: "El monto es mayor al saldo diponible!!!",
                        text: "",
                        icon: "error",
                    });
                    return false;
                }
                var nuevo_saldo = saldo + monto;
                nuevo_saldo = financial(nuevo_saldo);
                localStorage.setItem('Saldo', JSON.stringify(nuevo_saldo));//guardando nuevo saldo en el localStorage
                swal({
                    title: "Transaccion exitosa!!!",
                    text: "",
                    icon: "success",
                });
                //alert("Transaccion exitosa");
            } else {
                validarMonto(value);
            }
        });
}
//#2 metodo para retirar monto
function retirar() {
    swal({
        title: "Monto a debitar",
        content: 'input'
    })
        .then((value) => {
            if (validarMonto(value) == true) {//validamos el monto ingresado
                //consultar saldo actual
                var saldo = JSON.parse(localStorage.getItem('Saldo'));
                monto = parseFloat(value);
                saldo = parseFloat(saldo);
                if (monto > saldo) {//se valida la cantidad a pagar
                    swal({
                        title: "El monto es mayor al saldo diponible!!!",
                        text: "",
                        icon: "error",
                    });
                    return false;
                }
                var nuevo_saldo = saldo - monto;
                nuevo_saldo = financial(nuevo_saldo);
                localStorage.setItem('Saldo', JSON.stringify(nuevo_saldo));//guardando nuevo saldo en el localStorage
                swal({
                    title: "Transaccion exitosa!!!",
                    text: "",
                    icon: "success",
                });
                //alert("Transaccion exitosa");
            } else {
                validarMonto(value);
            }
        });
}
//#3 metodo para consultar monto
function consulta() {
    var saldo = JSON.parse(localStorage.getItem('Saldo'));
    // alert(saldo);
    swal({
        title: "Su saldo actual: $" + saldo,
        text: "",
        icon: "success"
    });
}
//#4 metodo para realizar pago de servicios
function pago() {
    swal({
        title: "Seleccione un servicio",
        buttons: {
            
            electricidad: {
                text: "Electricidad",
                value: "electricidad",
            },
            agua: {
                text: "Agua",
                value: "agua",
            },
            telefono: {
                text: "Telefono",
                value: "telefono",
            },
            internet: {
                text: "Internet",
                value: "internet",
            }
        },
    })
        .then((value) => {
            switch (value) {
                case "electricidad":
                    pago_electricidad();
                    break;
                case "agua":
                    pago_agua();
                    break;
                case "telefono":
                    pago_telefono();
                    break;
                case "internet":
                    pago_internet();
                    break;

                default:
                    swal({
                        title: "No selecciono ninguno!!!",
                        text: "",
                        icon: "info",
                    });
            }
        });
}
//funciones para opcion de pago
function pago_electricidad() {
    swal({
        title: "Monto para servicio de electricidad",
        content: 'input'
    })
        .then((value) => {
            if (validarMonto(value) == true) {//validamos el monto ingresado
                //consultar saldo actual
                var saldo = JSON.parse(localStorage.getItem('Saldo'));
                monto = parseFloat(value);
                saldo = parseFloat(saldo);
                if (monto > saldo) {//se valida la cantidad a pagar
                    swal({
                        title: "El monto es mayor al saldo diponible!!!",
                        text: "",
                        icon: "error",
                    });
                    return false;
                }
                var nuevo_saldo = saldo - monto;
                nuevo_saldo = financial(nuevo_saldo);
                localStorage.setItem('Saldo', JSON.stringify(nuevo_saldo));
                swal({
                    title: "Transaccion exitosa!!!",
                    text: "",
                    icon: "success",
                });
                //alert("Transaccion exitosa");
            } else {
                validarMonto(value);
            }
        });
}
function pago_agua() {
    swal({
        title: "Monto para servicio de Agua",
        content: 'input'
    })
        .then((value) => {
            if (validarMonto(value) == true) {//validamos el monto ingresado
                //consultar saldo actual
                var saldo = JSON.parse(localStorage.getItem('Saldo'));
                monto = parseFloat(value);
                saldo = parseFloat(saldo);
                if (monto > saldo) {//se valida la cantidad a pagar
                    swal({
                        title: "El monto es mayor al saldo diponible!!!",
                        text: "",
                        icon: "error",
                    });
                    return false;
                }
                var nuevo_saldo = saldo - monto;
                nuevo_saldo = financial(nuevo_saldo);
                localStorage.setItem('Saldo', JSON.stringify(nuevo_saldo));//guardando nuevo saldo en el localStorage
                swal({
                    title: "Transaccion exitosa!!!",
                    text: "",
                    icon: "success",
                });
                //alert("Transaccion exitosa");
            } else {
                validarMonto(value);
            }
        });
}
function pago_telefono() {
    swal({
        title: "Monto para servicio de Telefonía",
        content: 'input'
    })
        .then((value) => {
            if (validarMonto(value) == true) {//validamos el monto ingresado
                //consultar saldo actual
                var saldo = JSON.parse(localStorage.getItem('Saldo'));
                monto = parseFloat(value);
                saldo = parseFloat(saldo);
                if (monto > saldo) {//se valida la cantidad a pagar
                    swal({
                        title: "El monto es mayor al saldo diponible!!!",
                        text: "",
                        icon: "error",
                    });
                    return false;
                }
                var nuevo_saldo = saldo - monto;
                nuevo_saldo = financial(nuevo_saldo);
                localStorage.setItem('Saldo', JSON.stringify(nuevo_saldo));//guardando nuevo saldo en el localStorage
                swal({
                    title: "Transaccion exitosa!!!",
                    text: "",
                    icon: "success",
                });
                //alert("Transaccion exitosa");
            } else {
                validarMonto(value);
            }
        });
}
function pago_internet() {
    swal({
        title: "Monto para servicio de internet",
        content: 'input'
    })
        .then((value) => {
            if (validarMonto(value) == true) {//validamos el monto ingresado
                //consultar saldo actual
                var saldo = JSON.parse(localStorage.getItem('Saldo'));
                monto = parseFloat(value);
                saldo = parseFloat(saldo);
                if (monto > saldo) {//se valida la cantidad a pagar
                    swal({
                        title: "El monto es mayor al saldo diponible!!!",
                        text: "",
                        icon: "error",
                    });
                    return false;
                }
                var nuevo_saldo = saldo - monto;
                nuevo_saldo = financial(nuevo_saldo);
                localStorage.setItem('Saldo', JSON.stringify(nuevo_saldo));//guardando nuevo saldo en el localStorage
                swal({
                    title: "Transaccion exitosa!!!",
                    text: "",
                    icon: "success",
                });
                //alert("Transaccion exitosa");
            } else {
                validarMonto(value);
            }
        });
}
//cerrar sesion
function salir() {
    localStorage.removeItem('Usuarios');
    location.href = 'login.html';
}