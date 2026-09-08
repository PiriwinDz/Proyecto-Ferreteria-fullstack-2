

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    actualizarContadorCarrito();
});


function renderizarProductos() {
    const contenedor = document.getElementById('grid-productos');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    if (productos.length === 0) {
        contenedor.innerHTML = '<p>No hay productos disponibles en el catálogo.</p>';
        return;
    }

    contenedor.innerHTML = productos.map(producto => `
        <article class="product-card">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-info">
                <span class="badge">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
                <p class="brand">Marca: ${producto.marca}</p>
                <p class="price">$${producto.precio.toLocaleString('es-CL')}</p>
                <div class="actions">
                    <button class="btn btn-secondary" onclick="verDetalle('${producto.codigo}')">Ver Detalle</button>
                    <button class="btn btn-primary" onclick="agregarAlCarrito('${producto.codigo}')">Añadir al Carrito</button>
                </div>
            </div>
        </article>
    `).join('');
}


function agregarAlCarrito(codigo) {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos.find(p => p.codigo === codigo);

    if (!producto) return;

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const index = carrito.findIndex(item => item.codigo === codigo);

    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    alert(`"${producto.nombre}" ha sido añadido al carrito.`);
}


function actualizarContadorCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = totalItems;
    }
}


function verDetalle(codigo) {
    window.location.href = `detalle-producto.html?codigo=${codigo}`;
}
