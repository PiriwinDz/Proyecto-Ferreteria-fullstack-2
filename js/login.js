function ingresar() {
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;


    // validar campos vacios
    if (correo === "" || clave === "") {
        alert("Debe completar todos los campos");
        return;
    }


    //validar formato de correo
    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo válido");
    }


    // validar argo de clave
    if (clave.lenght !== 4) {
        alert("La clave debe tener exactamente 4 caracteres");
        return;
    }


    // usuario administrador
    if(correo === "admin@demo.cl" && clave === "1234") {
        window.location.href = "admin.html";
    }


    // usuario normal
    else if (correo === "usuario@demo.cl" && clave === "5678") {
        window.location.href = "usuario.html";
    }
    else {
        alert("correo o clave incorrectos");
    }
}
