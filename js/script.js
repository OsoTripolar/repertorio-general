
document.getElementById('activador').addEventListener('input', function() {

    var inputValue = this.value;
    var calificaciones = document.querySelectorAll('.repertorio__calificacion');
    
    if (inputValue === 'osito' || inputValue === 'chino' || inputValue === 'oso') {
        calificaciones.forEach(function(calificacion) {
            calificacion.style.display = 'inline';
        });
    } else {
        calificaciones.forEach(function(calificacion) {
            calificacion.style.display = 'none'; // O 'block', según cómo quieras que se muestre
        });
    }

});

document.addEventListener('keydown', function(event) {

    // Verifica si la tecla presionada es la "l" (minúscula)
    if (event.key === 'l') {

        event.preventDefault(); // Evita que la "l" se escriba en el input

        // Redirige al formulario en el footer
        document.getElementById('activador').focus(); // Lleva el foco al campo de entrada del formulario
    }
});

document.getElementById('boton').addEventListener('click', function() {
    // Selecciona todos los elementos con las clases repertorio__artista y repertorio__cancion
    const elementos = document.querySelectorAll('.repertorio__artista, .repertorio__cancion');

    // Oculta todos los elementos seleccionados
    elementos.forEach(elemento => {
        elemento.style.display = 'none';
    });

    // Selecciona todos los elementos que también tienen la clase .james y los muestra
    const jamesElementos = document.querySelectorAll('.james');
    jamesElementos.forEach(elemento => {
        elemento.style.display = 'block';
    });
});