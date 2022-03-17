// Array de productos
const productos = [
    { id: 1, titulo: "Silla Verde", precio: 13640, stock: 100 },
    { id: 2, titulo: "Silla Celeste", precio: 20990, stock: 10 },
    { id: 3, titulo: "Silla Azul", precio: 13640, stock: 120 },
    { id: 4, titulo: "Silla Amarilla", precio: 21690, stock: 200 },
];

// Array de carrito
const carrito = [];

// Declaro variables

let total = 0;
let comprar = 0;

// Consulto que producto quiere agergar al carrito

do {
    const seleccionProducto = prompt(`Ingrese el producto que desea agregar al carrito:
    1. ${productos[0].titulo}
    2. ${productos[1].titulo}
    3. ${productos[2].titulo}
    4. ${productos[3].titulo}
    `);

        switch (seleccionProducto) {
            case "1":
                agregarAlCarrito(productos[0]);
                alert(`Usted acaba de agregar este producto a su carrito: ${productos[0].titulo}`);
                total += productos[0].precio;
                break;
            case "2":
                agregarAlCarrito(productos[1]);
                alert(`Usted acaba de agregar este producto a su carrito: ${productos[1].titulo}`);
                total += productos[1].precio;
                break;
            case "3":
                agregarAlCarrito(productos[2]);
                alert(`Usted acaba de agregar este producto a su carrito: ${productos[2].titulo}`);
                total += productos[2].precio;
                break;
            case "4":
                agregarAlCarrito(productos[3]);
                alert(`Usted acaba de agregar este producto a su carrito: ${productos[3].titulo}`);
                total += productos[3].precio;
                break;
            default:
                alert(`Ingrese una opción correcta para continuar`);
        }

        comprar = prompt(`Desea seguir comprando?
        1. Si
        2. No
        `);
}
while (comprar !== "2");

// Muestro por consola todos los items agregados al carrito

carrito.forEach(producto => {
    console.log(producto.titulo);
    console.log(producto.precio);
})

// Muestro el precio total del carrito

console.log(`El importe total de su compra es $ ${total}`);

/////////////////// DECLARO LAS FUNCIONES ////////////////

function agregarAlCarrito(producto) {
    carrito.push(producto);
}

//////////////////////////////////////////////////////////