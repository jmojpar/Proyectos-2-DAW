let operacion = "";
let operacionBorrar = "";
let arrayIngresos = [];
let arrayGastos = [];
let idValor = document.getElementById("valor");//recoger el elemento valor
let cajaValor = document.querySelector(".agregar_valor");
let saldoDisponible = totalGastos = totalIngresos = porcentajeTotal = 0;
let cajaDescripcion = document.getElementById("descripcion");
let mapObjetos = new Map();
let clave = 0;

//  actualizar el porcentage individual al añadir más gastos

cajaDescripcion.addEventListener("input",
    function () {
        validar(cajaDescripcion);
    }, false);

idValor.addEventListener("input",
    function () {
        validar(idValor);
    }, false);

// Formatear un número a moneda
const formatterEuro = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
})

//botones de agregar ingreso/gasto, cambia el fondo
function agregarIngGas(id) {
    let elemento = document.getElementById("agregar");
    switch (id) {
        case "hacer_ingreso":

            elemento.style.background = " linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(215,255,205,1) 48%)";

            operacion = "ingresos";
            break;

        case "hacer_gasto":

            elemento.style.background = " linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,205,207,1) 48%)";

            operacion = "gastos";
            break;

        default:
            break;
    }
}

//agregar a la caja de movimientos, un ingreso o gasto
function agregarDato() {

    if (saldoDisponible < cajaValor.value && operacion == "gastos") {
        createToast("error");
    }
    if (operacion != "") {
        let importe = document.getElementById("valor").value;
        let descripcion = document.getElementById("descripcion").value;
        let elemento = document.getElementById("agregar");
        elemento.style.background = "#f7f7f7"; //cambiar el fondo
        let objeto;//el objeto que vamos almacenar en el array ingreso/gasto

        if (operacion == "ingresos") {
            //crear objeto ingreso
            objeto = new Ingreso(importe, descripcion);
        } else {
            //crear objeto ingreso
            objeto = new Gasto(importe, descripcion);
        }

        //si no hay errores se creará el ingreso o gasto
        if (validar(idValor)) {


            let contenedorIngresos = document.getElementById("lista-" + operacion);//recoger el contenedor de ingresos
            let añadirIngGas = document.createElement("div");//crearla lista de ingresos (elemento limpiarEstilos)
            añadirIngGas.className = "elemento limpiarEstilos";//añadir clase

            //crear elemento para la descripcion
            let elementDescripcion = document.createElement("div");
            elementDescripcion.className = "elemento_descripcion";//añadir la clase de la descripción
            elementDescripcion.appendChild(document.createTextNode(objeto.descripcion));//añadir texto al div descripcion

            //crear div derecha limpiarEstilos
            let derLimpiarEstilos = document.createElement("div");
            derLimpiarEstilos.className = "derecha limpiarEstilos";

            //crear div elemento_valor
            let elementValor = document.createElement("div");
            elementValor.className = "elemento_valor";//añadir la clase del importe

            let elementPorcentaje = document.createElement("div");
            //añadir el valor dependiendo del tipo que se añade ingreso/gasto
            //agregar también un div para el porcentaje si fuera un gasto
            if (operacion == "ingresos") {
                arrayIngresos.push(objeto);// añadir al array el objeto
                elementValor.appendChild(document.createTextNode("+ " + objeto.importe + "€"));//añadir texto al div importe 
            } else {
                arrayGastos.push(objeto);//añadir al array el objeto
                elementValor.appendChild(document.createTextNode("- " + objeto.importe + "€"));//añadir texto al div importe
                elementPorcentaje.className = "elemento_porcentaje";

                let porcentaje = Math.trunc((objeto.importe * 100) / totalGastos);
                elementPorcentaje.appendChild(document.createTextNode(porcentaje + "%"));
            }

            mapObjetos.set(clave, objeto); // Mapeamos un objeto para tener un índice del mismo
            añadirIngGas.id = clave; // Id de cada operación
            clave++; // Aumentamos el índice para el siguiente objeto
            operaciones();//recalcular todos los valores

            //crear div eliminar
            let elementEliminar = document.createElement("div");
            elementEliminar.className = "elemento_eliminar";

            //crear botón eliminar
            let btnEliminar = document.createElement("button");
            btnEliminar.className = "elemento_eliminar--btn";
            btnEliminar.addEventListener("click", () => {

                añadirIngGas.remove();
                mapObjetos.delete(parseInt(añadirIngGas.id));

                operaciones();
                recalcular();
            }, false);

            //crear icono eliminar
            let iconEliminar = document.createElement("ion-icon");
            iconEliminar.name = "close-circle-outline";

            //añadir todos los elementos implementadas
            btnEliminar.appendChild(iconEliminar);//añadir el icono al boton
            elementEliminar.appendChild(btnEliminar);//añadir el boton al elemento eliminar

            //añadir el importe y el botón eliminar a derecha limpiarestilos
            derLimpiarEstilos.appendChild(elementValor);
            if (operacion == "gastos") {
                derLimpiarEstilos.appendChild(elementPorcentaje);
            }
            derLimpiarEstilos.appendChild(elementEliminar);

            //añadir la descripción y todo lo de la derecha a la caja ingreso
            añadirIngGas.appendChild(elementDescripcion);
            añadirIngGas.appendChild(derLimpiarEstilos);

            //añadir todo al contenedor padre
            contenedorIngresos.insertBefore(añadirIngGas, contenedorIngresos.children[0]);
        }

    }

    cajaDescripcion.value = "";
    idValor.value = "";
    operacionBorrar = operacion;
    operacion = "";
    recalcular();
}

//valida un elemento html
function validar(elemento) {
    saldoDisponible = trunc(saldoDisponible, 2);//truncar el número con 2 decimales

    if (cajaDescripcion.value != "") {
        cajaDescripcion.style.border = "1px solid lightgray";
        if (cajaValor.value > 0) {
            if (saldoDisponible < cajaValor.value && operacion == "gastos") {//comprobar si hay saldo suficiente para el gasto
                if (elemento.id == "valor") {
                    cajaValor.classList.add("temblor"); // Añadir la clase temblor con la animación
                }
                cajaValor.style.border = "1px solid red";
                return false
            } else {
                if (!elemento.checkValidity()) {
                    if (elemento.validity.valueMissing) {//valida que un campo requqerido este rellenado
                    } else if (elemento.validity.patternMismatch) {//valida el pattern del form
                    }
                    if (elemento.id == "valor") {
                        cajaValor.classList.add("temblor"); // Añadir la clase temblor con la animación
                    }
                    cajaValor.style.border = "1px solid red";
                    return false;
                } else {
                    if (elemento.id == "valor") {
                        cajaValor.classList.remove("temblor"); // Borra la clase temblor con la animación
                    }
                }

                elemento.style.border = "1px solid green";
                return true;
            }
        } else {
            if (elemento.id == "valor") {
                cajaValor.classList.add("temblor"); // Añadir la clase temblor con la animación
            }
            cajaValor.style.border = "1px solid red";
            return false;
        }
    } else {
        cajaDescripcion.style.border = "1px solid red";
    }

}

//calcula las operaciones necesarias de la página
function operaciones() {
    let ingresos = 0;
    let gastos = 0;

    // Recorremos el map de objetos y sacamos sus valores
    for (var [key, value] of mapObjetos) {
        if (value instanceof Ingreso) {
            ingresos += value.getImporte;
        } else {
            gastos += value.getImporte;
        }
    }

    totalIngresos = ingresos;
    totalGastos = gastos;
    porcentajeTotal = gastos > 0 ? Math.trunc((gastos * 100) / ingresos) : 0;
    saldoDisponible = ingresos - gastos;
    saldoDisponible = trunc(saldoDisponible, 2);//truncar el número con 2 decimales

    // Saldo disponible
    document.querySelector(".saldo_valor").innerHTML = `${formatterEuro.format(saldoDisponible)}`;

    // Total de ingresos
    document.querySelector(".saldo_ingreso--valor").innerHTML = `+ ${formatterEuro.format(totalIngresos)}`;

    // Total de gastos
    document.querySelector(".saldo_gasto--valor").innerHTML = `- ${formatterEuro.format(totalGastos)}`;

    // Porcentaje gastos
    document.querySelector(".saldo_gasto--porcentaje").innerHTML = `${porcentajeTotal} %`;
}

//recalcula los porcentajes y el
function recalcular() {
    // operaciones();
    let contenedorGastos = document.getElementById("lista-gastos");
    let tG = 0;

    //recorrer cada hijo de gastos para sacar el total de gastos
    for (let index = 0; index < contenedorGastos.children.length; index++) {

        let v = contenedorGastos.children[index].children[1].children[0].innerHTML;//valor del elemento (elemento_valor) de la caja de gastos
        let valorCaja = v.substring(2, v.length - 1);//recortar el valor ya que contiene (- , €) (- 10€)

        tG += Number(valorCaja); //total de gastos
    }

    //actualizar el porcentaje individual
    for (let index = 0; index < contenedorGastos.children.length; index++) {

        let v = contenedorGastos.children[index].children[1].children[0].innerHTML;//valor del elemento (elemento_valor) de la caja de gastos

        let valorCaja = v.substring(2, v.length - 1);//recortar el valor ya que contiene (- , €) (- 10€)

        let porcentajeIndividual = Math.trunc((Number(valorCaja) * 100) / Number(tG));//recalcular el porcentaje individual de los gastos sobre el total de gastos

        // Total de gastos
        document.querySelectorAll(".elemento_porcentaje")[index].innerHTML = porcentajeIndividual + "%";
    }
}

//trunca un número pasándole el número que queremos, más los decimales que queremos
function trunc(x, posiciones = 0) {
    let s = x.toString();
    let l = s.length;
    let decimalLength = s.indexOf('.') + 1 || s.indexOf(',') + 1 || "";
    let numStr = x;
    if (decimalLength == "") {
        return Number(numStr);
    }
    numStr = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
}

/*****************************funciones MAP()******************
/* map.set(clave, valor) así se introducen valores en el map
/* map.get(clave) – devuelve el valor de la clave.
/* map.delete(clave) – elimina el elemento con esa clave.
/* map.clear() – elimina todo de map.
/**************************************************************/

