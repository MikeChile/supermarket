class Producto {
    constructor(codigoProducto, nombreProducto, marcaProducto, stock, precioUnitario, descuento) {
        this.codigoProducto = codigoProducto;
        this.nombreProducto = nombreProducto;
        this.marcaProducto = marcaProducto;
        this.stock = stock;
        this.precioUnitario = precioUnitario;
        this.descuento = descuento;
    }

    calcularPrecioFinal() {
        return this.precioUnitario - (this.precioUnitario * this.descuento / 100);
    }

    reducirStock(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
        } else {
            console.error("Stock insuficiente");
        }
    }

    obtenerPrecioConDescuento() {
        return this.calcularPrecioFinal();
    }
}


$(document).ready(function () {
    // Crear instancias de la clase Producto
    const productos = [
        new Producto(1, "Pan Marraqueta", "Panadería La Fama", 100, 1200, 5),
        new Producto(2, "Leche Entera", "Colun", 200, 950, 0),
        new Producto(3, "Arroz Largo", "San Gregorio", 150, 1200, 10),
        new Producto(4, "Azúcar", "Dulce de Chile", 50, 850, 0),
        new Producto(5, "Huevos XL", "Huevos San Pedro", 80, 2500, 10),
        new Producto(6, "Tomates", "Frutas del Valle", 200, 1500, 0),
        new Producto(7, "Manzanas Granny Smith", "Fruitland", 100, 2000, 5),
        new Producto(8, "Pollo Entero", "Aves del Sur", 50, 4500, 10),
        new Producto(9, "Carne de Vacuno", "Carnicería El Toro", 30, 8000, 15),
        new Producto(10, "Papas", "Papas del Norte", 150, 1200, 5),
        new Producto(11, "Zanahorias", "Verduras del Campo", 100, 1000, 0),
        new Producto(12, "Cebollas", "Cebollas El Huerto", 80, 1300, 0),
        new Producto(13, "Espaguetis", "Pastas La Italia", 60, 1800, 0),
        new Producto(14, "Salsas para Pasta", "Salsas Gourmet", 50, 2200, 5),
        new Producto(15, "Aceite de Oliva", "Aceitunas del Valle", 30, 3500, 0),
        new Producto(16, "Queso Cheddar", "Quesos La Granja", 40, 5000, 10),
        new Producto(17, "Yogurt Natural", "Yogurísimo", 80, 1200, 0),
        new Producto(18, "Cereal Integral", "Desayuno Feliz", 50, 2500, 5),
        new Producto(19, "Café Molido", "Café de la Casa", 60, 3000, 10),
        new Producto(20, "Té Verde", "Infusiones Chile", 30, 1500, 0),
        new Producto(21, "Harina de Trigo", "Harinas del Campo", 50, 1000, 0),
        new Producto(22, "Mantequilla", "Lácteos El Roble", 40, 2000, 5),
        new Producto(23, "Jugo de Naranja", "Jugos Frescos", 100, 1800, 10),
        new Producto(24, "Galletas de Vainilla", "Dulces del Valle", 80, 2200, 0),
        new Producto(25, "Chocolate en Tabletas", "Chocolates Andes", 60, 2800, 15),
        new Producto(26, "Cerveza Lager", "Cervecería Austral", 30, 3500, 5),
        new Producto(27, "Vino Tinto", "Vinos del Valle", 20, 8000, 10),
        new Producto(28, "Agua Mineral", "Agua de los Andes", 150, 1200, 0),
        new Producto(29, "Limones", "Frutas del Sur", 100, 2000, 0),
        new Producto(30, "Aguacates", "Hortalizas del Norte", 80, 2500, 5),
        new Producto(31, "Pechuga de Pollo", "Aves del Norte", 50, 4500, 10),
        new Producto(32, "Salchichas", "Carnes de Chile", 60, 3000, 0),
        new Producto(33, "Mermelada de Frutilla", "Frutales Chile", 40, 2000, 0),
        new Producto(34, "Ensalada de Pollo", "Comida Rápida", 30, 3500, 5),
        new Producto(35, "Pasta de Dientes", "Higiene Perfecta", 100, 1200, 0),
        new Producto(36, "Shampoo", "Higiene y Belleza", 80, 1500, 5),
        new Producto(37, "Jabón Líquido", "Cuidado Personal", 60, 1300, 0),
        new Producto(38, "Desodorante", "Protección Total", 40, 1800, 5),
        new Producto(39, "Papitas Fritas", "Snack Chileno", 100, 1500, 0),
        new Producto(40, "Refresco de Cola", "Bebidas Chilenas", 150, 1800, 0),
        new Producto(41, "Pizza Congelada", "Pizzas del Norte", 20, 5000, 10),
        new Producto(42, "Hamburguesas Congeladas", "Comida Express", 20, 5500, 0),
        new Producto(43, "Aceitunas Verdes", "Gourmet Chile", 30, 2500, 5),
        new Producto(44, "Papel Higiénico", "Higiene Básica", 48, 1200, 0),
        new Producto(45, "Servilletas", "Hogar Chile", 60, 1000, 0),
        new Producto(46, "Limpiador Multiusos", "Limpieza Eficaz", 40, 2200, 5),
        new Producto(47, "Detergente para Ropa", "Cuidado Textil", 50, 3000, 10),
        new Producto(48, "Cloro", "Higiene del Hogar", 30, 1500, 0),
        new Producto(49, "Sopa Instantánea", "Comida Rápida", 60, 1200, 0),
        new Producto(50, "Gaseosa Dietética", "Bebidas Sin Azúcar", 100, 2000, 0),
    ];


    // Inicialmente ocultar la tabla
    $('#tablaTodosProductos').hide();

    $('#mostrarProductos').click(function () {
        // Alternar la visibilidad de la tabla
        $('#tablaTodosProductos').toggle();

        // Mostrar los productos en la tabla solo si la tabla está visible
        if ($('#tablaTodosProductos').is(':visible')) {
            mostrarProductosEnTabla();
        }
    });

    // Función para mostrar productos en la tabla
    function mostrarProductosEnTabla() {

        // Ordenar productos alfabéticamente por nombre
        productos.sort((a, b) => a.nombreProducto.localeCompare(b.nombreProducto));

        // Limpiar la tabla antes de agregar productos
        const tbody = $('#tablaTodosProductos tbody');
        tbody.empty();

        // Insertar productos en la tabla
        productos.forEach(producto => {
            const precioConDescuento = producto.obtenerPrecioConDescuento();
            const row = `
                <tr>
                    <td>${producto.codigoProducto}</td>
                    <td>${producto.nombreProducto}</td>
                    <td>${producto.marcaProducto}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.precioUnitario}</td>
                    <td>${producto.descuento}%</td>
                    <td>${precioConDescuento.toFixed(0)}</td>
                </tr>
            `;
            tbody.append(row);
        });
    }

    $('#mostrarProductos').click(function () {
        mostrarProductosEnTabla();
    });

    // Abrir el modal para agregar un nuevo producto
    $('#abrirModalProducto').click(function () {
        $('#modalProducto').modal('show');
    });

    // Guardar un nuevo producto
    $('#guardarProducto').click(function () {
        const codigo = parseInt($('#codigoProducto').val(), 10);
        const nombre = $('#nombreProducto').val();
        const marca = $('#marcaProducto').val();
        const stock = parseInt($('#stockProducto').val(), 10);
        const precio = parseFloat($('#precioUnitario').val());
        const descuento = parseFloat($('#descuentoProducto').val()) || 0;

        if (codigo && nombre && marca && !isNaN(stock) && !isNaN(precio)) {
            const nuevoProducto = new Producto(codigo, nombre, marca, stock, precio, descuento);
            productos.push(nuevoProducto);

            // Actualizar la lista de opciones del buscador
            actualizarListaDeOpciones();

            // Actualizar la tabla automáticamente
            mostrarProductosEnTabla();

            // Cerrar el modal y limpiar el formulario
            $('#modalProducto').modal('hide');
            $('#formNuevoProducto')[0].reset();
        } else {
            alert("Por favor, complete todos los campos obligatorios.");
        }
    });

    function actualizarListaDeOpciones() {
        listaProductos.empty(); // Limpiar la lista

        // Agregar todos los productos a la lista de opciones
        productos.forEach(producto => {
            listaProductos.append(`
                <li class="list-group-item list-group-item-action" data-id="${producto.codigoProducto}">
                    ${producto.nombreProducto} - ${producto.marcaProducto} - $${producto.precioUnitario}
                </li>
            `);
        });
    }

    const buscarProducto = $('#buscarProducto');
    const listaProductos = $('#listaProductos');

    // Escuchar el evento de entrada en el campo de búsqueda
    buscarProducto.on('input', function () {
        const query = $(this).val().toLowerCase();
        listaProductos.empty(); // Limpiar la lista

        if (query) {
            // Filtrar productos que coincidan con la búsqueda por nombre, código o marca
            const resultados = productos.filter(producto =>
                producto.nombreProducto.toLowerCase().includes(query) ||
                producto.codigoProducto.toString().includes(query) ||
                producto.marcaProducto.toLowerCase().includes(query)
            );

            // Agregar los resultados a la lista de opciones
            resultados.forEach(producto => {
                listaProductos.append(`
                    <li class="list-group-item list-group-item-action" data-id="${producto.codigoProducto}">
                        ${producto.nombreProducto} - ${producto.marcaProducto} - $${producto.precioUnitario}
                    </li>
                `);
            });
        }
    });

    // Manejar clic en un elemento de la lista de productos
    listaProductos.on('click', 'li', function () {
        const productoId = $(this).data('id');
        const producto = productos.find(p => p.codigoProducto === productoId);

        if (producto) {
            if (producto.stock > 0) {
                const precioFinal = producto.calcularPrecioFinal();

                // Agregar fila con producto y precio a la tabla de seleccionados
                const fila = `
                    <tr>
                        <td>${producto.nombreProducto}</td>
                        <td>${precioFinal}</td>
                    </tr>
                `;
                $('#tablaProductosSeleccionados tbody').append(fila);

                // Actualizar el total
                let total = parseFloat($('#total').text());
                total += precioFinal;
                $('#total').text(total);

                // Reducir el stock
                producto.reducirStock(1);

                // Limpiar el campo de búsqueda y la lista
                buscarProducto.val('');
                listaProductos.empty();
            } else {
                alert("Stock insuficiente");
            }
        } else {
            alert("Producto no encontrado");
        }
    });

    // Botón para compactar la tabla
    $('#acciones').after('<button id="compactarTabla" class="btn btn-secondary mt-1 me-1" title="Compactar tablas"><i class="bx bx-list-check" ></i></button>');

    $('#compactarTabla').click(() => {
        // Alternar la clase 'table-sm' en la tabla
        $('#tablaTodosProductos').toggleClass('table-sm');
        // Alternar la clase 'table-sm' en la tabla
        $('#tablaProductosSeleccionados').toggleClass('table-sm');
    });

    // Botón para cambiar la disposición de las columnas
    $('#acciones').after('<button id="cambiarDisposicion" class="btn btn-danger ml-3 mt-1 me-2" title="Cambiar disposición"><i class="bx bx-grid-small" ></i></button>');

    $('#cambiarDisposicion').click(() => {
        $('.contenedorproducto').each(function () {
            $(this).toggleClass('col-md-12 col-md-6');
        });
    });
});

