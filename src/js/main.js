// Array de productos
const productos = [
    { id: 1, titulo: "Silla Gris", precio: 13640, stock: 100, imagen: './src/img/silla-gris.jpeg' },
    { id: 2, titulo: "Silla Negra", precio: 20990, stock: 10, imagen: './src/img/silla-negra.jpeg' },
    { id: 3, titulo: "Silla Natural", precio: 13640, stock: 120, imagen: './src/img/silla-natural.jpeg' },
    { id: 4, titulo: "Silla Blanca", precio: 21690, stock: 200, imagen: './src/img/silla-blanca.jpeg' },
];

// Array de carrito
const carrito = [];

// Declaro variables

let total = 0;
let comprar = 0;

// Consulto que producto quiere agergar al carrito

// do {
//     const seleccionProducto = prompt(`Ingrese el producto que desea agregar al carrito:
//     1. ${productos[0].titulo}
//     2. ${productos[1].titulo}
//     3. ${productos[2].titulo}
//     4. ${productos[3].titulo}
//     `);

//         switch (seleccionProducto) {
//             case "1":
//                 agregarAlCarrito(productos[0]);
//                 alert(`Usted acaba de agregar este producto a su carrito: ${productos[0].titulo}`);
//                 total += productos[0].precio;
//                 break;
//             case "2":
//                 agregarAlCarrito(productos[1]);
//                 alert(`Usted acaba de agregar este producto a su carrito: ${productos[1].titulo}`);
//                 total += productos[1].precio;
//                 break;
//             case "3":
//                 agregarAlCarrito(productos[2]);
//                 alert(`Usted acaba de agregar este producto a su carrito: ${productos[2].titulo}`);
//                 total += productos[2].precio;
//                 break;
//             case "4":
//                 agregarAlCarrito(productos[3]);
//                 alert(`Usted acaba de agregar este producto a su carrito: ${productos[3].titulo}`);
//                 total += productos[3].precio;
//                 break;
//             default:
//                 alert(`Ingrese una opción correcta para continuar`);
//         }

//         comprar = prompt(`Desea seguir comprando?
//         1. Si
//         2. No
//         `);
// }
// while (comprar !== "2");

// Muestro por consola todos los items agregados al carrito

carrito.forEach(producto => {
    console.log(producto.titulo);
    console.log(producto.precio);
})

// Muestro el precio total del carrito

console.log(`El importe total de su compra es $ ${total}`);


// Llamo la función para generar la cards

cardsGeneradas(productos);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
}

// Generar cards de productos
function cardsGeneradas() {
    let acumuladorCards = ``;
    productos.forEach(producto => {
        acumuladorCards += `<div class="card h-100">
        <!-- Etiqueta de producto en "Sale" -->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
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
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Agregar al carrito</a></div>
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



