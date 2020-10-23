//Este java scrip solo se ejecuta con el index.html
$(document).ready(function(){
    var lista = document.createElement('div');
    lista.innerHTML = '<ul class="navbar-nav mr-auto"> <li class="nav-item active"><a id="principal" class="nav-link" href="./pages/principal.html">Principal <span class="sr-only">(current)</span></a></li><li class="nav-item"><a id="tabla" class="nav-link" href="./pages/tabla.html">Tabla</a></li><li class="nav-item"><a id="video" class="nav-link" href="./pages/video.html">Video</a></li><li class="nav-item"><a id="form" class="nav-link" href="./pages/form.html">Formulario</a></li></ul>';

    $('#contenido').append('<div><img id="pingui" src="./images/Pinguino.jpeg" alt="Pinguino" width="50%"></div>');
    $('#contenido').append('<div><figure>Hecho por: Brayan Camilo Urrego Moreno.<br>Profesor: Javier Saldarriaga.<br>Practica 4: Fundamentos de Html, javascript y CSS.</figure></div>');

    $("#pingui").on("click",function(){
        alert('¡Los pinguinos dominaran los continentes!');
    });

    $("#pingui").css('border-radius','20px');
    $("#pingui").css('margin-bottom','20px');

    $('#boton-barra').on("click",function(){
        $('#boton-barra').append(lista);
    });
});