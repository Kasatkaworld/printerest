let form = document.getElementById("form")
let api_key = "daa06142eb74891e922f7318c0f62e26190ed"
const url = "https://voidbase-f3af.restdb.io/rest/product";
const my_header = {
    "Content-Type": "application/json",
    "x-apikey": api_key,
    "cache-control": "no-cache",
   
}

// fetch(url, {
//     method: "GET",
//     headers:my_header
// })
async function sendData(e) {
    let data = JSON.stringify({
        "printer": e.target['name'].value,
        "price": e.target['price'].value,
        "ping": e.target['ping'].value,
        "description": e.target['desc'].value
    });


    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", api_key);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data)

    form.reset()
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = JSON.stringify({
        "printer": e.target['name'].value,
        "price": e.target['price'].value,
        "ping": e.target['ping'].value,
        "description": e.target['desc'].value
    });


    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-apikey", api_key);
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.send(data)

    form.reset()
  });