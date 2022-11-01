// Ecommerce
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito")
let krachitos = document.getElementById("krach");
let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

// Funcion para productos Krachitos
function productosKrach() {
    for(const producto of krach){
    krachitos.innerHTML += `
    <div class="card col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in-left">
        <img class="card-img-top krach" src=${producto.img} alt="tradicional-krachitos">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <button id="comprar${producto.id}" href="#" class="btn btn-primary">Comprar</button>
        </div>
    </div>
    `;
}
    krach.forEach((producto)=>{
        document.getElementById(`comprar${producto.id}`).addEventListener("click", function(){
        let repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);

        if(repeat){
            carrito.map((prod) => {
                if(prod.id === producto.id){
                    prod.cantidad++;
                }
            });}else{
                (`${producto.id}`)
            }
            
            agregarAlCarrito(producto);
            carritoCounter();
        })
    })
};
productosKrach();

// Variable y Funcion para productos 5 Hispanos
let cafeHispanos = document.getElementById("cafeHispanos");

function productosHispanos() {
    for(const producto of hispanos){
    cafeHispanos.innerHTML += `
    <div class="card col-sm-12 col-md-6 col-lg-3" data-aos="zoom-in-left">
        <img class="card-img-top hispanos" src=${producto.img} alt="tradicional-krachitos">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <button id="comprar${producto.id}" href="#" class="btn btn-primary">Comprar</button>
        </div>
    </div>
    `;
    }
    
    hispanos.forEach((producto)=>{
        document.getElementById(`comprar${producto.id}`).addEventListener
        ("click", function(){
            repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);

            if(repeat){
                carrito.map((prod) => {
                    if(prod.id === producto.id){
                        prod.cantidad++;
                    }
                });
            }else{
                (`${producto.id}`);
            }
            agregarAlCarrito(producto);
            carritoCounter();
        });
    });
};
productosHispanos();

function agregarAlCarrito(productoAgregado){
    carrito.push(productoAgregado);
    carritoCounter();
    saveLocal();
    // alert("Producto: "+productoAgregado.nombre+", se ha agregado al carrito correctamente.")
    // AGREGAR UN SWEET HOME PARA AVISAR AL USUARIO EL PRODUCTO COMPRADO
};


// set item (LOCAL STORAGE)
const saveLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


// get item (SESSION STORAGE)
JSON.parse(localStorage.getItem("carrito"));


















