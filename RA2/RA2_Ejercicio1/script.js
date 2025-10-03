
const evento = document.getElementById("boton");


alert("Inserta el radio")
function calcularRadio(){
    let radio = parseInt(document.getElementById("radio").value);
    let area =Math.PI * Math.pow(radio,2)

    document.getElementById("resultado").innerHTML = `${area}`;
}


 evento.addEventListener("click", calcularRadio);