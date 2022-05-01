// Creo mis cards de productos en el HTML
const generarCardsHTML = (arrayARecorrer) => {
    let acumulador = ``;
    arrayARecorrer.forEach((producto) => {
        acumulador += `
        <div class="card h-100 mb-3">
        <!-- Etiqueta de producto en "Sale" -->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">20% OFF</div>
        <!-- Imagen del producto -->
        <img class="card-img-top mt-5" src="${producto.imagen}" alt="..." />
        <!-- Detalles del producto -->
        <div class="card-body p-3">
            <div class="text-center">
                <!-- Nombre del procuto -->
                <h5 class="fw-bolder">${producto.nombre}</h5>
                <!-- Precio del producto-->
                $ ${producto.precio}
            </div>
        </div>
        <!-- Acciones en el proucto -->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            <button 
            onclick="agregarAlCarrito(${producto.id})"
            class="btn btn btn-warning mt-auto" href="#">
            Agregar al carrito
            </button>
            </div>
            <div class="text-center mt-2">
            <button onclick="detalleProducto(${producto.id})" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Detalles del producto
            </button>

            </div>
        </div>
    </div>`
    });
    agregarCardsEnHTML(acumulador);
}

// Inserto el contenido de cada card en el HTML
function agregarCardsEnHTML(cards) {
document.getElementById("grupo-de-cards").innerHTML = cards;
};