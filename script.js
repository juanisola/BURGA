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
    if(descuento.value !='BURGA10' && aplicado == false){
        alert("Porfavor ingrese un descuento valido.")
        document.getElementById("descuento").value = "";
    }

    if(descuento.value === "BURGA10" && aplicado === false){
        pagar.textContent = parseInt(pagar.textContent) * 0.9;
        aplicado = true;
    }
    else if (aplicado === true) {
        alert("Ya hay un descuento aplicado");
    }
}

function finalizarcompra() {
    if (parseInt(pagar.textContent) === 0) {
        alert("¡Tu carrito está vacío! Agregá alguna burger primero.");
        return; 
    }

    let boton = $('.btn-finalizar');
    boton.text("PROCESANDO PEDIDO...");
    boton.css('background-color', '#a0a0a0');
    setTimeout(function() {
        
        alert("¡Muchas gracias por tu compra en BURGA! Tu pedido ya se está cocinando. Total: $" + pagar.textContent);
        
        contador.textContent = 0;
        pagar.textContent = 0;
        $('#campos-direccion').fadeOut();
        $(domicilio).prop('checked', false); 
        aplicado = false;
        // 5. Devolvemos el botón a su estado original
        boton.text("FINALIZAR COMPRA");
        boton.css('background-color', '#CF2539');

    }, 2000);
}


function validarformulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("numero").value;
    let mensaje = document.getElementById("mensaje").value;
    let motivo = document.getElementById("motivo").value;
    let sucursal = document.getElementById("sucursal").value;

    if (nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === "" || motivo === "" || sucursal === "") {
        alert("Error. Por favor, completá todos los campos, incluido el motivo y la sucursal.");
    } 
    else if (!email.includes("@")) {
        alert("Por favor, ingresá un mail válido que contenga un @.");
    } 
    else {
        alert("Formulario enviado correctamente!");
        
        // Limpiamos todo
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("email").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("mensaje").value = "";
        document.getElementById("motivo").selectedIndex = 0;
        document.getElementById("sucursal").selectedIndex = 0;

    }
}

domicilio.addEventListener("change", function() {
    if(domicilio.checked){
        // Muestra los inputs de dirección usando jQuery
        $('#campos-direccion').fadeIn(200);

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
        // Oculta los inputs de dirección usando jQuery
        $('#campos-direccion').fadeOut(200);

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

$(document).ready(function() {
  $('.secdesplegable .fa-arrow-down').click(function() {
    $('.carritosection').fadeToggle(300); // 300 son los milisegundos que dura la animación
    $(this).toggleClass('rotate-arrow');
    
  });

});


