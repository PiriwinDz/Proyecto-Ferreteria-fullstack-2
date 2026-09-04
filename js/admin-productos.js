// 1. Agregar nuevo producto
function agregarProducto(nuevoProducto) {
    productos.push(nuevoProducto);
    console.log("Producto agregado correctamente:", nuevoProducto);
    mostrarProductos(); // Actualiza la vista
}

// 2. Modificar un producto existente
function modificarProducto(idBuscado, nuevoPrecio, nuevaDescripcion) {
    let index = productos.findIndex(p => p.id === idBuscado);

    if (index !== -1) {
        productos[index].precio = nuevoPrecio;
        productos[index].descripcion = nuevaDescripcion;
        console.log("Producto actualizado con éxito");
        mostrarProductos();
    } else {
        console.log("Producto no encontrado");
    }
}

// 3. Eliminar un producto por ID
function eliminarProducto(idBuscado) {
    let index = productos.findIndex(p => p.id === idBuscado);

    if (index !== -1) {
        productos.splice(index, 1);
        console.log("Producto eliminado del catálogo");
        mostrarProductos();
    } else {
        console.log("No se encontró el producto a eliminar");
    }
}