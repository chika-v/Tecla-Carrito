//-----------------------------------------------------------------------------
let products = document.getElementById("products");
let carrito = JSON.parse(localStorage.getItem("car")) || [];
//-----------------------------------------------------------------------------
async function traerProductos() {
    const url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1144"
    const response = await fetch(url)
    const parsedResponse = await response.json()
    return parsedResponse
}
//-----------------------------------------------------------------------------
async function addCar(a) {
    const { thumbnail, title, price, id, address, attributes } = a
    let pos = carrito.findIndex(art => art.id === id);
    let msg = "agregado";
    if (pos !== -1) {
        const { cantidad } = carrito[pos];
        carrito.push({
            ...carrito[pos],
            cantidad: cantidad + 1
        })
        msg = "actualizado";
    } else {
        carrito.push({
            thumbnail,
            title,
            price,
            id,
            address,
            attributes,
            cantidad: 1
        })
    }
    alert(`${title} ${msg} correctamente.`)
    localStorage.setItem("car", JSON.stringify(carrito))
}
//-----------------------------------------------------------------------------
async function deleteCar(id) {
    let pos = carrito.findIndex(art => art.id === id);
    const { title } = carrito[pos]
    alert(`${title} eliminado correctamente.`)
    carrito.slice(pos, 1);
    localStorage.setItem("car", JSON.stringify(carrito))
}
//-----------------------------------------------------------------------------
async function mostrarProductos() {
    const productos = await traerProductos();
    const { results } = productos;
    results.map((doc) => {
        const { thumbnail, title, price } = doc
        var contenedor = document.createElement("div");
        contenedor.setAttribute("class", "producto_individual");
        let producto = `
        <div class="card" style="width: 18rem; margin-top: 20px;">
            <img src="${thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">$${price}</p>
                <button class="btn btn-primary" onclick='addCar(${JSON.stringify(doc)})'><i class="fas fa-cart-plus"></i></button>
            </div>
        </div>`;
        contenedor.innerHTML += producto
        products.appendChild(contenedor)
    })
}
//-----------------------------------------------------------------------------
mostrarProductos()
//-----------------------------------------------------------------------------
async function traerCategorias() {
    const url = "https://api.mercadolibre.com/categories/MLM1144"
    const response = await fetch(url)
    const parsedResponse = await response.json()
    return parsedResponse
}
//-----------------------------------------------------------------------------
let listaDeCategorias = document.getElementById("videojuegos");
//-----------------------------------------------------------------------------
async function mostrarCategorias() {
    const categorias = await traerCategorias()
    const { children_categories } = categorias
    children_categories.map((doc, x) => {
        const { name } = doc
        var contenedor = document.createElement("p")
        contenedor.setAttribute("id", "c" + x);
        contenedor.setAttribute("class", "sub_categoria")
        contenedor.textContent = name
        listaDeCategorias.appendChild(contenedor)
    })
}
//-----------------------------------------------------------------------------
mostrarCategorias()
//-----------------------------------------------------------------------------

