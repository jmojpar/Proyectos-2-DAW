

 /******************************************************************
************************MANIPULACIÓN DE CONTENIDOS*******************
*******************************************************************/

//textContent
function cambiaContenidoSinEstilos(){
	console.log(document.getElementById("pSol").textContent);
	document.getElementById("pSol").textContent = "Soy el <strong> Sol </Strong>";
	console.log(document.getElementById("pSol").textContent);
}

function cambiaContenidoConEstilos(){
	console.log(document.getElementById("pSol").innerHTML);
	document.getElementById("pSol").innerHTML = "Soy el <strong> Sol </Strong>";
	console.log(document.getElementById("pSol").innerHTML);
}




/******************************************************************
************************MODIFICAR CSS*******************************
*******************************************************************/

//style
function cambiarEstilos(){
	let parrafo = document.getElementsByTagName("p")[0];
	parrafo.style.color = "red";
	parrafo.style.border = "3px solid black";
	parrafo.style.backgroundColor ="#CCC";

	let parrafo2 = document.getElementsByTagName("p")[1];
	parrafo2.style.color = "blue";
	parrafo2.style.borderBottom = "2px solid black";
	
}


