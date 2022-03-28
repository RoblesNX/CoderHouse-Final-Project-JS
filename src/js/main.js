// Array de productos
const productos = [
    { id: 288588, titulo: "Silla Gris", precio: 13640, stock: 100, imagen: 'https://i.imgur.com/Y5KTMgQ.jpg'},
    { id: 185151, titulo: "Silla Negra", precio: 20990, stock: 10, imagen: 'https://i.imgur.com/822KF2D.jpg'},
    { id: 841181, titulo: "Silla Natural", precio: 13640, stock: 120, imagen: 'https://i.imgur.com/NrbOv64.jpg'},
    { id: 844811, titulo: "Silla Blanca", precio: 21690, stock: 200, imagen: 'https://i.imgur.com/jaHa3a6.jpg'},
];

// Llamo la función para generar la cards

cardsGeneradas(productos);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Agregar items al carrito y actualizar la cantidad
const agregarAlCarrito = (idProducto) => {

    // Buscar el producto a agregar.
    const productoCarrito = productos.find(producto => producto.id === idProducto);

    // Envío el producto al array de carrito.
    carrito.push(productoCarrito);

    // Actualizando el storage del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizo la cantidad de items en el HTML del carrito.
    document.getElementById("cantidad-carrito").innerHTML = carrito.length;
}

// Generar cards de productos
function cardsGeneradas(productosAMostrar) {
    let acumuladorCards = ``;
    productosAMostrar.forEach(producto => {
        acumuladorCards += `<div class="card h-100">
        <!-- Etiqueta de producto en "Sale" -->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Oferta</div>
        <!-- Imagen del producto -->
        <img class="card-img-top" src="${producto.imagen}" alt="..." />
        <!-- Detalles del producto -->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Nombre del procuto -->
                <h5 class="fw-bolder">${producto.titulo}</h5>
                <!-- Precio del producto-->
                $ ${producto.precio}
            </div>
        </div>
        <!-- Acciones en el proucto -->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <button 
            onclick="agregarAlCarrito(${producto.id})"
            class="btn btn-outline-dark mt-auto" href="#">
            Agregar al carrito
            </button>
            </div>
        </div>
    </div>`
    })
    agregarCardsEnHTML(acumuladorCards);
}

// Insertar cards en el HTML
function agregarCardsEnHTML(cards) {
    document.getElementById("grupo-de-cards").innerHTML = cards;
};

// Buscar productos
function buscarProducto() {
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();
    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    cardsGeneradas(productosEncontrados);
}

// Ejecutar búsqueda cuando presione enter en barra de búsqueda

const imputBusqueda = document.getElementById("producto-buscado");

imputBusqueda.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("boton-buscar").click();
    }
});

//////////////////////////////////////////////////////////