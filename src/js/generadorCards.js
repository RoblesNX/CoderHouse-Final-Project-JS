/////////////////// DECLARO LAS FUNCIONES ////////////////

// Función creadora de mis cards de productos

const generarCardsHTML = (arrayARecorrer) => {
    let acumulador = ``;
    arrayARecorrer.forEach((producto) => {
        acumulador += `
        <div class="card h-100 mb-3">
        <!-- Etiqueta de producto en "Sale" -->
        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Black-Friday</div>
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
            class="btn btn-outline-dark mt-auto" href="#">
            Agregar al carrito
            </button>
            </div>
        </div>
    </div>`
    });
    agregarCardsEnHTML(acumulador);
}

// Función que inserta el contenido de cada card en el HTML

function agregarCardsEnHTML(cards) {
document.getElementById("grupo-de-cards").innerHTML = cards;
};