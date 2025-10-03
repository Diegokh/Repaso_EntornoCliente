let numero1 = Number(document.getElementById("num1").value);
let numero2 = Number(document.getElementById("num2").value);
const boton = document.getElementById("btnEnviar");
const divResultado = document.getElementById("resultado");


function compararNumeros(){
    event.preventDefault()
    document.write("El numero " + numero1.toString() + " es menor que " + numero2.toString() + "--->" + (numero1 < numero2))
}










boton.addEventListener("click" , compararNumeros);