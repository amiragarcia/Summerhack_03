let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");

let section01 = document.getElementById("section01");
let section02 = document.getElementById("section02");
let section03 = document.getElementById("section03");

let product = document.getElementById("product");
let category = document.getElementById("category");
let description = document.getElementById("description");

function showCard(productValue, descriptionValue, categoryValue){
        section03.style.display= 'none';
        section04.style.display= 'flex';
        let card = `<div class="card">
                    <svg id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>
                    <img src="${categoryValue}" alt="">
                    <h3>${productValue}</h3>
                    <p>${descriptionValue}</p>
                    </div>`
        section04.innerHTML = card;

        document.getElementById("close").addEventListener("click", function(){
            section04.style.display='none';
            section03.style.display='block';
        }) 
}

btn01.addEventListener('click', function(){
    if (section01.style.display==''){
        section01.style.display='none'
        section02.style.display='flex'
    }
})

btn02.addEventListener('click', function(){
    let productValue = product.value;
    let categoryValue = category.value;
    let descriptionValue = description.value;

    if (productValue != "" && categoryValue != ""){
        section02.style.display='none';
        section03.style.display='block';
        let item = `<div class="itemContainer">
                    <img src="${categoryValue}" alt="">
                    <p>${productValue}</p>
                    <svg id="detail" onclick="showCard('${productValue}', '${descriptionValue}', '${categoryValue}')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/></svg>
                    </div>`
        let listContainer = document.getElementById("listContainer");
        listContainer.innerHTML += item;
    }
    else{
        document.getElementById("message").innerHTML = "Añadí producto y seleccioná categoría.";
    }
})

btn03.addEventListener('click', function(){
    product.value = "";
    category.value = "";
    description.value = "";
    section03.style.display='none';
    section02.style.display='flex';
})


