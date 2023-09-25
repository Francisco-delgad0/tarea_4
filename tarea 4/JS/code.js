document.addEventListener("DOMContentLoaded", function () {
    const hacerZoomEnImagen = (imagen) => {
        const zoomBackground = document.getElementById('zoom-background');
        const zoomedImage = document.getElementById('zoomed-image');

        zoomedImage.src = imagen.src;
        zoomBackground.style.display = 'block';
    }

    const imagenesGaleria = document.querySelectorAll('.imagen img');
    imagenesGaleria.forEach((imagen) => {
        imagen.addEventListener('click', () => {
            hacerZoomEnImagen(imagen);
        });
    });

    const zoomBackground = document.getElementById('zoom-background');
    zoomBackground.addEventListener('click', () => {
        zoomBackground.style.display = 'none';
    });

    const calcularDiferenciaEdad = () => {
        const fechaNacimientoEntregada = new Date(document.getElementById('fecha-nacimiento').value);
        const fechaNacimientoPropia = new Date("2000-06-18"); // Tu fecha de nacimiento
        const diferenciaEnMilisegundos = fechaNacimientoPropia - fechaNacimientoEntregada;
        const diferenciaEnAnios = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24 * 365.25));
        
        document.getElementById('resultado-edad').textContent = `La diferencia de edad es de ${Math.abs(diferenciaEnAnios)} años.`;
    }

    const botonCalcularEdad = document.getElementById('calcular-edad');
    if (botonCalcularEdad) {
        botonCalcularEdad.addEventListener('click', calcularDiferenciaEdad);
    }

    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function (event) {
            event.preventDefault();
            const mensajeExito = document.createElement('p');
            mensajeExito.textContent = 'Mensaje enviado con éxito.';
            mensajeExito.style.color = 'green';
            mensajeEnviado.innerHTML = '';
            mensajeEnviado.appendChild(mensajeExito);
            document.getElementById('nombre').value = '';
            document.getElementById('correo').value = '';
            document.getElementById('asunto').value = '';
            document.getElementById('mensaje').value = '';
        });
    }
});