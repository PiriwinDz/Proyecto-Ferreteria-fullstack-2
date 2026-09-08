
function validarRutChileno(rut) {
    rut = rut.replace(/\./g, '').replace('-', '').trim().toUpperCase();
    if (rut.length < 8 || rut.length > 9) return false;

    const cuerpo = rut.slice(0, -1);
    let dv = rut.slice(-1);

    if (!/^[0-9]+$/.test(cuerpo)) return false;

    let suma = 0;
    let multiplo = 2;

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += multiplo * parseInt(cuerpo.charAt(i), 10);
        multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }

    let dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 11) dvEsperado = '0';
    else if (dvEsperado === 10) dvEsperado = 'K';
    else dvEsperado = dvEsperado.toString();

    return dv === dvEsperado;
}


function validarEmail(correo, maxLen = 100) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo && correo.length <= maxLen && regex.test(correo.trim());
}

function validarLongitud(texto, min, max) {
    const len = texto ? texto.trim().length : 0;
    return len >= min && len <= max;
}