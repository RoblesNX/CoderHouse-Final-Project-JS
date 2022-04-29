// Traigo el valor en storage del carrito de productos.

let carrito = validarStorageCarrito();
let precioTotal = 0;

// Actualizo el total del carrito en función de los items agregados.

const totalCarrito = (arrayCarrito) => {
    precioTotal = 0;
    arrayCarrito.forEach((producto) => {
        precioTotal += producto.cantidadEnCarrito * producto.precio;
    }
    );
}

totalCarrito(carrito);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Inicio el carrito y compruebo si hay un carrito previamente guardado en el storage local.

function validarStorageCarrito() {
    if (localStorage.getItem("carrito") != null) {
        const storageProductos = JSON.parse(localStorage.getItem("carrito"));
        return storageProductos;
    } else {
        return [];
    }
}

// // Actualizo la cantidad de items en el HTML del carrito en base a la cantidad de items en mi array de carrito.

let acumuladorItems = 0;

const actualizarItemsCarrito = (arrayCarrito) => {
    acumuladorItems = 0;
    arrayCarrito.forEach((producto) => {
        acumuladorItems += producto.cantidadEnCarrito;
    }
    );
    document.getElementById("cantidad-carrito").innerHTML = acumuladorItems;

}

actualizarItemsCarrito(carrito);


function agregarAlCarrito(idProducto) {
    const productoEnCarrito = carrito.find(producto => producto.id == idProducto);
    const productoEnCatalogo = productos.find(producto => producto.id == idProducto);

    const productoParaAgregar = productoEnCarrito || productoEnCatalogo;

    if (productoParaAgregar.stock > productoParaAgregar.cantidadEnCarrito) { // ¿hay stock?
        productoParaAgregar.cantidadEnCarrito++;
        productoEnCarrito == undefined && carrito.push(productoParaAgregar);
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizo el carrito en storage
        actualizarItemsCarrito(carrito);

        // Sweet alert anunciando el producto que se acaba de agregar al carrito
        swal({
            title: `Agregaste ${productoEnCatalogo.nombre} a tu carrito`,
            text: "Ya casi es tuyo!",
            icon: "success",
            button: "Continuar comprando!",
        });
    } else {
        // Sweet alert anunciando el producto que se acaba de agregar al carrito
        swal({
            title: `No hay stock del producto ${productoEnCatalogo.nombre}`,
            text: "Lo sentimos!",
            icon: "error",
            button: "Continuar comprando!",
        });
    }
}

function reducirCarrito(idProducto) {
    const productoARemover = carrito.find(producto => producto.id == idProducto);

    if (productoARemover.cantidadEnCarrito > 1) {

        productoARemover.cantidadEnCarrito--;
        productoARemover.cantidadEnCarrito == 0 && carrito.splice(carrito.indexOf(productoARemover), 1)
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizo el carrito en storage
        actualizarItemsCarrito(carrito);
    }
} 


function quitarCarrito(idProducto) {
    const productoARemover = carrito.find(producto => producto.id == idProducto);
        productoARemover.cantidadEnCarrito = 0;
        carrito.splice(carrito.indexOf(productoARemover), 1)
        localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizo el carrito en storage
        actualizarItemsCarrito(carrito);
    }
