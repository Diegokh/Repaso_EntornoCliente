import { checkRequired, cargarModulos, validarDNI, validarEdad, validarEmail, validarRepites } from './Validaciones.js';
import { RegistroAlumnos, Alumno } from './RegistroAlumnos.js';

// Instancia de RegistroAlumnos
const registro = new RegistroAlumnos();

// Elementos del DOM
const nombre = document.querySelector('#nombre');
const dni = document.querySelector('#dni');
const direccion = document.querySelector('#direccion');
const curso = document.querySelector('#curso');
const edad = document.querySelector('#edad');
const fecha = document.querySelector('#fecha');
const email = document.querySelector('#email');
const repitesInputs = document.querySelectorAll('input[name="repites"]');
const modulo = document.querySelector('#modulo');
const btnGrabar = document.querySelector('#btn-grabar');
const btnAlumnos1 = document.querySelector('#btn-1smr')


curso.addEventListener('change',() => cargarModulos(curso.value,modulo))

//Validacion del formulario

function validarFormulario(event){
    event.preventDefault()
    let valido = true

    if (!checkRequired(nombre)) valido = false;
    if (!checkRequired(dni)) valido = false;
    if (!checkRequired(direccion)) valido = false
    if(!checkRequired(curso)) valido = false
    if(!checkRequired(edad)) valido = false
    if (!checkRequired(fecha)) valido = false;
    if (!checkRequired(email)) valido = false;

    if(!validarDNI(dni.value, document.querySelector('#error-dni'))) valido = false;
    if (!validarEdad(edad.value, document.querySelector('#error-edad'))) valido = false;
    if (!validarEmail(email.value, document.querySelector('#error-email'))) valido = false;
    if (!validarRepites(document.querySelectorAll('input[name="repites"]:checked'))) valido = false;



    if(!valido) return

    let duplicado = false;

    for(let i = 0 ; i < registro.alumnos.length ; i++){
        if(registro.alumnos[i].dni === dni.value){
            alert("Ya existe un alumno con el mismo DNI")
            duplicado = true
            break;
        }

        if (registro.alumnos[i].email === email.value) {
        alert("Ya existe un alumno con el mismo Email");
        duplicado = true;
        break;
    }
    }

    if (duplicado) return;

    if(valido){
        const repitesSeleccionado = document.querySelector('input[name="repites"]:checked').value;

        const nuevoAlumno = new Alumno(
            nombre.value,
            dni.value,
            direccion.value,
            curso.value,
            parseInt(edad.value),
            fecha.value,
            email.value,
            repitesSeleccionado,
            modulo.innerHTML
        );

        registro.agregarAlumno(nuevoAlumno)
        alert('Alumno agregado correctamente!');
    }
}



btnGrabar.addEventListener('click', validarFormulario);




const btnAlumnos = document.querySelector('#btn-alumnos');

btnAlumnos.addEventListener('click', () => {
    console.log("Alumnos actualmente registrados:");
    console.log(registro.listarAlumnos());
});




const btnLimpiar = document.querySelector('#btn-limpiar');



function limpiar(){

    nombre.value = ""
    dni.value = ""
    direccion.value = ""
    curso.value = ""
    edad.value = ""
    curso.value = ""
modulo.innerHTML = ""
    fecha.value = ""
    email.value = ""
}





    btnLimpiar.addEventListener('click', limpiar)

btnAlumnos1.addEventListener('click' , (event) =>{
    event.preventDefault();
     const lista = registro.listarAlumnos1Smr();
    if(lista.length === 0){
        console.log("No hay alumnos de 1ºSMR")
    }else{
        console.log("Alumnos de 1ºSMR" , lista)
    }

})

const btnMayor = document.querySelector('#btn-mayor');

btnMayor.addEventListener('click', (event) => {
    event.preventDefault();

    const mayor = registro.alumnoMayor();

    if (!mayor) {
        console.log("No hay alumnos registrados");
    } else {
        console.log("Alumno mayor:" , mayor);
    }
});



console.log("Alumnos antes de pulsar mayor:", registro.listarAlumnos());
