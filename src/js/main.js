// Array de carrito
const carrito = [];

// Array de productos
const productos = [
    { id: 1, titulo: "Silla Gris", precio: 13640, stock: 100, imagen: './src/img/silla-gris.jpeg' },
    { id: 2, titulo: "Silla Negra", precio: 20990, stock: 10, imagen: './src/img/silla-negra.jpeg' },
    { id: 3, titulo: "Silla Natural", precio: 13640, stock: 120, imagen: './src/img/silla-natural.jpeg' },
    { id: 4, titulo: "Silla Blanca", precio: 21690, stock: 200, imagen: './src/img/silla-blanca.jpeg' },
];

// Llamo la función para generar la cards

cardsGeneradas(productos);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Agregar items al carrito y actualizar la cantidad
const agregarAlCarrito = (idProducto) => {
    const productoCarrito = productos.find(producto => producto.id === idProducto);
    carrito.push(productoCarrito);
    document.getElementById("cantidad-carrito").innerHTML = carrito.length;
}

// Generar cards de productos
function cardsGeneradas() {
    let acumuladorCards = ``;
    productos.forEach(producto => {
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

//////////////////////////////////////////////////////////