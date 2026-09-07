// Recuperar el producto guardado en LocalStorage
let producto = JSON.parse(localStorage.getItem("producto"));

// Referencia al contenedor principal
let contenedor = document.getElementById("contenidoDetalle");

// Verificar que exista un producto cargado
if (producto) {
    document.getElementById("imagen").src = producto.imagen || 'https://via.placeholder.com/300x200?text=Sin+Imagen';
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("codigo").textContent = producto.codigo || producto.id || "N/A";
    
    // Categoría / Subcategoría
    let textoCategoria = producto.categoria || "";
    if (producto.subcategoria) {
        textoCategoria += " / " + producto.subcategoria;
    }
    document.getElementById("categoria").textContent = textoCategoria;

    document.getElementById("marca").textContent = producto.marca || "Genérica";
    document.getElementById("unidad").textContent = producto.unidad || "Unidad";
    document.getElementById("precio").textContent = producto.precio ? producto.precio.toLocaleString("es-CL") : "0";
    document.getElementById("stock").textContent = producto.stock !== undefined ? producto.stock : "Consulte";
    document.getElementById("descripcion").textContent = producto.descripcion || "Sin descripción disponible.";

    // Botón para agregar directamente al carrito/lista desde la página de detalle
    let btnAgregar = document.getElementById("btnAgregarLista");
    if (btnAgregar) {
        btnAgregar.addEventListener("click", function() {
            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            carrito.push(producto);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            alert(`"${producto.nombre}" ha sido agregado a tu lista.`);
        });
    }
} else {
    // Si no hay producto en LocalStorage, muestra este mensaje formateado
    if (contenedor) {
        contenedor.innerHTML = `
            <div class="text-center py-5 my-5">
                <i class="bi bi-exclamation-circle text-warning display-1 mb-3"></i>
                <h2 class="fw-bold text-dark">No se ha seleccionado ningún producto</h2>
                <p class="text-muted">Por favor, regresa al catálogo para seleccionar un artículo.</p>
                <a href="catalogo.html" class="btn btn-warning fw-bold text-dark mt-2">
                    <i class="bi bi-arrow-left me-1"></i> Volver al catálogo
                </a>
            </div>
        `;
    }
}