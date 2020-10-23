$(document).ready(function(){
    var lista = document.createElement('div');
    lista.innerHTML = '<ul class="navbar-nav mr-auto"> <li class="nav-item active"><a id="principal" class="nav-link" href="#">Principal <span class="sr-only">(current)</span></a></li><li class="nav-item"><a id="tabla" class="nav-link" href="tabla.html">Tabla</a></li><li class="nav-item"><a id="video" class="nav-link" href="video.html">Video</a></li><li class="nav-item"><a id="form" class="nav-link" href="form.html">Formulario</a></li></ul>';

    $('#boton-barra').on("click",function(){
        $('#boton-barra').append(lista);
    });
});