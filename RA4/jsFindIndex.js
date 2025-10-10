const array = [-1, 0, 1, 2, 3, 4, 5];
const boton = document.getElementById('btnBuscar');

function recorrerArray(){
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('result');
    let posicion = -1;

    for(let index = 0; index < array.length; index++) {
        if(array[index] === numero){
            posicion = index;
            break;
        }
    }

    if(posicion !== -1) {
        resultado.innerHTML = `El número ${numero} esta en la posicion ${posicion}.`;
    } else {
        resultado.innerHTML = `El número ${numero} no esta en el array.`;
    }
}

boton.addEventListener("click", recorrerArray);
