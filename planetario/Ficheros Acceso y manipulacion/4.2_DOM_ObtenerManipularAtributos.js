

 /******************************************************************
************************MANIPULACIÓN DE ATRIBUTOS*******************
*******************************************************************/

//getAttribute y hasAttribute
function verAtributos(){
	//let listadoAtributosTabla = document.querySelectorAll("li");
	let listadoAtributosTabla = document.getElementsByTagName("li");
	for (let i of listadoAtributosTabla ){
		if (i.hasAttribute("class")){
			console.log(`${i.innerHTML}: ${i.getAttribute("class")}`);
		}
	}
}

//setAttribute y className
function cambiarAtributo(){
	//let parrafo = document.getElementsByClassName("tuClase")[0];
	let parrafo = document.getElementById("p4");
	parrafo.setAttribute("class","miClase");
	document.getElementById("p5").className = "otraClase";
}

//toggleAttribute 
function onOffAtributo(){
	let parrafo5 = document.getElementById("p5");
	parrafo5.classList.toggle("transform");
	let parrafo = document.getElementsByClassName("tuClase")[0];
	parrafo.classList.toggle("miClase");
}

//removeAttribute 
function borrarAtributos(){
	for (let i = 0; i<document.getElementsByTagName("p").length; i++){
		document.getElementsByTagName("p")[i].removeAttribute("class");
	}
	/*let parrafo = document.getElementsByClassName("miClase")[1];
	parrafo.removeAttribute("class");
	alert(parrafo.hasAttribute("class"));*/
}
	

//classList
function verClases(){
	let parrafo6 = document.getElementById("p6");
	for(let clase of parrafo6.classList){
		console.log(clase);
	}
}

















          

