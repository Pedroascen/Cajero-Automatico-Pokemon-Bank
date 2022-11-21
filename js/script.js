//verificando los datos del localStorage
if (localStorage.getItem('Transacciones') != '[]') {
    //si existen transacciones se envian a los metodos para generar graficos
    var transacciones = JSON.parse(localStorage.getItem('Transacciones'));
    cargarGraficoIngresos(transacciones);
    cargarGraficoEgresos(transacciones);
    cargarGraficoPagos(transacciones);
} else {
    console.log('No hay datos que mostrar.');
}
//funcion para cargar grafico de ingresos
function cargarGraficoIngresos(transacciones) {
    let fecha = [];
    let monto = [];
    for (let i = 0; i < transacciones.length; i++) {
        if (transacciones[i].tipo == 1) {
            fecha.push(transacciones[i].fecha);
            monto.push(parseFloat(transacciones[i].monto));
            // Obtener una referencia al elemento canvas del DOM
            const $grafica = document.querySelector("#graficaIngresos");
            // Las etiquetas son las que van en el eje X. 
            const etiquetas = fecha;

            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datosVentas2020 = {
                label: "Ingresos por transaccion",
                data: monto, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                borderWidth: 1,// Ancho del borde
            };
            new Chart($grafica, {
                type: 'line',// Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datosVentas2020,
                        // Aquí más datos...
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                }
            });
        }
    }
}
//funcion para cargar grafico de egresos
function cargarGraficoEgresos(transacciones) {
    let fecha = [];
    let monto = [];
    for (let i = 0; i < transacciones.length; i++) {
        if (transacciones[i].tipo == 2) {
            fecha.push(transacciones[i].fecha);
            monto.push(parseFloat(transacciones[i].monto));
            // Obtener una referencia al elemento canvas del DOM
            const $grafica = document.querySelector("#graficaEgresos");
            // Las etiquetas son las que van en el eje X. 
            const etiquetas = fecha;

            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datosVentas2020 = {
                label: "Egresos por transaccion",
                data: monto, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                borderWidth: 1,// Ancho del borde
            };
            new Chart($grafica, {
                type: 'bar',// Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datosVentas2020,
                        // Aquí más datos...
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                }
            });
        }
    }
}
//funcion para cargar grafico de pagos
function cargarGraficoPagos(transacciones) {
    let descripcion = [];
    let monto = [];
    for (let i = 0; i < transacciones.length; i++) {
        if (transacciones[i].tipo == 3) {
            descripcion.push(transacciones[i].descripcion);
            monto.push(parseFloat(transacciones[i].monto));
            // Obtener una referencia al elemento canvas del DOM
            const $grafica = document.querySelector("#graficaPagos");
            // Las etiquetas son las que van en el eje X. 
            const etiquetas = descripcion;

            // Podemos tener varios conjuntos de datos. Comencemos con uno
            const datosVentas2020 = {
                label: "Monto por pago",
                data: monto, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
                borderWidth: 1,// Ancho del borde
            };
            new Chart($grafica, {
                type: 'bar',// Tipo de gráfica
                data: {
                    labels: etiquetas,
                    datasets: [
                        datosVentas2020,
                        // Aquí más datos...
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                    },
                }
            });
        }
    }
}

