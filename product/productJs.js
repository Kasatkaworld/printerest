let Name = document.getElementById("name")
let Price = document.getElementById("price")
let Img = document.getElementById("img")
let disc = document.getElementById("description")
console.log(Img)
let id = 1
fetch("../db.json").then(async function(responce){
    console.log(responce)
    const result = await responce.json()
    
    for (let prod of result.products) {
        if (id ==  prod.id) {
            Name.innerText = prod.printer
            Price.innerText = prod.price
            Img.src = prod.ping
            disc.innerText = prod.description
        }
        
    }
})