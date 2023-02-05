//crear elemento imagen
let img = document.createElement("img");

//funcion para aplicar efectos al LIKE (agrandar, aparece papanoel, desmarcar like)
function like(id, disLike) {

    //recoger el elemento del id
    let imagen = document.getElementById(id);
    //convertir a string el id
    let str = String(imagen.id);

    //conseguir el número de la imagen corresponiente (img*L/D) siendo asterisco el número a buscar
    let indexFigura = parseInt(str.charAt(3));

    // console.log(disLike);

    if (imagen.getAttribute('src') == "img/web/corazonS.png") {//comprobar que imagen hay en el like

        //cambiar imagen
        imagen.src = "img/web/corazonP.png";

        //transición
        imagen.style.transition = "0.3";
        //aumenta el tamaño de la imagen
        imagen.style.transform = "scale(1.3)";

        //reponer la imagen del dislike, para que no puedan estar los dos botones pulsados a la vez
        disLike.src = "img/web/corazonRotoS.png";
        //reescalar el disLike
        disLike.style.transform = "scale(1.0)";

        //CREAR Y AÑADIR ELEMENTO PAPÁ NOEL

        //estilo al elemento img
        img.style.width = "80px";
        img.style.height = "80px";
        img.style.position = "absolute";
        img.src = "img/web/papa-noel.png";
        //recoger id contenedor
        let idContenedor = document.getElementsByClassName("figura")[indexFigura - 1];
        //añadir la imagen a la figura
        idContenedor.appendChild(img, id);

        //borrar la imagen a los 2 segundos
        setTimeout(() => {
            //borrar imagen papánoel
            img.remove();
        }, 2000);

    } else {

        //transición
        imagen.style.transition = "0.3";
        //aumenta el tamaño de la imagen
        imagen.style.transform = "scale(1.0)";
        //cambiar imagen
        imagen.src = "img/web/corazonS.png";

        //borrar imagen papánoel
        img.remove();

    }

}


//funcion para agrandar el DISLIKE, haga aparecer a papanoel triste y cambiar el corazon
function disLike(id, like) {

    //recoger el elemento del id
    let imagen = document.getElementById(id);
    //convertir a string el id
    let str = String(imagen.id);

    //conseguir el número de la imagen corresponiente (img*L/D) siendo asterisco el número a buscar
    let indexFigura = parseInt(str.charAt(3));

    // console.log(indexCaption);
    if (imagen.getAttribute('src') == "img/web/corazonRotoS.png") {//comprobar que imagen hay en el like

        //cambiar imagen
        imagen.src = "img/web/corazonRotoP.png";

        //transición
        imagen.style.transition = "0.3";
        //aumenta el tamaño de la imagen
        imagen.style.transform = "scale(1.3)";

        //reponer la imagen del like, para que no puedan estar los dos botones pulsados a la vez
        like.src = "img/web/corazonS.png";
        //reescalar el like
        like.style.transform = "scale(1.0)";

        //CREAR Y AÑADIR ELEMENTO PAPÁ NOEL

        //estilo al elemento img
        img.style.width = "80px";
        img.style.height = "80px";
        img.style.position = "absolute";
        img.src = "img/web/papa-noel-triste.png";
        //recoger id contenedor
        let idContenedor = document.getElementsByClassName("figura")[indexFigura - 1];
        //añadir la imagen a la figura
        idContenedor.appendChild(img, id);

        //borrar la imagen a los 2 segundos
        setTimeout(() => {
            //borrar imagen papánoel
            img.remove();
        }, 2000);


    } else {

        //transición
        imagen.style.transition = "0.3";
        //aumenta el tamaño de la imagen
        imagen.style.transform = "scale(1.0)";
        //cambiar imagen
        imagen.src = "img/web/corazonRotoS.png";

        //borrar imagen papánoel
        img.remove();

    }
}