// Recuperar el producto guardado en LocalStorage
let producto = JSON.parse(localStorage.getItem("producto"));

// Verificar que exista un producto cargado
if (producto) {
    document.getElementById("imagen").src = producto.imagen;
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("codigo").textContent = producto.codigo;
    document.getElementById("categoria").textContent = producto.categoria + " / " + producto.subcategoria;
    document.getElementById("marca").textContent = producto.marca;
    document.getElementById("unidad").textContent = producto.unidad;
    document.getElementById("precio").textContent = producto.precio.toLocaleString("es-CL");
    document.getElementById("stock").textContent = producto.stock;
    document.getElementById("descripcion").textContent = producto.descripcion;
} else {
    document.body.innerHTML = "<h2>No se ha seleccionado ningún producto.</h2><a href='productos.html'>Volver al catálogo</a>";
}