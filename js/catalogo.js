let productos = [
    {
        id: "MC001",
        codigo: "MC001",
        nombre: "Cemento Polpaico gris 25 kg",
        categoria: "Mat. Construcción",
        subcategoria: "Cementos",
        marca: "Polpaico",
        unidad: "Saco",
        precio: 5990,
        stock: 80,
        descripcion: "Cemento Polpaico gris 25 kg ideal para obras de construcción y albañilería.",
        imagen: "Imagenes/Productos/MC001.webp"
    },
    {
        id: "PT001",
        codigo: "PT001",
        nombre: "Pintura látex interior 1 galón blanco",
        categoria: "Pinturas",
        subcategoria: "Látex",
        marca: "Sipa",
        unidad: "Galón",
        precio: 9990,
        stock: 40,
        descripcion: "Pintura látex interior 1 galón blanco, ideal para paredes y techos interiores.",
        imagen: "Imagenes/Productos/PT001.png"
    },
    {
        id: "HM001",
        codigo: "HM001",
        nombre: "Martillo carpintero 500g",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Stanley",
        unidad: "Unidad",
        precio: 7990,
        stock: 20,
        descripcion: "Martillo carpintero 500g con mango de madera y cabeza de acero templado.",
        imagen: "Imagenes/Productos/HM001.webp"
    }
];

// Arreglo para almacenar la lista de selección / carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Referencias a los contenedores HTML
let lista = document.getElementById("listaProductos");
let contenedorCarrito = document.getElementById("listaCarrito");
let totalElemento = document.getElementById("totalCarrito");

// -------------------------------------------------------------
// 1. Mostrar productos en el catálogo
// -------------------------------------------------------------
function mostrarProductos() {
    lista.innerHTML = ""; // Limpiar lista
    
    for (let i = 0; i < productos.length; i++) {
        lista.innerHTML += `
            <div style="border: 1px solid #ccc; margin: 10px; padding: 10px; border-radius: 5px;">
                <img src="${productos[i].imagen}" width="150" alt="${productos[i].nombre}">
                <h3>${productos[i].nombre}</h3>
                <p><strong>Categoría:</strong> ${productos[i].categoria} - ${productos[i].subcategoria}</p>
                <p><strong>Marca:</strong> ${productos[i].marca} | <strong>Formato:</strong> ${productos[i].unidad}</p>
                <p><strong>Precio:</strong> $${productos[i].precio.toLocaleString("es-CL")}</p>
                
                <button onclick="verDetalle('${productos[i].id}')">Ver detalle</button>
                <button onclick="agregarAlCarrito('${productos[i].id}')">Agregar a lista</button>
            </div>
        `;
    }
}

// -------------------------------------------------------------
// 2. Ver detalle de un producto (Redirección a detalle.html)
// -------------------------------------------------------------
function verDetalle(id) {
    let productoSeleccionado;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productoSeleccionado = productos[i];
            break;
        }
    }

    // Guardar el producto en LocalStorage
    localStorage.setItem("producto", JSON.stringify(productoSeleccionado));

    // Redireccionar
    window.location.href = "detalle.html";
}

// -------------------------------------------------------------
// 3. Funciones del Carrito / Selección (Requisito 4.8)
// -------------------------------------------------------------
function agregarAlCarrito(id) {
    let productoSeleccionado;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productoSeleccionado = productos[i];
            break;
        }
    }

    // Agregar producto al arreglo del carrito
    carrito.push(productoSeleccionado);

    // Guardar el carrito actualizado en LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar la vista del carrito
    mostrarCarrito();
}

function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p>No hay elementos en tu lista de selección.</p>";
    } else {
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].precio;
            contenedorCarrito.innerHTML += `
                <p>
                    📌 <strong>${carrito[i].nombre}</strong> - $${carrito[i].precio.toLocaleString("es-CL")}
                    <button onclick="eliminarDelCarrito(${i})">Quitar</button>
                </p>
            `;
        }
    }

    // Actualizar el total monetario
    totalElemento.textContent = total.toLocaleString("es-CL");
}

function eliminarDelCarrito(index) {
    // Quitar elemento por su posición
    carrito.splice(index, 1);

    // Guardar el carrito actualizado en LocalStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Refrescar vista
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

// Inicializar la carga al abrir la página
mostrarProductos();
mostrarCarrito();