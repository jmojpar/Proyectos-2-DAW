let idGenero = "";
let imagen = document.querySelectorAll(".img");


document.querySelector(".combo").addEventListener("click", (e) => {
    document.querySelector(".forma_pago").classList.toggle("oculto");
    document.querySelector(".combo").classList.toggle("gira");
})
let li = document.querySelectorAll(".forma_pago li");

li.forEach(element => {
    element.addEventListener("click", (e) => {
        // Sustituimos el contenido de combo por nuestro <i>
        document.querySelector(".combo p").innerHTML = element.innerHTML;

        // Contraemos el despegable y volvemos a girar la flecha
        document.querySelector(".forma_pago").classList.toggle("oculto");
        document.querySelector(".combo").classList.toggle("gira");

        //recoger el id para cambiar las imágenes
        idGenero = element.querySelector("p").id ;
        
        //cambiar las imágenes de la página
        for (let index = 0; index < 8; index++) {
            imagen[index].src = `img/${idGenero}/${idGenero} (${index + 1}).jpg`;
            console.log(`img/${idGenero}/${idGenero} (${index + 1}).jpg`);
        }
    })
});
