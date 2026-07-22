const boton = document.getElementById("btnProductos");

boton.addEventListener("click", function(){

    document.getElementById("productos").scrollIntoView({
        behavior: "smooth"
    });

});