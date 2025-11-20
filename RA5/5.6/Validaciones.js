// Validaciones.js

export function checkRequired(input) {
    const error = document.querySelector('#error-' + input.id);
    if (!input.value.trim()) {
        input.style.border = '2px solid red';
        error.innerHTML = `El campo ${input.name} es obligatorio`;
        return false;
    } else {
        input.style.border = '';
        error.innerHTML = '';
        return true;
    }
}

export function cargarModulos(cursoValue, moduloElement) {
    moduloElement.innerHTML = '';
    if (cursoValue === '1smr') {
        moduloElement.innerHTML = 'Redes Locales, Sistemas Operativos, Montaje y Reparación';
    } else if (cursoValue === '2smr') {
        moduloElement.innerHTML = 'Entorno Cliente, Entorno Servidor, Diseño de interfaces Web';
    }
}

export function validarDNI(dniValue, errorDNIElement) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const valor = dniValue.trim().toUpperCase();
    const re = /^(\d{8})(-?[A-Z])?$/;
    const match = valor.match(re);

    if (!match) {
        errorDNIElement.innerHTML = "Formato incorrecto. Usa 12345678 o 12345678-X";
        return false;
    }

    const partes = valor.split("-");
    const numeroStr = partes[0];
    const letraIntroducida = partes[1] || "";
    const numero = Number(numeroStr);
    const letraCorrecta = letras[numero % 23];

    if (!letraIntroducida) {
        errorDNIElement.innerHTML = `Letra calculada: ${letraCorrecta}`;
        return true;
    }

    if (letraIntroducida !== letraCorrecta) {
        errorDNIElement.innerHTML = `Letra incorrecta. La correcta es ${letraCorrecta}`;
        return false;
    }

    errorDNIElement.innerHTML = "DNI correcto";
    return true;
}

export function validarEdad(edadValue, errorEdadElement) {
    const edadNumero = parseInt(edadValue);
    if (isNaN(edadNumero)) {
        errorEdadElement.innerHTML = 'Introduce caracteres numéricos';
        return false;
    } else {
        errorEdadElement.innerHTML = '';
        return true;
    }
}

export function validarEmail(emailValue, errorEmailElement) {
    const regexpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailValue.match(regexpEmail)) {
        errorEmailElement.innerHTML = 'El formato del email debe ser xxxxxx@yyyyy.zzz';
        return false;
    } else {
        errorEmailElement.innerHTML = '';
        return true;
    }
}

export function validarRepites(repitesNodeList) {
    if (repitesNodeList.length === 0) {
        alert("Debes seleccionar si repites o no");
        return false;
    }
    return true;
}
