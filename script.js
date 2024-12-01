fetch("./db.json").then(async function(resonce){
    const result = await resonce.json()
    console.log(result)
    let container = document.getElementById('items')
    
    for(let product of result.products){
        container.innerHTML += `
        <div class="items">
        <h3>${product.printer}</h3>
        <img src="${product.ping}">
        </div>
        `
    }
})