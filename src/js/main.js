// Llamado a la función generadora de las cards del catálogo de productos

generarCardsHTML(productos);

/////////////////// DECLARO LAS FUNCIONES ////////////////

// Agregar items al carrito y actualizar la cantidad
function agregarAlCarrito (idProducto){

    // Buscar el producto a agregar.
    const productoEnCatalogo = productos.find(producto => producto.id === idProducto);

    // // Busco si ya existe el producto en mi carrito.
    // const productoEnCarrito = carrito.find(producto => producto.id === idProducto); 

    // console.log(productoEnCatalogo);
    // console.log(productoEnCarrito);

    // if (productoEnCatalogo.id = productoEnCarrito.id) {
    //   productoEnCatalogo.cantidadEnCarrito++;
    // } else {
    // // Envío el producto al array de carrito.
    // productoEnCatalogo.cantidadEnCarrito++;
    // carrito.push(productoEnCatalogo);
    // }

    // Envío el producto al array de carrito.
    carrito.push(productoEnCatalogo);

    // Actualizando el storage del carrito
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizo la cantidad de items en el HTML del carrito.
    document.getElementById("cantidad-carrito").innerHTML = carrito.length;

    // Sweet alert
    swal({
        title: `Agregaste ${productoEnCatalogo.nombre} a tu carrito`,
        text: "Ya casi es tuyo!",
        icon: "success",
        button: "Continuar comprando!",
      });
}
/////////////////////////////////////////////////////////

