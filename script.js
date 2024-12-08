let cartProd = document.getElementById("cart-products")

fetch("./db.json").then(async function(resonce){
    const result = await resonce.json()
    console.log(result)
    let container = document.getElementById('items')
    
    for(let product of result.products){
        container.innerHTML += `
        <div class="item">
        <h3>${product.printer}</h3>
        <img src="${product.ping}">
        <p id="desc">${product.description}</p>
        <a href=""><p>Seller Profile</p></a>
        <button>$${product.price}</button>
        </div>
        `
        console.log(product)
    }
    
})
function openCart(){
    cartProd.classList.toggle('hide')
}