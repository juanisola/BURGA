let contador = document.getElementById("contador");
let pagar = document.getElementById("totalpagar");
let descuento = document.getElementById("descuento");
let aplicado = false
let domicilio = document.getElementById("envio");

function agregarsmash(){
    if(aplicado ===true){
        pagar.textContent=parseInt(pagar.textContent)/0.9;
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent = parseInt(pagar.textContent) + 14000;
        aplicado = false;
        alert("El descuento ya no esta aplicado, porfavor ingresarlo devuelta");
    }
    else{
    contador.textContent = parseInt(contador.textContent) + 1;
    pagar.textContent = parseInt(pagar.textContent) + 14000;
    }
}

function agregarclasica(){
    if(aplicado ===true){
        pagar.textContent=parseInt(pagar.textContent)/0.9;
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent = parseInt(pagar.textContent) + 10000;
        aplicado = false;
        alert("El descuento ya no esta aplicado, porfavor ingresarlo devuelta");
    }
    else{
    contador.textContent = parseInt(contador.textContent) + 1;
    pagar.textContent = parseInt(pagar.textContent) + 10000;
    }
}

function agregarurbano(){
    if(aplicado ===true){
        pagar.textContent=parseInt(pagar.textContent)/0.9;
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent = parseInt(pagar.textContent) + 8500;
        aplicado = false;
        alert("El descuento ya no esta aplicado, porfavor ingresarlo devuelta");
    }
    else{
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent = parseInt(pagar.textContent) + 8500;
    }
}


function aplicardescuento(){
    if(descuento.value === "BURGA10" && aplicado === false){
        pagar.textContent = parseInt(pagar.textContent) * 0.9;
        aplicado = true;
    }
    else if (aplicado === true) {
        alert("Ya hay un descuento aplicado");
    }
}


domicilio.addEventListener("change", function() {
    if(domicilio.checked){
        if (aplicado === true){
            pagar.textContent=parseInt(pagar.textContent)/0.9;
            pagar.textContent = parseInt(pagar.textContent) + 1200;
            aplicado = false;
            alert("El descuento ya no esta aplicado, porfavor ingresarlo devuelta");
        }
        else{
            pagar.textContent = parseInt(pagar.textContent) + 1200;
        }
    }
    else {
        if (aplicado === true){
            pagar.textContent=parseInt(pagar.textContent)/0.9;
            pagar.textContent = parseInt(pagar.textContent) - 1200;
            aplicado = false;
            alert("El descuento ya no esta aplicado, porfavor ingresarlo devuelta");
        }
        else{
        pagar.textContent = parseInt(pagar.textContent) - 1200;
        }
    }
});