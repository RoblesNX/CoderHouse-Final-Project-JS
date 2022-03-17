// Array de productos
const productos = [
    { id: 1, titulo: "Silla Andina", precio: 13640, stock: 100 },
    { id: 2, titulo: "Silla Aruba", precio: 20990, stock: 10 },
    { id: 3, titulo: "Silla Bélgica", precio: 13640, stock: 120 },
    { id: 4, titulo: "Silla Berlín", precio: 21690, stock: 200 },
];

// Array de carrito
const carrito = [];

// Declaro variables

let total = 0;
let comprar = 0;

// Consulto que producto quiere agergar al carrito


if (comprar !== 2 || carrito.length <= 4 ) {
        const seleccionProducto = prompt(`Ingrese el producto que desea agregar al carrito:
    1. ${productos[0].titulo}
    2. ${productos[1].titulo}
    3. ${productos[2].titulo}
    4. ${productos[3].titulo}
    `);

        switch (seleccionProducto) {
            case "1":
                agregarAlCarrito(productos[0].titulo);
                alert(`Actualmente su carrito contiene estos productos ${productos[0].titulo}`);
                total += productos[0].precio;
                break;
            case "2":
                agregarAlCarrito(productos[1].titulo);
                alert(`Actualmente su carrito contiene estos productos ${productos[1].titulo}`);
                total += productos[1].precio;
                break;
            case "3":
                agregarAlCarrito(productos[2].titulo);
                alert(`Actualmente su carrito contiene estos productos ${productos[2].titulo}`);
                total += productos[2].precio;
                break;
            case "4":
                agregarAlCarrito(productos[3].titulo);
                alert(`Actualmente su carrito contiene estos productos ${productos[3].titulo}`);
                total += productos[3].precio;
                break;
            default:
                alert(`Ingrese una opción correcta para continuar`)
        }

        comprar = prompt(`Desea seguir comprando?
        1. Si
        2. No
        `)
}

alert(`El total de su compra es $ ${total}`);

for (let i = 0; i <= carrito.length; i++) {
    console.log(carrito[i].titulo);
}

/////////////////// DECLARO LAS FUNCIONES ////////////////

function agregarAlCarrito(titulo) {
    carrito.push(titulo);
}

//////////////////////////////////////////////////////////