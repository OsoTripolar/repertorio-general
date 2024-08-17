var repertorioGeneral = document.querySelectorAll('.repertorio__cancion')

repertorioGeneral.forEach(function(leer){
    var contenido = leer.textContent || leer.innerText;

    if (contenido.includes('⭐')) {
        // Aplica una acción, por ejemplo, agregar una clase
        div.classList.add('repertorio__cancion--estrella');
    }
})

var ocultos = document.querySelectorAll('.repertorio__cancion--estrella');

ocutos.forEach(function(calificacion) {
    calificacion.style.backgroundColor = 'red';
});