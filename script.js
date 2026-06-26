<<<<<<< HEAD
// ─── REFERENCIAS GLOBALES (solo existen en menu.html) ─────────────────────────
let contador   = document.getElementById("contador");
let pagar      = document.getElementById("totalpagar");
let descuento  = document.getElementById("descuento");
let domicilio  = document.getElementById("envio");
let aplicado   = false;

// ─── CARRITO ──────────────────────────────────────────────────────────────────
function agregarsmash() {
    if (aplicado === true) {
        pagar.textContent = parseInt(pagar.textContent) / 0.9;
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent = parseInt(pagar.textContent) + 14000;
        aplicado = false;
        alert("El descuento ya no está aplicado. Por favor, ingresalo de nuevo.");
    } else {
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent   = parseInt(pagar.textContent) + 14000;
    }
}

function agregarclasica() {
    if (aplicado === true) {
        pagar.textContent = parseInt(pagar.textContent) / 0.9;
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent = parseInt(pagar.textContent) + 10000;
        aplicado = false;
        alert("El descuento ya no está aplicado. Por favor, ingresalo de nuevo.");
    } else {
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent   = parseInt(pagar.textContent) + 10000;
    }
}

function agregarurbano() {
    if (aplicado === true) {
        pagar.textContent = parseInt(pagar.textContent) / 0.9;
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent = parseInt(pagar.textContent) + 8500;
        aplicado = false;
        alert("El descuento ya no está aplicado. Por favor, ingresalo de nuevo.");
    } else {
        contador.textContent = parseInt(contador.textContent) + 1;
        pagar.textContent   = parseInt(pagar.textContent) + 8500;
    }
}

function aplicardescuento() {
    if (descuento.value !== 'BURGA10' && aplicado === false) {
        alert("Por favor ingresá un descuento válido.");
        document.getElementById("descuento").value = "";
        return;
    }
    if (descuento.value === "BURGA10" && aplicado === false) {
        pagar.textContent = parseInt(pagar.textContent) * 0.9;
        aplicado = true;
    } else if (aplicado === true) {
        alert("Ya hay un descuento aplicado.");
=======
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
>>>>>>> 41f74a50c7b70dd801d922114336011951fac509
    }
}

function finalizarcompra() {
    if (parseInt(pagar.textContent) === 0) {
        alert("¡Tu carrito está vacío! Agregá alguna burga primero.");
<<<<<<< HEAD
        return;
=======
        return; 
>>>>>>> 41f74a50c7b70dd801d922114336011951fac509
    }

    let boton = $('.btn-finalizar');
    boton.text("PROCESANDO PEDIDO...");
    boton.css('background-color', '#a0a0a0');
<<<<<<< HEAD

    setTimeout(function () {
        alert("¡Muchas gracias por tu compra en BURGA! Tu pedido ya se está cocinando. Total: $" + pagar.textContent);

        contador.textContent = 0;
        pagar.textContent    = 0;
        $('#campos-direccion').fadeOut();
        $(domicilio).prop('checked', false);
        aplicado = false;

        boton.text("FINALIZAR COMPRA");
        boton.css('background-color', '#CF2539');
    }, 2000);
}

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────
function suscribirse() {
    const emailRegex    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputContacto   = document.getElementById("contacto");
    let email           = inputContacto.value;

    if (email === "") {
        alert("No ingresaste ningún mail.");
    } else if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido.");
        return;
    } else {
        alert("¡Te suscribiste exitosamente!");
        inputContacto.value = "";
    }
}

// ─── FORMULARIO DE CONTACTO ───────────────────────────────────────────────────
function validarformulario() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nombre   = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email    = document.getElementById("email").value;
    let telefono = document.getElementById("numero").value;
    let mensaje  = document.getElementById("mensaje").value;
    let motivo   = document.getElementById("motivo").value;
    let sucursal = document.getElementById("sucursal").value;

    if (!nombre || !apellido || !email || !telefono || !mensaje || !motivo || !sucursal) {
        alert("Por favor, completá todos los campos, incluido el motivo y la sucursal.");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("El correo electrónico no es válido.");
        return;
    }

    alert("¡Formulario enviado correctamente!");
    document.getElementById("nombre").value     = "";
    document.getElementById("apellido").value   = "";
    document.getElementById("email").value      = "";
    document.getElementById("numero").value     = "";
    document.getElementById("mensaje").value    = "";
    document.getElementById("motivo").selectedIndex   = 0;
    document.getElementById("sucursal").selectedIndex = 0;
}

// ─── ENVÍO / DOMICILIO ────────────────────────────────────────────────────────
if (domicilio) {
    domicilio.addEventListener("change", function () {
        if (domicilio.checked) {
            $('#campos-direccion').fadeIn(200);
            if (aplicado === true) {
                pagar.textContent = parseInt(pagar.textContent) / 0.9;
                pagar.textContent = parseInt(pagar.textContent) + 1200;
                aplicado = false;
                alert("El descuento ya no está aplicado. Por favor, ingresalo de nuevo.");
            } else {
                pagar.textContent = parseInt(pagar.textContent) + 1200;
            }
        } else {
            $('#campos-direccion').fadeOut(200);
            if (aplicado === true) {
                pagar.textContent = parseInt(pagar.textContent) / 0.9;
                pagar.textContent = parseInt(pagar.textContent) - 1200;
                aplicado = false;
                alert("El descuento ya no está aplicado. Por favor, ingresalo de nuevo.");
            } else {
                pagar.textContent = parseInt(pagar.textContent) - 1200;
            }
        }
    });
}

// ─── CARRITO DESPLEGABLE (solo menu.html, donde jQuery está cargado) ──────────
if (typeof $ !== 'undefined') {
    $(document).ready(function () {
        $('.secdesplegable .fa-arrow-down').click(function () {
            $('.carritosection').fadeToggle(300);
            $(this).toggleClass('rotate-arrow');
        });
    });
}

// ─── REGISTRO (formulario.html) ───────────────────────────────────────────────
function registrar() {
    let valido = true;

    function validarCampo(idCampo, idError, fnTest) {
        const campo = document.getElementById(idCampo);
        const error = document.getElementById(idError);
        if (!campo || !error) return;
        const ok = fnTest(campo.value);
        campo.classList.toggle('campo-error', !ok);
        error.style.display = ok ? 'none' : 'block';
        if (!ok) valido = false;
    }

    validarCampo('nombre',   'err-nombre',   v => v.trim().length > 0);
    validarCampo('apellido', 'err-apellido', v => v.trim().length > 0);
    validarCampo('email',    'err-email',    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    validarCampo('password', 'err-password', v => v.length >= 8);

    // Validar que las contraseñas coincidan
    const pass1    = document.getElementById('password');
    const pass2    = document.getElementById('password2');
    const errPass2 = document.getElementById('err-password2');
    if (pass1 && pass2 && errPass2) {
        const coinciden = pass1.value === pass2.value && pass2.value.length > 0;
        pass2.classList.toggle('campo-error', !coinciden);
        errPass2.style.display = coinciden ? 'none' : 'block';
        if (!coinciden) valido = false;
    }

    // Validar términos y condiciones
    const tyc    = document.getElementById('chkTyc');
    const errTyc = document.getElementById('err-tyc');
    if (tyc && errTyc) {
        errTyc.style.display = tyc.checked ? 'none' : 'block';
        if (!tyc.checked) valido = false;
    }

    if (valido) {
        // Saludo personalizado con el nombre ingresado
        const nombre      = document.getElementById('nombre').value.trim();
        const exitoTitulo = document.getElementById('exito-titulo');
        if (exitoTitulo) {
            exitoTitulo.textContent = '¡BIENVENIDO/A, ' + nombre.toUpperCase() + '!';
        }

        document.getElementById('formContenedor').style.display = 'none';
        document.getElementById('exitoBox').style.display       = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
=======
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
    function suscribirse(){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let inputContacto = document.getElementById("contacto");
        let email = inputContacto.value;
        if (email === "") {
            alert("No has ingresado ningún mail.");
        } 
        else if (!emailRegex.test(email)) {
            alert('El correo electrónico no es válido.');
            return;
        }
        else {
            alert("¡Te has suscripto exitosamente!");
            inputContacto.value = ''; // Limpiamos el input
        }
    }

function validarformulario() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    else if (!emailRegex.test(email)) {
        alert('El correo electrónico no es válido.');
        return;
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


>>>>>>> 41f74a50c7b70dd801d922114336011951fac509
