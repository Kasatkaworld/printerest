let cartProd = document.getElementById("cart-products")
let prodList = []
let dataProducts

fetch("./db.json").then(async function(resonce){
    const result = await resonce.json()
    console.log(result)
    let container = document.getElementById('items')
    dataProducts = result.products
    for(let product of result.products){
        container.innerHTML += `
        <div class="item">
        <h3>${product.printer}</h3>
        <img src="${product.ping}">
        <p id="desc">${product.description}</p>
        <a href=""><p>Seller Profile</p></a>
        <button onclick="addProductToCart(${product.id})">$${product.price}</button>
        </div>
        `
        console.log(product)
    }
    if(localStorage.getItem("cart")){
        prodList = JSON.parse(localStorage.getItem("cart"));
        updateProdList();
    }
})

function openCart(){
    cartProd.classList.toggle('hide')
}
function addProductToCart(id){
    if(!prodList.includes(id)){
        prodList.push(id)
        updateProdList()
    }
    
}
function clearList(){
    prodList =[]
    updateProdList()
}
function updateProdList(){
    localStorage.setItem("cart", JSON.stringify(prodList));
    if(prodList.length == 0){
        cartProd.innerHTML = "<span>Cart is empty</span>"   
    }else{
        cartProd.innerHTML = ""
        let total = 0
        for (let i of prodList) {
            let product = dataProducts.find(x => x.id === i)
            console.log(prodList)
            cartProd.innerHTML += `<div>
            <img src="${product.ping}" width="20px">
            <span>${product.printer}|$${product.price}</span>
            <hr>
            </div>`
            total += parseInt(product.price) 
            
        }
        cartProd.innerHTML+=`<div>Total Price:$${total}</div><button onclick='clearList()'>Buy All</button>`
    }
    
    
}
