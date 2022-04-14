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

    // Sweet alert
    swal({
        title: `Agregaste ${productoCarrito.titulo} a tu carrito`,
        text: "Ya casi es tuyo!",
        icon: "success",
        button: "Continuar comprando!",
      });

}

const generarCardsHTML = (arrayARecorrer) => {
    let acumulador = ``;
    arrayARecorrer.forEach((elemento) => {
        acumulador += `
        <div class="card h-100">
        <!-- Etiqueta de producto en "Sale" -->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Oferta</div>
        <!-- Imagen del producto -->
        <img class="card-img-top" src="${elemento.image}" alt="..." />
        <!-- Detalles del producto -->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Nombre del procuto -->
                <h5 class="fw-bolder">${elemento.title}</h5>
                <!-- Precio del producto-->
                $ ${elemento.price}
            </div>
        </div>
        <!-- Acciones en el proucto -->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <button 
            onclick="agregarAlCarrito(${elemento.id})"
            class="btn btn-outline-dark mt-auto" href="#">
            Agregar al carrito
            </button>
            </div>
        </div>
    </div>`
    });
    agregarCardsEnHTML(acumulador);
}

fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => generarCardsHTML(data))

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

/////////////////////////////////////////////////////////

