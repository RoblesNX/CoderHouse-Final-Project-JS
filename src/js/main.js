// Llamado a la función generadora de las cards del catálogo de productos

generarCardsHTML(productos);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Agregar items al carrito y actualizar la cantidad
function agregarAlCarrito (idProducto){

    // Buscar el producto a agregar.
    const productoCarrito = productos.find(producto => producto.id === idProducto);

    // Envío el producto al array de carrito.
    carrito.push(productoCarrito);

    // Actualizando el storage del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizo la cantidad de items en el HTML del carrito.
    document.getElementById("cantidad-carrito").innerHTML = carrito.length;

    // Sweet alert
    swal({
        title: `Agregaste ${productoCarrito.nombre} a tu carrito`,
        text: "Ya casi es tuyo!",
        icon: "success",
        button: "Continuar comprando!",
      });
}
/////////////////////////////////////////////////////////

