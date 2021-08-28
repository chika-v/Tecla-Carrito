async function getProducto(producto) {
    let url = "https://api.mercadolibre.com/sites/MLA/categories";
     let resp = await fetch(url);
     const data = await resp.json();
      console.log(data)
}

getProducto()
