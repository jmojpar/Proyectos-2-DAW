for (let i = 0; i < 200; i++) {
    addElement();
}

function addElement() {
    // crea un nuevo div
    let newDiv = document.createElement("div");
    newDiv.className = "snow";

    // añade el elemento creado y su contenido al DOM a la cabecera
    let cabecera = document.getElementById("cabecera");

    cabecera.appendChild(newDiv);
}

// Con ésto hacemos la imagen más pequeña y la opacamos al hacer scroll
window.addEventListener("scroll", (e) => {
    document.querySelector(".cabecera").style.backgroundSize = 190 - (window.scrollY / 10) + "%";
    document.querySelector(".cabecera").style.opacity = 100 - (window.scrollY/10) + "%";
});
