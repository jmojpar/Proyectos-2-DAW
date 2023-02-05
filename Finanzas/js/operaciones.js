let operacion = "";

// Variables
let saldoDisponible = totalGastos = totalIngresos = porcentajeTotal = 0;
let porcentajeIndividual = 0;

// Formatear un número a moneda
const formatterEuro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
})


// Arrays de ejemplo
let arrayIngresos = [i1, i2, i3, i4, i5, i6];
let arrayGastos = [g1, g2, g3, g4, g5, g6];

function operaciones() {
    let ingresos = 0;
    let gastos = 0;
    // De pendiendo de la acción pasada devolveremos un valor u otro
    for (let i = 0; i < arrayIngresos.length; i++) {
        ingresos += arrayIngresos[i].getImporte;
    }

    for (let i = 0; i < arrayGastos.length; i++) {
        gastos += arrayGastos[i].getImporte;
    }

    totalIngresos = ingresos;
    totalGastos = gastos;
    porcentajeTotal = Math.trunc((gastos * 100) / ingresos);
    saldoDisponible = ingresos - gastos;

    // Saldo disponible
    document.querySelector(".saldo_valor").innerHTML = `+ ${formatterEuro.format(saldoDisponible)}`;

    // Total de ingresos
    document.querySelector(".saldo_ingreso--valor").innerHTML = `+ ${formatterEuro.format(totalIngresos)}`;

    // Total de gastos
    document.querySelector(".saldo_gasto--valor").innerHTML = `- ${formatterEuro.format(totalGastos)}`;

    // Porcentaje gastos
    document.querySelector(".saldo_gasto--porcentaje").innerHTML = `${porcentajeTotal} %`;
}


operaciones(); // Seteamos los valores iniciales

// Porcentage de cada gasto por indivicual con respecto del todal de gastos
document.querySelector(".elemento_porcentaje").innerHTML = `${porcentajeIndividual} %`;
