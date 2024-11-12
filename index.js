
document.addEventListener('DOMContentLoaded', function() {
    let acordeonContenidos = document.querySelectorAll('.acordeon-contenido');

    acordeonContenidos.forEach(function(contenido) 
    {
        contenido.style.display = 'none';
        //oculta todos los contenidos al cargar la pagina
    });

    let checkboxes = document.querySelectorAll('.acordeon-toggle');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            /*desactivar todos los demas checkboxes*/
            checkboxes.forEach(function(cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });

            //Cerrar todos los contenidos del acordeon
            acordeonContenidos.forEach(function(contenido) {
                contenido.style.display ='none';
            });

            let contenido = this.nextElementSibling;

            if (contenido.style.display === 'block') {
                contenido.style.display = 'none';
                this.checked = false; // Desactivar el checkbox si se cierra la seccion
            } else {
                contenido.style.display = 'block';
            }
        });
    });
});

// Selecciona el botón y el item-3
let toggleButton = document.getElementById("toggleButton");
let contentItem3 = document.getElementById("contentItem3");

// Añadir el evento de clic para el botón
document.getElementById("toggleButton").addEventListener("click", function() {
    const content = document.getElementById("contentItem3");

    // Alterna la clase 'active' en el botón para indicar si está activado o no
    this.classList.toggle("active");

    // Verifica si el botón tiene la clase 'active'
    if (this.classList.contains("active")) {
        content.style.whiteSpace = "normal";  // Ajustar texto en varias líneas
        content.style.wordWrap = "break-word"; // Romper palabras largas si es necesario
    } else {
        content.style.whiteSpace = "nowrap";  // No ajustar texto, mantener en una línea
        content.style.wordWrap = "normal";    // Sin romper palabras
    }
});



/*
<script>
document.addEventListener('DOMContentLoaded', function() {
    var acordeonContenidos = document.querySelectorAll('.acordeon-contenido');

    acordeonContenidos.forEach(function(contenido) {
        contenido.style.display = 'none'; // Oculta todos los contenidos al cargar la página
    });

    var checkboxes = document.querySelectorAll('.acordeon-toggle');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Desactivar todos los demás checkboxes
            checkboxes.forEach(function(cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });

            // Cerrar todos los contenidos del acordeón
            acordeonContenidos.forEach(function(contenido) {
                contenido.style.display = 'none';
            });

            var contenido = this.nextElementSibling;

            if (contenido.style.display === 'block') {
                contenido.style.display = 'none';
                this.checked = false; // Desactivar el checkbox si se cierra la sección
            } else {
                contenido.style.display = 'block';
            }
        });
    });
});
    
</script>

*/