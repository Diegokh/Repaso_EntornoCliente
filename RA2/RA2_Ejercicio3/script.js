var divR = document.getElementById("resultado");

alert("Vas a convertir los Euros en Dólares")

var cantidad = parseFloat(prompt("Inserte la cantidad"));

let dolares = cantidad * 1.2

divR.innerHTML = dolares.toString()
