// For para añadir los productos
let products = document.getElementById("products");
async function traerProductos () {
    const url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1144"
    const response = await fetch(url)
    const parsedResponse = await response.json()
 
    return parsedResponse
}
async function mostrarProductos() {
    const productos = await traerProductos()
    const productosObtenidos = productos.results
    console.log(productosObtenidos)
    for (let i = 0; i < productosObtenidos.length; i++) {
        console.log(productosObtenidos[i])
        var productoObtenido = productosObtenidos[i]
        var contenedor = document.createElement("div");
        contenedor.setAttribute("class", "producto_individual" );
        var algunTexto = "Algún texto";
        let producto = `
        <div class="card" style="width: 18rem; margin-top: 20px;">
            <img src="${productoObtenido.thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${productoObtenido.title}</h5>
                <p class="card-text">$${productoObtenido.price}</p>
                <a href="#" class="btn btn-primary"> <i class="fas fa-cart-plus"></i></a>
            </div>
        </div>`;
        contenedor.innerHTML += producto
        products.appendChild(contenedor)
     }
     
}
mostrarProductos()

 async function traerCategorias(){
     const url = "https://api.mercadolibre.com/categories/MLM1144"
     const response = await fetch(url)
     const parsedResponse = await response.json()
  
     return parsedResponse
 }

 let listaDeCategorias= document.getElementById("videojuegos");

 async function mostrarCategorias(){
     const  categorias = await traerCategorias()
     const categoriasMorras = categorias.children_categories
     for (let x = 0; x < categoriasMorras.length; x++){
         const sub_categoria = categoriasMorras[x]
        var contenedor = document.createElement("p")
        contenedor.setAttribute("id", "c" + x);
        contenedor.setAttribute("class", "sub_categoria")
        contenedor.textContent = sub_categoria.name
        listaDeCategorias.appendChild(contenedor)
     }

 }
 
 mostrarCategorias()


