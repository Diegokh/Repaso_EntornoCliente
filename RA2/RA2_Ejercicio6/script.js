
const boton = document.getElementById("btnEnviar");
const divResultado = document.getElementById("resultado");



function compararNumeros(){
    let numero1 = parseInt(document.getElementById("num1").value);
    let numero2 = parseInt(document.getElementById("num2").value);
    document.write("El numero " + numero1.toFixed() + " es menor que " + numero2.toFixed() + "--->" + (numero1 < numero2))
}




boton.addEventListener("click" , compararNumeros);