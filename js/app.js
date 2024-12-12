// menu responsive
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menu-bar"),
    enlaces = document.getElementById("enlaces");
    // click abrir
    btnMenuOpen.addEventListener("click", function(){
        menuResponsive.classList.add("active")
    });
    // click cerrar
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active")
    });

    // cerrar menu con elementos de enlace
    enlaces.addEventListener("click", function(){
        menuResponsive.style.transitionDelay = "0.5s"
        menuResponsive.classList.remove("active")
    });


// slider de productos
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecha = document.getElementById("btn-derecha");

    // evento para el boton derecho
    btnDerecha.addEventListener("click", function(){
        contenedor.scrollLeft += contenedor.offsetWidth;
    });
    // evento para el boton izquierdo
    btnIzquierdo.addEventListener("click", function(){
        contenedor.scrollLeft -= contenedor.offsetWidth;
    });

    var formulario = document.getElementById("formulario");

    function validar(e) {
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComents = document.getElementById("comentarios"),
            alertSucces = document.getElementById("alertSuccess"),
            alertError = document.getElementById("alertError") ;
    
        if (inputNombre.value.trim() === "" || inputEmail.value.trim() === "" || inputComents.value.trim() === "") {
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");
            setTimeout(function() {
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            }, 2000);
        } else {
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");
            setTimeout(function() {
                alertSucces.classList.remove("show");
                alertSucces.classList.add("hide");
            }, 2000);
            
            // Vaciar los inputs
            inputNombre.value = "";
            inputEmail.value = "";
            inputComents.value = "";
        }
    }
    
    // Asociar el evento al formulario
    formulario.addEventListener("submit", validar);
    
//  boton scroll top

var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");



// Detectar el scroll
window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;
    var fullSize = document.documentElement.scrollHeight;
    var sizeVP = document.documentElement.clientHeight;

    // Mostrar el botón si el scroll es mayor a 100px
    if (scroll > 100) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }

    // Verificar si se llegó al final de la página
    if (Math.ceil(scroll + sizeVP) >= fullSize) {
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }
});


// detectamos evento click en el boton

btnTop.addEventListener("click", function(){
    window.scrollTo(0,0);
})


// detectar evento click en el logo
logo.addEventListener("click", function(){
    window.scrollTo(0,0);
})