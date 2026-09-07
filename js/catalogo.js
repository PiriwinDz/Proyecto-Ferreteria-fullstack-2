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
        descripcion: "Cemento Polpaico gris 25 kg, ideal para trabajos de construcción y albañilería.",
        imagen: "Imagenes/Productos/MC001.webp"
    },
    {
        id: "MC002",
        codigo: "MC002",
        nombre: "Cemento Melón blanco 25 kg",
        categoria: "Mat. Construcción",
        subcategoria: "Cementos",
        marca: "Melón",
        unidad: "Saco",
        precio: 7490,
        stock: 40,
        descripcion: "Cemento Melón blanco 25 kg, ideal para acabados y trabajos de albañilería.",
        imagen: "Imagenes/Productos/MC002.webp"
    },
    {
        id: "MC003",
        codigo: "MC003",
        nombre: "Mortero cola cerámica 25 kg",
        categoria: "Mat. Construcción",
        subcategoria: "Morteros",
        marca: "Volcán",
        unidad: "Saco",
        precio: 5200,
        stock: 50,
        descripcion: "Mortero cola cerámica 25 kg, ideal para pegar cerámicas y azulejos.",
        imagen: "Imagenes/Productos/MC003.webp"
    },
    {
        id: "MC004",
        codigo: "MC004",
        nombre: "Mortero nivelador piso 25 kg",
        categoria: "Mat. Construcción",
        subcategoria: "Morteros",
        marca: "Weber",
        unidad: "Saco",
        precio: 6490,
        stock: 30,
        descripcion: "Mortero nivelador piso 25 kg, ideal para nivelar superficies antes de instalar pisos.",
        imagen: "Imagenes/Productos/MC004.webp"
    },
    {
        id: "MC005",
        codigo: "MC005",
        nombre: "Arena fina construcción 25 kg",
        categoria: "Mat. Construcción",
        subcategoria: "Áridos",
        marca: "Granel",
        unidad: "Saco",
        precio: 1800,
        stock: 60,
        descripcion: "Arena fina construcción 25 kg, ideal para mezcla de mortero y albañilería.",
        imagen: "Imagenes/Productos/MC005.webp"
    },
    {
        id: "MC006",
        codigo: "MC006",
        nombre: "Ripio 25 kg",
        categoria: "Mat. Construcción",
        subcategoria: "Áridos",
        marca: "Granel",
        unidad: "Saco",
        precio: 1500,
        stock: 60,
        descripcion: "Ripio 25 kg, ideal para mezcla de hormigón y rellenos.",
        imagen: "Imagenes/Productos/MC006.webp"
    },
    {
        id: "MC007",
        codigo: "MC007",
        nombre: "Ladrillo fiscal N°5",
        categoria: "Mat. Construcción",
        subcategoria: "Ladrillos",
        marca: "Local",
        unidad: "Unidad",
        precio: 380,
        stock: 500,
        descripcion: "Ladrillo fiscal N°5, ideal para muros estructurales y tabiquería.",
        imagen: "Imagenes/Productos/MC007.webp"
    },
    {
        id: "MC008",
        codigo: "MC008",
        nombre: "Ladrillo prensado 6x14x29 cm",
        categoria: "Mat. Construcción",
        subcategoria: "Ladrillos",
        marca: "Melón",
        unidad: "Unidad",
        precio: 550,
        stock: 300,
        descripcion: "Ladrillo prensado 6x14x29 cm para albañilería a la vista.",
        imagen: "Imagenes/Productos/MC008.webp"
    },
    {
        id: "MC009",
        codigo: "MC009",
        nombre: "Bloque de hormigón 19x19x39 cm",
        categoria: "Mat. Construcción",
        subcategoria: "Bloques",
        marca: "Volcán",
        unidad: "Unidad",
        precio: 1200,
        stock: 200,
        descripcion: "Bloque de hormigón 19x19x39 cm para construcción de muros de contención.",
        imagen: "Imagenes/Productos/MC009.webp"
    },
    {
        id: "MC010",
        codigo: "MC010",
        nombre: "Bloque liviano 10x20x40 cm",
        categoria: "Mat. Construcción",
        subcategoria: "Bloques",
        marca: "Ytong",
        unidad: "Unidad",
        precio: 1690,
        stock: 100,
        descripcion: "Bloque liviano 10x20x40 cm aislante térmico y acústico.",
        imagen: "Imagenes/Productos/MC010.webp"
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
        id: "PT002",
        codigo: "PT002",
        nombre: "Pintura látex interior 4 litros (varios col.)",
        categoria: "Pinturas",
        subcategoria: "Látex",
        marca: "Sipa",
        unidad: "Envase 4L",
        precio: 12990,
        stock: 30,
        descripcion: "Pintura látex interior 4 litros, disponible en varios colores de terminación mate.",
        imagen: "Imagenes/Productos/PT002.png"
    },
    {
        id: "PT003",
        codigo: "PT003",
        nombre: "Pintura látex exterior 1 galón blanco",
        categoria: "Pinturas",
        subcategoria: "Látex",
        marca: "Kömex",
        unidad: "Galón",
        precio: 13990,
        stock: 25,
        descripcion: "Pintura látex exterior 1 galón blanco de alta resistencia al clima.",
        imagen: "Imagenes/Productos/PT003.png"
    },
    {
        id: "PT004",
        codigo: "PT004",
        nombre: "Esmalte sintético 1/4 litro (varios col.)",
        categoria: "Pinturas",
        subcategoria: "Esmalte",
        marca: "Sipa",
        unidad: "1/4 L",
        precio: 4290,
        stock: 50,
        descripcion: "Esmalte sintético 1/4 litro para acabados brillantes en metal y madera.",
        imagen: "Imagenes/Productos/PT004.png"
    },
    {
        id: "PT005",
        codigo: "PT005",
        nombre: "Esmalte sintético 1 litro (varios col.)",
        categoria: "Pinturas",
        subcategoria: "Esmalte",
        marca: "Sipa",
        unidad: "1 litro",
        precio: 9490,
        stock: 30,
        descripcion: "Esmalte sintético 1 litro de alto brillo e intemperie.",
        imagen: "Imagenes/Productos/PT005.png"
    },
    {
        id: "PT006",
        codigo: "PT006",
        nombre: "Barniz marino natural 1 galón",
        categoria: "Pinturas",
        subcategoria: "Barniz",
        marca: "Sipa",
        unidad: "Galón",
        precio: 18990,
        stock: 20,
        descripcion: "Barniz marino natural 1 galón con protección UV para maderas al exterior.",
        imagen: "Imagenes/Productos/PT006.png"
    },
    {
        id: "PT007",
        codigo: "PT007",
        nombre: "Pintura antihumedad 1 galón blanca",
        categoria: "Pinturas",
        subcategoria: "Antihumedad",
        marca: "Chilcorrofin",
        unidad: "Galón",
        precio: 22990,
        stock: 15,
        descripcion: "Pintura antihumedad 1 galón para muros subterráneos y baños.",
        imagen: "Imagenes/Productos/PT007.png"
    },
    {
        id: "PT008",
        codigo: "PT008",
        nombre: "Brocha 2 pulgadas cerda natural",
        categoria: "Pinturas",
        subcategoria: "Accesorios",
        marca: "Tigre",
        unidad: "Unidad",
        precio: 1890,
        stock: 100,
        descripcion: "Brocha 2 pulgadas cerda natural para todo tipo de pinturas.",
        imagen: "Imagenes/Productos/PT008.png"
    },
    {
        id: "PT009",
        codigo: "PT009",
        nombre: "Rodillo antigota 23 cm con mango",
        categoria: "Pinturas",
        subcategoria: "Accesorios",
        marca: "Tigre",
        unidad: "Unidad",
        precio: 4990,
        stock: 60,
        descripcion: "Rodillo antigota 23 cm para pintar superficies lisas y látex.",
        imagen: "Imagenes/Productos/PT009.png"
    },
    {
        id: "PT010",
        codigo: "PT010",
        nombre: "Bandeja para pintar 9 pulgadas",
        categoria: "Pinturas",
        subcategoria: "Accesorios",
        marca: "Tigre",
        unidad: "Unidad",
        precio: 1990,
        stock: 50,
        descripcion: "Bandeja plástica reforzada para rodillos de hasta 9 pulgadas.",
        imagen: "Imagenes/Productos/PT010.png"
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
    },
    {
        id: "HM002",
        codigo: "HM002",
        nombre: "Martillo galponero 16 oz mango fibra",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Stanley",
        unidad: "Unidad",
        precio: 8990,
        stock: 35,
        descripcion: "Martillo galponero 16 oz con mango de fibra de vidrio anti-vibración.",
        imagen: "Imagenes/Productos/HM002.webp"
    },
    {
        id: "HM003",
        codigo: "HM003",
        nombre: "Alicate universal 8 pulgadas",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Stanley",
        unidad: "Unidad",
        precio: 6990,
        stock: 45,
        descripcion: "Alicate universal 8 pulgadas aislado para corte y sujeción de cables.",
        imagen: "Imagenes/Productos/HM003.webp"
    },
    {
        id: "HM004",
        codigo: "HM004",
        nombre: "Alicate de corte diagonal 6 pulgadas",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Irwin",
        unidad: "Unidad",
        precio: 6290,
        stock: 30,
        descripcion: "Alicate de corte diagonal 6 pulgadas de precisión.",
        imagen: "Imagenes/Productos/HM004.webp"
    },
    {
        id: "HM005",
        codigo: "HM005",
        nombre: "Juego destornilladores 6 piezas (PH + Plano)",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Stanley",
        unidad: "Juego",
        precio: 9990,
        stock: 25,
        descripcion: "Juego destornilladores 6 piezas puntas magnetizadas.",
        imagen: "Imagenes/Productos/HM005.webp"
    },
    {
        id: "HM006",
        codigo: "HM006",
        nombre: "Llave ajustable (francesa) 10 pulgadas",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Bahco",
        unidad: "Unidad",
        precio: 14990,
        stock: 20,
        descripcion: "Llave ajustable 10 pulgadas Bahco de cromo vanadio.",
        imagen: "Imagenes/Productos/HM006.webp"
    },
    {
        id: "HM007",
        codigo: "HM007",
        nombre: "Juego llaves combinación 8-19 mm (10 piezas)",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Stanley",
        unidad: "Juego",
        precio: 19990,
        stock: 15,
        descripcion: "Juego llaves combinación 8-19 mm en estuche organizador.",
        imagen: "Imagenes/Productos/HM007.webp"
    },
    {
        id: "HM008",
        codigo: "HM008",
        nombre: "Sierra de mano (serrucho) 20 pulgadas",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Bahco",
        unidad: "Unidad",
        precio: 11990,
        stock: 18,
        descripcion: "Serrucho 20 pulgadas Bahco para cortes rápidos en madera.",
        imagen: "Imagenes/Productos/HM008.webp"
    },
    {
        id: "HM009",
        codigo: "HM009",
        nombre: "Nivel de aluminio 24 pulgadas (60 cm)",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Stanley",
        unidad: "Unidad",
        precio: 8490,
        stock: 22,
        descripcion: "Nivel de aluminio 24 pulgadas con 3 gotas de medición.",
        imagen: "Imagenes/Productos/HM009.webp"
    },
    {
        id: "HM010",
        codigo: "HM010",
        nombre: "Huincha de medir 5 metros gomi-grip",
        categoria: "Herramientas",
        subcategoria: "Manuales",
        marca: "Lufkin",
        unidad: "Unidad",
        precio: 4990,
        stock: 50,
        descripcion: "Huincha de medir 5 metros con freno y carcasa de goma antideslizante.",
        imagen: "Imagenes/Productos/HM010.webp"
    },
    {
        id: "HE001",
        codigo: "HE001",
        nombre: "Taladro percutor 13 mm 650W",
        categoria: "Herramientas",
        subcategoria: "Eléctricas",
        marca: "DeWalt",
        unidad: "Unidad",
        precio: 45990,
        stock: 15,
        descripcion: "Taladro percutor DeWalt 650W con mandril de 13 mm.",
        imagen: "Imagenes/Productos/HE001.webp"
    },
    {
        id: "HE002",
        codigo: "HE002",
        nombre: "Taladro inalámbrico 12V + 2 baterías",
        categoria: "Herramientas",
        subcategoria: "Eléctricas",
        marca: "Bosch",
        unidad: "Unidad",
        precio: 69900,
        stock: 10,
        descripcion: "Taladro inalámbrico Bosch 12V con maletín y 2 baterías de litio.",
        imagen: "Imagenes/Productos/HE002.webp"
    },
    {
        id: "HE003",
        codigo: "HE003",
        nombre: "Amoladora angular 4 1/2 pulg 720W",
        categoria: "Herramientas",
        subcategoria: "Eléctricas",
        marca: "Makita",
        unidad: "Unidad",
        precio: 39990,
        stock: 18,
        descripcion: "Esmeril angular Makita 720W para discos de 4 1/2 pulgadas.",
        imagen: "Imagenes/Productos/HE003.webp"
    },
    {
        id: "HE004",
        codigo: "HE004",
        nombre: "Sierra circular 7 1/4 pulg 1400W",
        categoria: "Herramientas",
        subcategoria: "Eléctricas",
        marca: "DeWalt",
        unidad: "Unidad",
        precio: 84990,
        stock: 8,
        descripcion: "Sierra circular DeWalt 1400W para cortes profundos en madera.",
        imagen: "Imagenes/Productos/HE004.webp"
    },
    {
        id: "HE005",
        codigo: "HE005",
        nombre: "Sierra caladora 450W velocidad variable",
        categoria: "Herramientas",
        subcategoria: "Eléctricas",
        marca: "Bosch",
        unidad: "Unidad",
        precio: 42990,
        stock: 12,
        descripcion: "Sierra caladora Bosch 450W con regulación de velocidad.",
        imagen: "Imagenes/Productos/HE005.webp"
    },
    {
        id: "HE006",
        codigo: "HE006",
        nombre: "Lijadora orbital 1/4 hoja 200W",
        categoria: "Herramientas",
        subcategoria: "Eléctricas",
        marca: "Makita",
        unidad: "Unidad",
        precio: 34990,
        stock: 14,
        descripcion: "Lijadora orbital 200W para acabados finos en carpintería.",
        imagen: "Imagenes/Productos/HE006.webp"
    },
    {
        id: "HE007",
        codigo: "HE007",
        nombre: "Atornillador de impacto inalámbrico 18V",
        categoria: "Herramientas",
        subcategoria: "Eléctricas",
        marca: "DeWalt",
        unidad: "Unidad",
        precio: 119900,
        stock: 6,
        descripcion: "Atornillador de impacto 18V motor sin carbones de alto torque.",
        imagen: "Imagenes/Productos/HE007.webp"
    },
    {
        id: "GA001",
        codigo: "GA001",
        nombre: "Tubo PVC hidráulico 25 mm x 6 m",
        categoria: "Gasfitería",
        subcategoria: "Tuberías",
        marca: "Tigre",
        unidad: "Tira",
        precio: 4200,
        stock: 100,
        descripcion: "Tubo PVC hidráulico 25 mm x 6 m para distribución de agua potable.",
        imagen: "Imagenes/Productos/GA001.png"
    },
    {
        id: "GA002",
        codigo: "GA002",
        nombre: "Tubo PVC sanitario 110 mm x 3 m",
        categoria: "Gasfitería",
        subcategoria: "Tuberías",
        marca: "Tigre",
        unidad: "Tira",
        precio: 8900,
        stock: 50,
        descripcion: "Tubo PVC sanitario 110 mm x 3 m para desagües.",
        imagen: "Imagenes/Productos/GA002.png"
    },
    {
        id: "GA003",
        codigo: "GA003",
        nombre: "Tubo cobre tipo L 1/2 pulg x 6 m",
        categoria: "Gasfitería",
        subcategoria: "Tuberías",
        marca: "Madeco",
        unidad: "Tira",
        precio: 18900,
        stock: 30,
        descripcion: "Tubo de cobre 1/2 pulgada para red de agua fría y caliente.",
        imagen: "Imagenes/Productos/GA003.png"
    },
    {
        id: "GA004",
        codigo: "GA004",
        nombre: "Codo PVC 25 mm x 90° hidráulico",
        categoria: "Gasfitería",
        subcategoria: "Uniones",
        marca: "Tigre",
        unidad: "Unidad",
        precio: 450,
        stock: 200,
        descripcion: "Codo PVC 25 mm 90 grados para instalaciones hidráulicas.",
        imagen: "Imagenes/Productos/GA004.png"
    },
    {
        id: "GA005",
        codigo: "GA005",
        nombre: "Tee PVC 25 mm hidráulica",
        categoria: "Gasfitería",
        subcategoria: "Uniones",
        marca: "Tigre",
        unidad: "Unidad",
        precio: 550,
        stock: 150,
        descripcion: "Tee PVC hidráulica 25 mm para derivaciones de cañerías.",
        imagen: "Imagenes/Productos/GA005.png"
    },
    {
        id: "GA006",
        codigo: "GA006",
        nombre: "Llave de paso paso total 1/2 pulg HE/HI",
        categoria: "Gasfitería",
        subcategoria: "Llaves",
        marca: "Nibsa",
        unidad: "Unidad",
        precio: 4990,
        stock: 40,
        descripcion: "Llave de paso de bola 1/2 pulgada de bronce cromado.",
        imagen: "Imagenes/Productos/GA006.png"
    },
    {
        id: "GA007",
        codigo: "GA007",
        nombre: "Monocomando lavaplatos cuello cisne",
        categoria: "Gasfitería",
        subcategoria: "Grifería",
        marca: "Stretto",
        unidad: "Unidad",
        precio: 24990,
        stock: 15,
        descripcion: "Grifería monocomando para lavaplatos cromada de alta durabilidad.",
        imagen: "Imagenes/Productos/GA007.png"
    },
    {
        id: "GA008",
        codigo: "GA008",
        nombre: "Cinta teflón 3/4 pulg x 10 m",
        categoria: "Gasfitería",
        subcategoria: "Sellos",
        marca: "Tigre",
        unidad: "Unidad",
        precio: 690,
        stock: 300,
        descripcion: "Cinta teflón para sellado de uniones roscadas de agua y gas.",
        imagen: "Imagenes/Productos/GA008.png"
    },
    {
        id: "GA009",
        codigo: "GA009",
        nombre: "Adhesivo PVC 125 ml con pincel",
        categoria: "Gasfitería",
        subcategoria: "Sellos",
        marca: "Vinilit",
        unidad: "Unidad",
        precio: 2990,
        stock: 80,
        descripcion: "Pegamento para tubos y uniones de PVC con aplicador incorporado.",
        imagen: "Imagenes/Productos/GA009.png"
    },
    {
        id: "GA010",
        codigo: "GA010",
        nombre: "Flexible lavatorio 1/2 x 1/2 30 cm",
        categoria: "Gasfitería",
        subcategoria: "Uniones",
        marca: "Nibsa",
        unidad: "Unidad",
        precio: 2190,
        stock: 90,
        descripcion: "Flexible con malla de acero inoxidable para conexión de agua.",
        imagen: "Imagenes/Productos/GA010.png"
    },
    {
        id: "EL001",
        codigo: "EL001",
        nombre: "Cable de cobre libre de halógeno 1.5 mm² x 100m blanco",
        categoria: "Electricidad",
        subcategoria: "Conductores",
        marca: "Cocesa",
        unidad: "Rollo 100m",
        precio: 28900,
        stock: 20,
        descripcion: "Cable eléctrico 1.5 mm² libre de halógeno para iluminación.",
        imagen: "Imagenes/Productos/EL001.webp"
    },
    {
        id: "EL002",
        codigo: "EL002",
        nombre: "Cable de cobre libre de halógeno 2.5 mm² x 100m rojo",
        categoria: "Electricidad",
        subcategoria: "Conductores",
        marca: "Cocesa",
        unidad: "Rollo 100m",
        precio: 42900,
        stock: 15,
        descripcion: "Cable eléctrico 2.5 mm² para enchufes y fuerza.",
        imagen: "Imagenes/Productos/EL002.webp"
    },
    {
        id: "EL003",
        codigo: "EL003",
        nombre: "Enchufe hembra doble embutir 10/16A blanco",
        categoria: "Electricidad",
        subcategoria: "Enchufes",
        marca: "Bticino",
        unidad: "Unidad",
        precio: 2990,
        stock: 80,
        descripcion: "Módulo enchufe doble embutido línea moderna Bticino.",
        imagen: "Imagenes/Productos/EL003.webp"
    },
    {
        id: "EL004",
        codigo: "EL004",
        nombre: "Interruptor simple embutir 10A blanco",
        categoria: "Electricidad",
        subcategoria: "Interruptores",
        marca: "Bticino",
        unidad: "Unidad",
        precio: 2490,
        stock: 90,
        descripcion: "Interruptor simple de embutir 10A.",
        imagen: "Imagenes/Productos/EL004.webp"
    },
    {
        id: "EL005",
        codigo: "EL005",
        nombre: "Interruptor 9/24 (conmutador) 10A blanco",
        categoria: "Electricidad",
        subcategoria: "Interruptores",
        marca: "Bticino",
        unidad: "Unidad",
        precio: 2990,
        stock: 60,
        descripcion: "Interruptor conmutador 9/24 para encendido desde 2 puntos.",
        imagen: "Imagenes/Productos/EL005.webp"
    },
    {
        id: "EL006",
        codigo: "EL006",
        nombre: "Automático magnetotérmico 1P 16A",
        categoria: "Electricidad",
        subcategoria: "Tableros",
        marca: "Legrand",
        unidad: "Unidad",
        precio: 3490,
        stock: 50,
        descripcion: "Disyuntor magnetotérmico 1 polo 16 amperes para tablero.",
        imagen: "Imagenes/Productos/EL006.webp"
    },
    {
        id: "EL007",
        codigo: "EL007",
        nombre: "Diferencial 2P 25A 30mA",
        categoria: "Electricidad",
        subcategoria: "Tableros",
        marca: "Legrand",
        unidad: "Unidad",
        precio: 12990,
        stock: 30,
        descripcion: "Protector diferencial 2 polos 25A 30mA para protección humana.",
        imagen: "Imagenes/Productos/EL007.webp"
    },
    {
        id: "EL008",
        codigo: "EL008",
        nombre: "Ampolleta LED A60 9W E27 luz cálida",
        categoria: "Electricidad",
        subcategoria: "Iluminación",
        marca: "Philips",
        unidad: "Unidad",
        precio: 1290,
        stock: 150,
        descripcion: "Ampolleta LED 9W bajo consumo equivalente a 60W tradicional.",
        imagen: "Imagenes/Productos/EL008.webp"
    },
    {
        id: "EL009",
        codigo: "EL009",
        nombre: "Ampolleta LED A60 9W E27 luz fría",
        categoria: "Electricidad",
        subcategoria: "Iluminación",
        marca: "Philips",
        unidad: "Unidad",
        precio: 1290,
        stock: 150,
        descripcion: "Ampolleta LED 9W luz día blanca para oficinas y cocinas.",
        imagen: "Imagenes/Productos/EL009.webp"
    },
    {
        id: "EL010",
        codigo: "EL010",
        nombre: "Panel LED sobreponer 18W redondo luz fría",
        categoria: "Electricidad",
        subcategoria: "Iluminación",
        marca: "Megabright",
        unidad: "Unidad",
        precio: 5990,
        stock: 40,
        descripcion: "Panel LED 18W delgado de sobreponer para techo.",
        imagen: "Imagenes/Productos/EL010.webp"
    },
    {
        id: "TF001",
        codigo: "TF001",
        nombre: "Tornillo drywall para volcanita 6x1 pulg (100 un)",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Tornillos",
        marca: "Mamut",
        unidad: "Caja 100u",
        precio: 1490,
        stock: 100,
        descripcion: "Tornillos rosca fina punta broca para placas de yeso cartón.",
        imagen: "Imagenes/Productos/TF001.webp"
    },
    {
        id: "TF002",
        codigo: "TF002",
        nombre: "Tornillo drywall para volcanita 6x1 5/8 pulg (100 un)",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Tornillos",
        marca: "Mamut",
        unidad: "Caja 100u",
        precio: 1990,
        stock: 80,
        descripcion: "Tornillo drywall 1 5/8 pulgada para fijación doble placa.",
        imagen: "Imagenes/Productos/TF002.webp"
    },
    {
        id: "TF003",
        codigo: "TF003",
        nombre: "Taco plástico con tornillo 8 mm (50 un)",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Tacos",
        marca: "Fischer",
        unidad: "Bolsa 50u",
        precio: 2990,
        stock: 60,
        descripcion: "Tacos de expansión nylon Fischer con tornillos incluidos.",
        imagen: "Imagenes/Productos/TF003.webp"
    },
    {
        id: "TF004",
        codigo: "TF004",
        nombre: "Taco de expansión fischer SX 6 mm (100 un)",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Tacos",
        marca: "Fischer",
        unidad: "Bolsa 100u",
        precio: 3490,
        stock: 70,
        descripcion: "Tacos de nylon de 4 vías para concreto y ladrillo.",
        imagen: "Imagenes/Productos/TF004.webp"
    },
    {
        id: "TF005",
        codigo: "TF005",
        nombre: "Perno coche 3/8 x 3 pulg con tuerca (10 un)",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Pernos",
        marca: "Mamut",
        unidad: "Bolsa 10u",
        precio: 2490,
        stock: 50,
        descripcion: "Perno cabeza redonda cuello cuadrado para madera.",
        imagen: "Imagenes/Productos/TF005.webp"
    },
    {
        id: "TF006",
        codigo: "TF006",
        nombre: "Anclaje químico en cartucho 300 ml",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Anclajes",
        marca: "Fischer",
        unidad: "Unidad",
        precio: 12990,
        stock: 20,
        descripcion: "Resina sintética para fijaciones pesadas en hormigón.",
        imagen: "Imagenes/Productos/TF006.webp"
    },
    {
        id: "TF007",
        codigo: "TF007",
        nombre: "Silicona neutra transparente 280 ml",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Silicona",
        marca: "Sika",
        unidad: "Unidad",
        precio: 3990,
        stock: 90,
        descripcion: "Silicona neutra antihongos para sello de ventanas y baños.",
        imagen: "Imagenes/Productos/TF007.webp"
    },
    {
        id: "TF008",
        codigo: "TF008",
        nombre: "Silicona conector de baños blanca 280 ml",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Silicona",
        marca: "Sika",
        unidad: "Unidad",
        precio: 4290,
        stock: 80,
        descripcion: "Sellador de silicona blanca especial con fungicida.",
        imagen: "Imagenes/Productos/TF008.webp"
    },
    {
        id: "TF009",
        codigo: "TF009",
        nombre: "Espuma de poliuretano expansiva 750 ml",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Silicona",
        marca: "Sika",
        unidad: "Unidad",
        precio: 6990,
        stock: 40,
        descripcion: "Espuma expansiva aislante para marcos de puertas y huecos.",
        imagen: "Imagenes/Productos/TF009.webp"
    },
    {
        id: "TF010",
        codigo: "TF010",
        nombre: "Remache pop 4x12 mm (100 un)",
        categoria: "Tornillería y Fijaciones",
        subcategoria: "Remaches",
        marca: "Mamut",
        unidad: "Bolsa 100u",
        precio: 1890,
        stock: 100,
        descripcion: "Remaches de aluminio de golpe rápido para uniones metálicas.",
        imagen: "Imagenes/Productos/TF010.webp"
    },
    {
        id: "MT001",
        codigo: "MT001",
        nombre: "Pino cepillado 1x4 pulg x 3.2 m",
        categoria: "Madera y Tableros",
        subcategoria: "Pino",
        marca: "Arauco",
        unidad: "Pieza",
        precio: 3290,
        stock: 120,
        descripcion: "Listón de pino radiata cepillado para terminaciones y muebles.",
        imagen: "Imagenes/Productos/MT001.webp"
    },
    {
        id: "MT002",
        codigo: "MT002",
        nombre: "Pino cepillado 2x4 pulg x 3.2 m",
        categoria: "Madera y Tableros",
        subcategoria: "Pino",
        marca: "Arauco",
        unidad: "Pieza",
        precio: 6490,
        stock: 80,
        descripcion: "Pieza de pino seco cepillado para estructuras de carpintería.",
        imagen: "Imagenes/Productos/MT002.webp"
    },
    {
        id: "MT003",
        codigo: "MT003",
        nombre: "Pino bruto 2x3 pulg x 3.2 m",
        categoria: "Madera y Tableros",
        subcategoria: "Pino",
        marca: "Arauco",
        unidad: "Pieza",
        precio: 3890,
        stock: 150,
        descripcion: "Madera de pino bruto para tabiquería no a la vista.",
        imagen: "Imagenes/Productos/MT003.webp"
    },
    {
        id: "MT004",
        codigo: "MT004",
        nombre: "Tablero terciado estructural 15 mm 1.22x2.44 m",
        categoria: "Madera y Tableros",
        subcategoria: "Terciado",
        marca: "Arauco",
        unidad: "Plancha",
        precio: 19990,
        stock: 40,
        descripcion: "Plancha de madera terciada para pisos, amoblado y cubiertas.",
        imagen: "Imagenes/Productos/MT004.webp"
    },
    {
        id: "MT005",
        codigo: "MT005",
        nombre: "Tablero OSB estructural 11.1 mm 1.22x2.44 m",
        categoria: "Madera y Tableros",
        subcategoria: "OSB",
        marca: "LP",
        unidad: "Plancha",
        precio: 11990,
        stock: 60,
        descripcion: "Tablero OSB de virutas orientadas para techos y cierres.",
        imagen: "Imagenes/Productos/MT005.webp"
    },
    {
        id: "MT006",
        codigo: "MT006",
        nombre: "Placa MDF 15 mm 1.83x2.60 m",
        categoria: "Madera y Tableros",
        subcategoria: "MDF",
        marca: "Trupan",
        unidad: "Plancha",
        precio: 24990,
        stock: 25,
        descripcion: "Tablero de fibra de densidad media listo para lacar o pintar.",
        imagen: "Imagenes/Productos/MT006.webp"
    },
    {
        id: "MT007",
        codigo: "MT007",
        nombre: "Plancha Volcanita ST 10 mm 1.20x2.40 m",
        categoria: "Madera y Tableros",
        subcategoria: "Volcanita",
        marca: "Volcán",
        unidad: "Plancha",
        precio: 6290,
        stock: 100,
        descripcion: "Placa de yeso cartón estándar para cielos y tabiques secos.",
        imagen: "Imagenes/Productos/MT007.webp"
    },
    {
        id: "MT008",
        codigo: "MT008",
        nombre: "Plancha Volcanita RH (resistente humedad) 12.5 mm",
        categoria: "Madera y Tableros",
        subcategoria: "Volcanita",
        marca: "Volcán",
        unidad: "Plancha",
        precio: 9990,
        stock: 50,
        descripcion: "Placa de yeso cartón verduzca tratada contra la humedad de baños.",
        imagen: "Imagenes/Productos/MT008.webp"
    },
    {
        id: "SI001",
        codigo: "SI001",
        nombre: "Casco de seguridad blanco con arnés ratchet",
        categoria: "Seguridad Industrial",
        subcategoria: "Protección Cabeza",
        marca: "MSA",
        unidad: "Unidad",
        precio: 6990,
        stock: 40,
        descripcion: "Casco dieléctrico de alta resistencia con ajuste de perilla.",
        imagen: "Imagenes/Productos/SI001.webp"
    },
    {
        id: "SI002",
        codigo: "SI002",
        nombre: "Lentes de seguridad transparentes antiempañantes",
        categoria: "Seguridad Industrial",
        subcategoria: "Protección Ocular",
        marca: "3M",
        unidad: "Unidad",
        precio: 2490,
        stock: 100,
        descripcion: "Gafas de policarbonato con filtro UV y capa antirrayaduras.",
        imagen: "Imagenes/Productos/SI002.webp"
    },
    {
        id: "SI003",
        codigo: "SI003",
        nombre: "Guantes de pigmentados de algodón (par)",
        categoria: "Seguridad Industrial",
        subcategoria: "Protección Manos",
        marca: "Steelpro",
        unidad: "Par",
        precio: 990,
        stock: 200,
        descripcion: "Guantes antideslizantes para manipulación de cargas.",
        imagen: "Imagenes/Productos/SI003.webp"
    },
    {
        id: "SI004",
        codigo: "SI004",
        nombre: "Guantes de cuero cabritilla para maniobra (par)",
        categoria: "Seguridad Industrial",
        subcategoria: "Protección Manos",
        marca: "Steelpro",
        unidad: "Par",
        precio: 3490,
        stock: 80,
        descripcion: "Guantes de cuero suave para trabajos de alta sensibilidad táctil.",
        imagen: "Imagenes/Productos/SI004.webp"
    },
    {
        id: "SI005",
        codigo: "SI005",
        nombre: "Zapato de seguridad con puntera de acero T42",
        categoria: "Seguridad Industrial",
        subcategoria: "Calzado",
        marca: "Nazca",
        unidad: "Par",
        precio: 22990,
        stock: 15,
        descripcion: "Calzado de seguridad en cuero resistente a hidrocarburos.",
        imagen: "Imagenes/Productos/SI005.webp"
    },
    {
        id: "JA001",
        codigo: "JA001",
        nombre: "Manguera de jardín reforzada 1/2 pulg x 15 m",
        categoria: "Jardín",
        subcategoria: "Riego",
        marca: "Tramontina",
        unidad: "Unidad",
        precio: 8990,
        stock: 30,
        descripcion: "Manguera de 3 capas flexible anti-dobleces.",
        imagen: "Imagenes/Productos/JA001.webp"
    },
    {
        id: "JA002",
        codigo: "JA002",
        nombre: "Pistola de riego 7 funciones regulable",
        categoria: "Jardín",
        subcategoria: "Riego",
        marca: "Tramontina",
        unidad: "Unidad",
        precio: 3490,
        stock: 45,
        descripcion: "Boquilla ergonómica con múltiples tipos de chorro de agua.",
        imagen: "Imagenes/Productos/JA002.webp"
    },
    {
        id: "JA003",
        codigo: "JA003",
        nombre: "Tijera de podar bypass 8 pulgadas",
        categoria: "Jardín",
        subcategoria: "Herramientas",
        marca: "Bahco",
        unidad: "Unidad",
        precio: 12990,
        stock: 20,
        descripcion: "Tijera cortaramas de hojas de acero para plantas y arbustos.",
        imagen: "Imagenes/Productos/JA003.webp"
    },
    {
        id: "JA004",
        codigo: "JA004",
        nombre: "Pala punta redonda #2 con mango",
        categoria: "Jardín",
        subcategoria: "Herramientas",
        marca: "Corona",
        unidad: "Unidad",
        precio: 10990,
        stock: 18,
        descripcion: "Pala punta redonda de acero para excavación e instalación de plantas.",
        imagen: "Imagenes/Productos/JA004.webp"
    },
    {
        id: "JA005",
        codigo: "JA005",
        nombre: "Rastrillo 16 dientes con mango",
        categoria: "Jardín",
        subcategoria: "Herramientas",
        marca: "Corona",
        unidad: "Unidad",
        precio: 9490,
        stock: 16,
        descripcion: "Rastrillo reforzado de metal para limpieza y nivelación de césped.",
        imagen: "Imagenes/Productos/JA005.webp"
    }
];
// Arreglo para almacenar la lista de selección / carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Referencias a los contenedores HTML
let lista = document.getElementById("listaProductos");
let contenedorCarrito = document.getElementById("listaCarrito");
let totalElemento = document.getElementById("totalCarrito");

// -------------------------------------------------------------
// 1. Mostrar productos en el catálogo (Diseño exactamente igual al Admin)
// -------------------------------------------------------------
function mostrarProductos(arregloAMostrar = productos) {
    if (!lista) return;
    lista.innerHTML = "";
    
    if (arregloAMostrar.length === 0) {
        lista.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-muted fs-5">No hay productos disponibles en esta categoría.</p>
            </div>
        `;
        return;
    }

    for (let i = 0; i < arregloAMostrar.length; i++) {
        let prod = arregloAMostrar[i];
        
        lista.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${prod.imagen || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}" class="card-img-top" alt="${prod.nombre}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${prod.nombre}</h5>
                        <p class="card-text text-muted flex-grow-1 small">${prod.descripcion || (prod.marca + ' - ' + prod.unidad)}</p>
                        <div class="fs-5 fw-bold text-primary mb-3">$${prod.precio.toLocaleString("es-CL")} CLP</div>
                        
                        <!-- Botones de Acción del Usuario -->
                        <div class="d-flex gap-2 mt-auto">
                            <button class="btn btn-outline-secondary w-100 fw-semibold btn-sm" onclick="verDetalle('${prod.id}')">
                                <i class="bi bi-eye"></i> Detalle
                            </button>
                            <button class="btn btn-warning w-100 fw-semibold btn-sm text-dark" onclick="agregarAlCarrito('${prod.id}')">
                                <i class="bi bi-cart-plus"></i> Agregar
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
        `;
    }
}

// -------------------------------------------------------------
// FUNCIÓN MEJORADA: Filtra por categoría y subcategoría exacta
// -------------------------------------------------------------
function filtrarPorCategoria(categoriaBuscada) {
    if (categoriaBuscada === "Todos") {
        mostrarProductos(productos);
        return;
    }

    let busqueda = categoriaBuscada.toLowerCase().trim();

    let productosFiltrados = productos.filter(producto => {
        let cat = producto.categoria ? producto.categoria.toLowerCase().trim() : "";
        let sub = producto.subcategoria ? producto.subcategoria.toLowerCase().trim() : "";

        if (busqueda.includes("manual")) {
            return cat === "herramientas" && sub === "manuales";
        }

        if (busqueda.includes("eléctrica") || busqueda.includes("electrica")) {
            return cat === "herramientas" && (sub === "eléctricas" || sub === "electricas");
        }

        return cat.includes(busqueda) || busqueda.includes(cat) || sub.includes(busqueda);
    });

    mostrarProductos(productosFiltrados);
}

// -------------------------------------------------------------
// 2. Ver detalle de un producto
// -------------------------------------------------------------
function verDetalle(id) {
    let productoSeleccionado;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productoSeleccionado = productos[i];
            break;
        }
    }

    localStorage.setItem("producto", JSON.stringify(productoSeleccionado));
    window.location.href = "detalle.html";
}

// -------------------------------------------------------------
// 3. Funciones del Carrito / Selección
// -------------------------------------------------------------
function agregarAlCarrito(id) {
    let productoSeleccionado;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === id) {
            productoSeleccionado = productos[i];
            break;
        }
    }

    carrito.push(productoSeleccionado);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    if (!contenedorCarrito) return;
    contenedorCarrito.innerHTML = "";
    let total = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = "<p class='text-muted my-2'>No hay elementos en tu lista de selección.</p>";
    } else {
        for (let i = 0; i < carrito.length; i++) {
            total += carrito[i].precio;
            contenedorCarrito.innerHTML += `
                <div class="d-flex justify-content-between align-items-center border-bottom py-2">
                    <span>📌 <strong>${carrito[i].nombre}</strong> - $${carrito[i].precio.toLocaleString("es-CL")}</span>
                    <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${i})">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
            `;
        }
    }

    if (totalElemento) {
        totalElemento.textContent = total.toLocaleString("es-CL");
    }
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
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