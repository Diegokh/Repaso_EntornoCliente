let divR = document.getElementById("resultado")

alert("Media de las notas")

let not1 = parseFloat(prompt("Inserte la primera nota"));
let not2 = parseFloat(prompt("Inserte la segunda nota"));
let not3 = parseFloat(prompt("Inserte la tercera nota"));

let notaMedia = (not1 + not2 + not3) / 3;

divR.innerHTML = `La nota 1 es ${not1}, la nota 2 es ${not2} , la nota 3 es ${not3} y la media es ` + notaMedia.toString()