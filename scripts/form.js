function enviarDatos(){
    alert('Datos enviados correctamente. NO nos llame, nosotro lo haremos.');
    return true;
}

$(document).ready(function(){
    var lista = document.createElement('div');
    lista.innerHTML = '<ul class="navbar-nav mr-auto"> <li class="nav-item active"><a id="principal" class="nav-link" href="principal.html">Principal <span class="sr-only">(current)</span></a></li><li class="nav-item"><a id="tabla" class="nav-link" href="tabla.html">Tabla</a></li><li class="nav-item"><a id="video" class="nav-link" href="video.html">Video</a></li><li class="nav-item"><a id="form" class="nav-link" href="#">Formulario</a></li></ul>';

    $('#boton-barra').on("click",function(){
        $('#boton-barra').append(lista);
    });
});
