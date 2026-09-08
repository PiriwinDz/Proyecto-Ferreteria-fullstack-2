
const productosIniciales = [
    {
        codigo: 'MC001',
        categoria: 'Materiales de Construcción',
        subcategoria: 'Cementos',
        nombre: 'Cemento Polpaico Gris 25 kg',
        marca: 'Polpaico',
        precio: 5990,
        stock: 80,
        imagen: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80'
    },
    {
        codigo: 'HE002',
        categoria: 'Herramientas',
        subcategoria: 'Eléctricas',
        nombre: 'Taladro Percutor 1/2" 650W',
        marca: 'Bauker',
        precio: 29990,
        stock: 25,
        imagen: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=500&q=80'
    },
    {
        codigo: 'PI003',
        categoria: 'Pinturas',
        subcategoria: 'Esmaltes',
        nombre: 'Esmalte al Agua Blanco Tineta 5 Galones',
        marca: 'Sipa',
        precio: 45990,
        stock: 15,
        imagen: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80'
    },
    {
        codigo: 'GA004',
        categoria: 'Gasfitería',
        subcategoria: 'Tuberías',
        nombre: 'Tubo PVC Sanitarios 110mm x 3m',
        marca: 'Tigre',
        precio: 8990,
        stock: 100,
        imagen: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=500&q=80'
    },
    {
        codigo: 'HM005',
        categoria: 'Herramientas',
        subcategoria: 'Manuales',
        nombre: 'Set de Destornilladores 6 Piezas',
        marca: 'Stanley',
        precio: 11990,
        stock: 40,
        imagen: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=500&q=80'
    },
    {
        codigo: 'FI006',
        categoria: 'Fijaciones',
        subcategoria: 'Tornillos',
        nombre: 'Pack 100 Tornillos Volcanita 6x1 5/8"',
        marca: 'Mamut',
        precio: 2490,
        stock: 200,
        imagen: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=80'
    }
];


const regionesYComunas = [
    {
        region: "Metropolitana de Santiago",
        comunas: ["Santiago", "Quilicura", "Maipú", "Puente Alto", "Providencia", "Las Condes"]
    },
    {
        region: "Valparaíso",
        comunas: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio"]
    },
    {
        region: "Biobío",
        comunas: ["Concepción", "Talcahuano", "Los Ángeles", "San Pedro de la Paz", "Coronel"]
    }
];

if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(productosIniciales));
}