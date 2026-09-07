// 1. Agregar nuevo producto
// ==========================================
// LÓGICA DEL PANEL ADMINISTRADOR (CATÁLOGO)
// ==========================================

// 1. Verificación de seguridad: si no es admin, regresa al login
const rolActual = localStorage.getItem('rol');
if (rolActual !== 'admin') {
  alert('Acceso no autorizado. Debes iniciar sesión como administrador.');
  window.location.href = 'login.html';
}

// 2. Evento para cerrar sesión
const btnCerrarSesion = document.getElementById('btnCerrarSesion');
if (btnCerrarSesion) {
  btnCerrarSesion.addEventListener('click', function() {
    localStorage.removeItem('rol');
    window.location.href = 'pagina_principal.html';
  });
}

// 3. Arreglo inicial de productos
let productos = [
  {
    id: "MC001",
    nombre: "Cemento Polpaico gris 25 kg",
    precio: 5990,
    descripcion: "Cemento Polpaico gris 25 kg ideal para obras de construcción y albañilería.",
    imagen: "Imagenes/Productos/MC001.webp"
  },
  {
    id: "PT001",
    nombre: "Pintura látex interior 1 galón blanco",
    precio: 9990,
    descripcion: "Pintura látex interior 1 galón blanco, ideal para paredes y techos interiores.",
    imagen: "Imagenes/Productos/PT001.png"
  },
  {
    id: "HM001",
    nombre: "Martillo carpintero 500g",
    precio: 7990,
    descripcion: "Martillo carpintero 500g con mango de madera y cabeza de acero templado.",
    imagen: "Imagenes/Productos/HM001.webp"
  }
];

// 4. Renderizado dinámico de tarjetas con botones de admin
const contenedor = document.getElementById('listaProductos');

function renderizarProductos() {
  if (!contenedor) return;
  contenedor.innerHTML = '';

  productos.forEach(prod => {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm border-0">
        <img src="${prod.imagen || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}" class="card-img-top" alt="${prod.nombre}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${prod.nombre}</h5>
          <p class="card-text text-muted flex-grow-1">${prod.descripcion}</p>
          <div class="fs-5 fw-bold text-primary mb-3">$${prod.precio.toLocaleString('es-CL')} CLP</div>
          
          <!-- Botones de Administrador -->
          <div class="d-flex gap-2 mt-auto">
            <button class="btn btn-outline-warning w-100 fw-semibold btn-sm" onclick="cargarDatosEditar(${prod.id})">
              <i class="bi bi-pencil"></i> Editar
            </button>
            <button class="btn btn-outline-danger w-100 fw-semibold btn-sm" onclick="eliminarProducto(${prod.id})">
              <i class="bi bi-trash"></i> Eliminar
            </button>
          </div>   
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });
}

// Ejecutar renderizado inicial
renderizarProductos();

// 5. Función para eliminar un producto
function eliminarProducto(id) {
  if (confirm('¿Estás seguro de que deseas eliminar este producto del catálogo?')) {
    productos = productos.filter(p => p.id !== id);
    renderizarProductos();
  }
}

// 6. Preparación y apertura del modal de edición
let modalEditarInstance = null;

function cargarDatosEditar(id) {
  const prod = productos.find(p => p.id === id);
  if (prod) {
    document.getElementById('editId').value = prod.id;
    document.getElementById('editNombre').value = prod.nombre;
    document.getElementById('editPrecio').value = prod.precio;
    document.getElementById('editDesc').value = prod.descripcion;

    const modalEl = document.getElementById('modalEditar');
    modalEditarInstance = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modalEditarInstance.show();
  }
}

// 7. Guardar cambios del formulario de edición (precio y descripción)
const formEditar = document.getElementById('formActualizarProducto');
if (formEditar) {
  formEditar.addEventListener('submit', function(e) {
    e.preventDefault();
    const id = parseInt(document.getElementById('editId').value);
    const prod = productos.find(p => p.id === id);

    if (prod) {
      prod.precio = parseInt(document.getElementById('editPrecio').value);
      prod.descripcion = document.getElementById('editDesc').value;
      renderizarProductos();
      if (modalEditarInstance) {
        modalEditarInstance.hide();
      }
    }
  });
}

// 8. Agregar un nuevo producto al catálogo
const formNuevo = document.getElementById('formNuevoProducto');
if (formNuevo) {
  formNuevo.addEventListener('submit', function(e) {
    e.preventDefault();

    const nuevo = {
      id: Date.now(),
      nombre: document.getElementById('nuevoNombre').value.trim(),
      precio: parseInt(document.getElementById('nuevoPrecio').value),
      descripcion: document.getElementById('nuevaDesc').value.trim(),
      imagen: document.getElementById('nuevaImagen').value.trim() || 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=500'
    };

    productos.push(nuevo);
    renderizarProductos();
    this.reset();

    const modalAgregarEl = document.getElementById('modalAgregar');
    const modalAgregarInstance = bootstrap.Modal.getInstance(modalAgregarEl);
    if (modalAgregarInstance) {
      modalAgregarInstance.hide();
    }
  });
}