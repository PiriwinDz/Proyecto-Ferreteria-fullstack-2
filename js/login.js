function ingresar(event) {
    if (event) {
        event.preventDefault(); 
    }


    const inputCorreo = document.getElementById("correo") || document.getElementById("correo");
    const inputClave = document.getElementById("clave") || document.getElementById("clave");

    if (!inputCorreo || !inputClave) {
        return;
    }

    let correo = inputCorreo.value.trim();
    let clave = inputClave.value.trim();

    if (correo === "" || clave === "") {
        alert("Debe completar todos los campos");
        return;
    }

    let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
        alert("Ingrese un correo válido");
        return;
    }

    if (clave.length !== 4) {
        alert("La clave debe tener exactamente 4 caracteres");
        return;
    }

    if (correo === "admin@demo.cl" && clave === "1234") {
        localStorage.setItem("rol", "admin");
        window.location.href = "admin_catalogo.html";
    }

    else if (correo === "usuario@demo.cl" && clave === "5678") {
        localStorage.setItem("rol", "usuario");
        alert("Bienvenido usuario");
        window.location.href = "pagina_principal.html";
    }
    else {
        alert("Correo o clave incorrectos");
    }
}