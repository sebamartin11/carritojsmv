// Modal Del Carrito
const pintarCarrito = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
                <h3 class="modal-header-title">Carrito</h3>
                `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h3");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () =>{
        modalContainer.style.display = "none"
    });

    modalHeader.append(modalbutton);

    carrito.forEach ((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img class="card-img-top" src=${producto.img} alt="">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <span class="restar">-</span>
        <p>Cantidad:${producto.cantidad}</p>
        <span class="sumar">+</span>
        <p>Total:${producto.cantidad * producto.precio}</p>
        <span class="delete-product">❌</span>
        `;
    
    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () =>{
        if(producto.cantidad !== 1){
            producto.cantidad--;
        }
        saveLocal();
        pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () =>{
        producto.cantidad++;
        saveLocal();
        pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
        eliminarProducto(producto.id);
    });
    
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};    

verCarrito.addEventListener("click", pintarCarrito);

// Eliminar productos
const eliminarProducto = (id) => {
const foundId = carrito.find((element) => element.id === id);

carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
    });

    carritoCounter();
    saveLocal();
    pintarCarrito();
};



// contador del carrito
const carritoCounter = () =>{
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

    
};
carritoCounter();

