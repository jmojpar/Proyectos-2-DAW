let imagenes = ["imgs/1sol.png", "imgs/2mercury.png", "imgs/3venus.png", "imgs/4tierra.png", "imgs/5namek.png", "imgs/6marte.jpg", "imgs/7jupiter.png", "imgs/8saturno.png", "imgs/9urano.png", "imgs/10neptuno.png"];
let contador = 0;

// Función que cambia los planetas
function carrusel(accion) {
    if (accion == "avanzar") {
        // Tenemos en cuenta si el usuario ya está mirando el último planeta
        if (contador == 8) {
            //  Incrementamos en uno el ontador para la siguiente imagen
            contador += 1;

            // Imagenes a mostrar
            document.getElementById("planetaIzq").src = imagenes[0];
            document.getElementById("planetaCentro").src = imagenes[contador];
            document.getElementById("planetaDer").src = imagenes[contador - 1];

        } else if (contador == 9) {
            contador = 0;

            // Imagenes a mostrar
            document.getElementById("planetaIzq").src = imagenes[contador + 1];
            document.getElementById("planetaCentro").src = imagenes[contador];
            document.getElementById("planetaDer").src = imagenes[imagenes.length - 1];
        } else {
            //  Incrementamos en uno el ontador para la siguiente imagen
            contador += 1;

            // Imagenes a mostrar
            document.getElementById("planetaIzq").src = imagenes[contador + 1];
            document.getElementById("planetaCentro").src = imagenes[contador];
            if (contador == 0) {
                document.getElementById("planetaDer").src = imagenes[imagenes.length - 1];
            } else {
                document.getElementById("planetaDer").src = imagenes[contador - 1];
            }
        }
    } else if (accion == "atrasar") {
        if (contador == 1) {
            // Restamos una posicion al contador
            contador -= 1;

            // Imagenes a mostrar
            document.getElementById("planetaIzq").src = imagenes[contador + 1];
            document.getElementById("planetaCentro").src = imagenes[contador];
            document.getElementById("planetaDer").src = imagenes[imagenes.length - 1];

        } else if (contador == 0) {
            contador = 9;

            // Imagenes a mostrar
            document.getElementById("planetaIzq").src = imagenes[0];
            document.getElementById("planetaCentro").src = imagenes[contador];
            document.getElementById("planetaDer").src = imagenes[contador - 1];

        } else {
            // Restamos una posicion al contador
            contador -= 1;

            // Imagenes a mostrar
            document.getElementById("planetaIzq").src = imagenes[contador + 1];
            document.getElementById("planetaCentro").src = imagenes[contador];
            document.getElementById("planetaDer").src = imagenes[contador - 1];
        }

    }
}


//imagenes estrella
let es1 = document.getElementById("estrella1");
let es2 = document.getElementById("estrella2");
let es3 = document.getElementById("estrella3");
let es4 = document.getElementById("estrella4");

//recoger el ancho y alto de la página
let ancho = screen.width;
let alto = screen.height;

//cada segundo se mostrará las estrellas en una posición random
function moverEstrellas() {

    setInterval(() => {
        //habilitar las imagenes
        es1.style.type = "visible";

        es1.style.setProperty('left', numRandomAncho());
        es1.style.setProperty('top', numRandomAlto());


    }, 1000);

    setInterval(() => {
        //habilitar las imagenes
        es2.style.type = "visible";

        es2.style.setProperty('left', numRandomAncho());
        es2.style.setProperty('top', numRandomAlto());

    }, 1500);

    setInterval(() => {
        //habilitar las imagenes
        es3.style.type = "visible";

        es3.style.setProperty('left', numRandomAncho());
        es3.style.setProperty('top', numRandomAlto());

    }, 2000);

    setInterval(() => {
        //habilitar las imagenes
        es4.style.type = "visible";

        es4.style.setProperty('left', numRandomAncho());
        es4.style.setProperty('top', numRandomAlto());

    }, 500);
}
moverEstrellas();

//crear un parráfo y añadirlo al planeta que esta seleccionado en el centro
let parrafo = document.createElement("p");

//crear el texto que vamos añadir
let texto = "";

//añade la información del planeta si pasa el ratón por encima
function infoPlanetaOver() {
    let infoPlaneta = [`El Sol (del latín sol, solis, ‘dios Sol invictus’ o ‘sol’, 
        a su vez de la raíz protoindoeuropea sauel-, ‘brillar’)
        4​ es una estrella de tipo-G de la secuencia principal y 
        clase de luminosidad V que se encuentra en el centro del sistema solar y 
        constituye la mayor fuente de radiación electromagnética de este sistema planetario.`,
        `Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño. 
    Forma parte de los denominados planetas interiores y 
    carece de satélites naturales al igual que Venus. 
    Se conocía muy poco sobre su superficie hasta que fue enviada la sonda planetaria Mariner 10 y 
    se hicieron observaciones con radar y radiotelescopios.`,
        `Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y 
    el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte. 
    Al igual que Mercurio, carece de satélites naturales.`,
        `La Tierra (del latín Terra,17​ deidad romana equivalente a Gea, 
        diosa griega de la feminidad y la fecundidad) 
        es un planeta del sistema solar que gira alrededor de su estrella 
        —el Sol— en la tercera órbita más interna.`,
        `El planeta Namek (ナメック星 Namekkusei?) es un planeta ficticio de la serie de manga y anime Dragon Ball. 
    Su nombre proviene de la palabra japonesa para Babosa (ナメクジNamekuji?).`,
        `Marte es el cuarto planeta en orden de distancia al Sol y 
el segundo más pequeño del sistema solar, después de Mercurio. 
Recibió su nombre en homenaje al dios de la guerra de la mitología romana 
(Ares en la mitología griega)`,
        `Júpiter es el planeta más grande del sistema solar y 
el quinto en orden de lejanía al Sol.3
Es un gigante gaseoso que forma parte de los denominados planetas exteriores.`,
        `Saturno es el sexto planeta del sistema solar contando desde el Sol, 
    el segundo en tamaño y masa después de Júpiter y 
    el único con un sistema de anillos visible desde la Tierra.`,
        `Urano es el séptimo planeta del sistema solar, 
el tercero de mayor tamaño, y el cuarto más masivo. 
Se llama así en honor de la divinidad griega del cielo Urano 
(del griego antiguo Οὐρανός),`,
        `Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar. 
Forma parte de los denominados planetas exteriores, 
y dentro de estos, es uno de los gigantes helados`];


    //añadir estilo al párrafo
    parrafo.style.backgroundColor = "red";
    parrafo.style.fontFamily = "Arial, Helvetica, sans-serif;";
    parrafo.style.fontWeight = "bold";
    parrafo.style.padding = "2%";
    parrafo.style.width = "350px";
    parrafo.style.height = "200px";
    parrafo.style.fontSize = "1.1em";
    parrafo.style.border = "3px solid rgb(255, 255, 255)";
    parrafo.style.borderRadius = "6px";
    parrafo.style.color = "rgb(255, 255, 255)";
    parrafo.style.backgroundColor = "rgba(13, 3, 158, 0.3)";


    //recoger la id donde poner el texto
    let id = document.getElementById("info");

    //añadir el texto dependiendo del planeta con el contador
    texto = document.createTextNode(infoPlaneta[contador]);

    //añadir texto al parrafo
    parrafo.appendChild(texto);

    //añadir el párrafo en el id de INFO
    id.appendChild(parrafo, id.children[2]);
}

//borra la informacion del planeta si deja de tener el ratón por encima
function infoPlanetaOut() {
    parrafo.remove();
    texto.remove();
}

function numRandomAlto() {
    //valor random del alto
    let altoRandom = Math.floor(Math.random() * alto);
    altoRandom = altoRandom + 'px';

    return altoRandom;
}

function numRandomAncho() {
    //valor random del ancho
    let anchoRandom = Math.floor(Math.random() * ancho);
    anchoRandom = anchoRandom + 'px';

    return anchoRandom;
}
