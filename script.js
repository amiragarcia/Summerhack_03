/*let addButton = document.getElementById("add");

let primeraPantalla = document.getElementById("primera-pantalla");

let texto = document.getElementById("texto");

let header = document.getElementById('header');

addButton.onclick= function(){
    if (primeraPantalla.style.backgroundColor=='blue'){
        primeraPantalla.style.backgroundColor='white'
        texto.style.color='black'
        header.style.display='none'
        let h1 = document.getElementById('h1')
        primeraPantalla.removeChild(h1)
    }else{
        primeraPantalla.style.backgroundColor='blue'
        texto.style.color='white'
        header.style.display='flex'
        crearHolaLucho()
    }
}

function crearHolaLucho(){
    let h1 = document.createElement('h1')
    h1.id="h1"
    h1.innerText = 'Hola Lucho'

    primeraPantalla.appendChild(h1)
}*/

let addButton = document.getElementById("add");
let formContainer = document.getElementById("form-container");
let welcome = document.getElementById("welcome");

let producto = document.getElementById("producto");
let enviar = document.getElementById("submit");
let lista = document.getElementById("lista");

addButton.addEventListener('click', function(){
    if (welcome.style.display==''){
        welcome.style.display='none'
        formContainer.style.display='block'
    }
})

enviar.addEventListener('click', function(){
    let comida = producto.value;
    let descripcion = descripcion.value;
    formContainer.style.display='none'
    lista.innerHTML = comida
})



    


