// Traigo el valor en storage del carrito de productos.

let carrito = validarStorageCarrito();

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