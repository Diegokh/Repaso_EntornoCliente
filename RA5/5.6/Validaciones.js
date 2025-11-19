//Validacion de formulario


function checkRequired(objeto){

    const error = document.querySelector('#error-' + objeto.id)

    //Quito los espacios

    if(!objeto.value.trim()){
        objeto.style = 'border: 2px solid red';
        error.innerHTML = `El campo ${objeto.name} es obligatorio`
        return false
    }else{
        objeto.style = "";
        error.innerHTML = "";
        return true
    }
}

const btnGrabar = document.querySelector('#btn-grabar')
//const formulario = document.querySelector('#form');

function validar(){

    event.preventDefault()

    let nombre = document.querySelector('#nombre')
    let dni = document.querySelector('#dni')
    let direccion = document.querySelector('#direccion')
    let curso = document.querySelector('#curso')
    let edad = document.querySelector('#edad');
    let repites = document.querySelectorAll('input[name="repites"]:checked')
    let fecha = document.querySelector('#fecha')
    let email = document.querySelector('#email')

    let valido = true;

    if(checkRequired(nombre) && checkRequired(dni) && checkRequired(direccion) && checkRequired(curso) && checkRequired(edad) &&  checkRequired(fecha) && checkRequired(email)){
        valido = true
    }else{
        valido = false
    }

    if(repites.length === 0){
        alert("Debes seleccionar si repites o no")
        valido = false
    }else{
        valido = true
    }


}

    btnGrabar.addEventListener('click', validar)