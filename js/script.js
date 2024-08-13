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