// Traigo el valor en storage del carrito de productos.
let carrito = validarStorageCarrito();
let precioTotal = 0;

// Actualizo el total del carrito en función de los items agregados.
totalCarrito(carrito);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Inicio el carrito y compruebo si hay un carrito previamente guardado
function validarStorageCarrito() {
    if (localStorage.getItem("carrito") != null) {
        const storageProductos = JSON.parse(localStorage.getItem("carrito"));
        return storageProductos;
    } else {
        return [];
    }
}

// Actualizo la cantidad de items en el HTML del carrito.
document.getElementById("cantidad-carrito").innerHTML = carrito.length;

// Recorro el array  y sumo los precios en una variable.
function totalCarrito(ArrayDeCarrito) {
    for (let i = 0; i < ArrayDeCarrito.length; i++) {
        precioTotal += ArrayDeCarrito[i].precio;
    }
}

