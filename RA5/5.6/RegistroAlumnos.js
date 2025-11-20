//CLASE PARA MATRICULAR ALUMNOS

export class RegistroAlumnos{

    constructor(){
        this.alumnos = []
    }

    agregarAlumno(alumno){
        this.alumnos.push(alumno)
    }

    listarAlumnos(){
        return this.alumnos
    }

    listarAlumnos1Smr() {
    let alumnos1smr = [];

    for (let i = 0; i < this.alumnos.length; i++) {
        if (this.alumnos[i].curso === '1smr') {
            alumnos1smr.push(this.alumnos[i]);
        }
    }

    return alumnos1smr;
}

alumnoMayor(){

    let alumnoMayor = this.alumnos[0]

    for(let i = 1; i < this.alumnos.length; i++){
        if (this.alumnos[i].edad > alumnoMayor.edad) {
            alumnoMayor = this.alumnos[i];
        }
    }
    return alumnoMayor;
}

}







export class Alumno{
    constructor(nombre, dni, direccion, curso, edad, fecha, email, repites, modulo) {
        this.nombre = nombre;
        this.dni = dni;
        this.direccion = direccion;
        this.curso = curso;
        this.edad = edad;
        this.fecha = fecha;
        this.email = email;
        this.repites = repites;
        this.modulo = modulo;
    }
}


//let alumno1  = new Alumnos('pepe' , '374634Z' , 'Calle 2' , 'DAW' , '21','SI' , '22-22-22', 'stalker2@gmail.com')

